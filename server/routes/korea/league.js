'use strict';

const path = require('path');

const KLeagueUtil = require('../../util/kleague');
const exec = require('../../util/exec');

module.exports = function(router, db) {
  const KLeague = db.collection('KLeague');
  const teamNameMap = KLeagueUtil.leagueTeamNameMap;

  function normalizeName(team, season) {
    if (teamNameMap[season] && teamNameMap[season][team])
      return teamNameMap[season][team];

    return team;
  }

  function getMonth(year, month) {
    var monthUrl = (month < 10 ? '0' : '') + month;
    const execStr =
      'perl ' +
      path.join(__dirname, '../../../perl', 'kleague.pl') +
      ' ' +
      year +
      ' ' +
      monthUrl;

    return exec(execStr).then(function(data) {
      if (data === '') return null;

      data.forEach(match => {
        match.home = normalizeName(match.home, year);
        match.away = normalizeName(match.away, year);
      });

      return data;
    });
  }

  router.get('/api/korea/league/update/:_season', async function(req, res) {
    const season = req.params._season;

    var month, data;
    var months = [];

    for (month = 1; month <= 12; month++) {
      months.push(await getMonth(season, month));
    }

    var games = [];
    months.forEach(month => {
      if (month !== null) {
        games = games.concat(month);
      }
    });
    var entry = { season: season, games: games };
    return KLeague.findOneAndReplace({ season: season }, entry, {
      upsert: true
    }).then(_ => {
      res.sendStatus(200);
    });
  });
};
