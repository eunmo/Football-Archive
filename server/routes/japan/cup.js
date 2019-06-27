'use strict';

const JLeagueUtil = require('../../util/jleague');
const get = require('../../util/get');

module.exports = function(router, db) {
  const Seasons = db.collection('Seasons');
  const Cups = db.collection('Cups');
  const teamNameMap = JLeagueUtil.cupTeamNameMap;

  function getTeams(season) {
    return Seasons.find({ season: season })
      .toArray()
      .then(function(seasons) {
        var map = {};

        seasons.forEach(season => {
          map[season.team] = true;
        });

        return map;
      });
  }

  const roundMap = [
    '1 Round',
    '2 Round',
    'Round of 32',
    'Round of 16',
    'Quarter-finals',
    'Semi-finals',
    'Final'
  ];

  const roundIndexMap = {
    '１回戦': 0,
    '２回戦': 1,
    '３回戦': 2,
    '４回戦': 3,
    ラウンド16: 3,
    準々決勝: 4,
    準決勝: 5,
    決勝戦: 6
  };

  function formatDate(date) {
    var elems = date.split('/');
    return [elems[1], elems[2], elems[0]].join('/');
  }

  function fetchCup(year, teamMap) {
    var url =
      'http://www.jfa.jp/match/emperorscup_2014/2014/match/schedule.json';

    if (year > 2014) {
      url = url.replace(/2014\/2014/g, year);
    }

    const urlBase = 'JECUP_' + year + '_';

    return get(url).then(data => {
      var cup = {
        name: "Emperor's Cup",
        season: year,
        rounds: [],
        assembled: true
      };
      var rounds = cup.rounds;
      var teams = {};

      data.matchScheduleList.matchSchedule.forEach(match => {
        if (match.matchDate === '未定') return;

        const roundIndex = roundIndexMap[match.matchTypeName];
        if (rounds[roundIndex] === undefined) {
          rounds[roundIndex] = {
            name: roundMap[roundIndex],
            matches: []
          };
        }

        var newMatch = {
          date: formatDate(match.matchDate),
          l: match.homeTeamName,
          r: match.awayTeamName
        };

        if (teamNameMap[newMatch.l]) newMatch.l = teamNameMap[newMatch.l];

        if (teamNameMap[newMatch.r]) newMatch.r = teamNameMap[newMatch.r];

        teams[newMatch.l] = true;
        teams[newMatch.r] = true;

        if (teamMap[newMatch.l] === true || teamMap[newMatch.r] === true)
          newMatch.url = urlBase + match.matchNumber;

        if (match.score.homeScore !== '' && match.score.awayScore !== '')
          newMatch.score = match.score.homeScore + ':' + match.score.awayScore;

        if (
          match.score.homePKScore !== undefined &&
          match.score.awayPKScore !== undefined
        )
          newMatch.pk = match.score.homePKScore + ':' + match.score.awayPKScore;

        if (roundIndex === 6) {
          if (match.score.homeWinFlag) {
            cup.winner = newMatch.l;
          } else if (match.score.awayWinFlag) {
            cup.winner = newMatch.r;
          }
        }

        rounds[roundIndex].matches.push(newMatch);
      });

      var teamArray = [];
      for (var i in teams) {
        teamArray.push(i);
      }
      cup.teams = teamArray;

      return Cups.findOneAndReplace(
        { season: cup.season, name: cup.name },
        cup,
        { upsert: true }
      );
    });
  }

  router.get('/api/japan/cup/update/:_season/', function(req, res) {
    const season = req.params._season;

    getTeams(season)
      .then(map => {
        return fetchCup(season, map);
      })
      .then(data => {
        res.sendStatus(200);
      });
  });
};
