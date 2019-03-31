'use strict';

const KLeagueUtil = require('../../util/kleague');

module.exports = function(router, db) {
	const Seasons = db.collection('Seasons');
	const KLeague = db.collection('KLeague');
  const Cups = db.collection('Cups');

	function newTeam(team, season) {
		return { season: season, team: team, competitions: [] };
	}

	function getComp(team, compName, season) {
		var comp;
		for (var i = 0; i < team.competitions.length; i++) {
			comp = team.competitions[i];
			if (comp.name === compName)
				return comp;
		}

		comp = { name: compName, url: compName + season, matches: [] };
		team.competitions.push(comp);
		return comp;
	}

	function formatRound(season, league, gameid) {
		const compMap = { 1: 'K League 1', 2: 'K League 2', 4: 'K League Relegation' };
		var round = gameid;
			
		if (league === 4)
			return [compMap[league], 'PO'];

		if (league === 1) {
			if (season === '2013') {
				if (gameid <= 26 * 7) {
					round = Math.ceil(gameid / 7);
				} else {
					gameid -= 26 * 7;
					round = 26 + Math.ceil(gameid / 6);
				}
			} else {
				round = Math.ceil(gameid / 6);
			}
		} else { // K league 2
			if (season === '2013') {
				round = Math.ceil(gameid / 4);
			} else if (false
				|| season === '2015'
				|| season === '2016'
				) {
				if (gameid > 44 * 5) {
					league = 4;
					round = gameid -= 44 * 5;
				} else {
					round = Math.ceil(gameid / 5);
				}
			} else {
				if (gameid > 36 * 5) {
					league = 4;
					round = gameid -= 36 * 5;
				} else {
					round = Math.ceil(gameid / 5);
				}
			}
		}
		
		return [compMap[league], round + 'R'];
	}
	
	router.get('/api/korea/assemble/:_season', function(req, res) {
		const season = req.params._season;
		var promises = [];
		promises.push(KLeague.findOne({ season: season }));
		promises.push(Cups.findOne({ season: season, name: 'KFA Cup' }));
		promises.push(Cups.findOne({ season: season, name: 'AFC Champions League' }));

		KLeague.find({ season: season }).toArray()
		Promise.all(promises)
		.then(async function (array) {
			var [league, cup, acl] = array;
			var teamMap = {};

			var i, j;
			var match, game, round, comp, url;

			for (i in league.games) {
				match = league.games[i];
				[comp, round] = formatRound(season, match.league, match.gameid);
				url = 'KL' + match.url;

				if (teamMap[match.home] === undefined) {
					teamMap[match.home] = newTeam(match.home, season);
				}
				
				if (teamMap[match.away] === undefined) {
					teamMap[match.away] = newTeam(match.away, season);
				}

				getComp(teamMap[match.home], comp, season).matches.push({ date: match.date, place: 'H', round: round, vs: match.away, url: url });
				getComp(teamMap[match.away], comp, season).matches.push({ date: match.date, place: 'A', round: round, vs: match.home, url: url });
			}

			for (i in cup.rounds) {
				round = cup.rounds[i];

				for (j in round.matches) {
					match = round.matches[j];

					if (teamMap[match.l]) {
						comp = getComp(teamMap[match.l], cup.name, cup.season);
						game = { date: match.date, place: 'H', round: round.name, vs: match.r };
						if (match.url !== undefined)
							game.url = match.url;
						comp.matches.push(game);
					}

					if (teamMap[match.r]) {
						comp = getComp(teamMap[match.r], cup.name, cup.season);
						game = { date: match.date, place: 'A', round: round.name, vs: match.l };
						if (match.url !== undefined)
							game.url = match.url;
						comp.matches.push(game);
					}
				}
			}

			const aclTeams = KLeagueUtil.aclTeams;
			var team;
			var k, round, match, entry;
			var place, vs;

			if (aclTeams[season]) {
				if (acl === null) {
					comp = { name: 'AFC Champions League', url: '/all_matches/afc-champions-league-' + season + '/', matches: []};
					for (i = 0; i < aclTeams[season].length; i++) {
						team = aclTeams[season][i];
						teamMap[team].competitions.push(comp);
					}
				} else {
					for (i = 0; i < aclTeams[season].length; i++) {
						team = aclTeams[season][i];
						comp = { name: 'AFC Champions League', url: '/all_matches/afc-champions-league-' + season + '/', matches: []};
					
						for (j = 0; j < acl.rounds.length; j++) {
							round = acl.rounds[j];

							for (k = 0; k < round.matches.length; k++) {
								match = round.matches[k];

								if (!(match.l === team || match.r === team))
									continue;

								place = (match.l === team ? 'H' : 'A');
								vs = (match.l === team ? match.r : match.l);
								comp.matches.push({ date: match.date, place: place, round: round.name, vs: vs, url: match.url });
							}
						}
						
						teamMap[team].competitions.push(comp);
					}
				}
			}

			var bulk = Seasons.initializeUnorderedBulkOp();

			for (i in teamMap) {
				team = teamMap[i];
				bulk.find({ season: team.season, team: team.team }).upsert().update({ $set: { assembled: true, competitions: team.competitions }});
			}

			try {
				var result = await bulk.execute();
			} catch (err) {
				console.log(err);
			}

			res.sendStatus(200);
		});
	});
};
