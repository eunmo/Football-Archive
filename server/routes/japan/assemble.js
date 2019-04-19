'use strict';

module.exports = function(router, db) {
	const Seasons = db.collection('Seasons');
	const KLeague = db.collection('KLeague');
  const Cups = db.collection('Cups');

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
	
	router.get('/api/japan/assemble/:_season', async function(req, res) {
		const season = req.params._season;
		var promises = [];
		var cup = await Cups.findOne({ season: season, name: "Emperor's Cup" });
		var seasons = await Seasons.find({ season: season, team: { $in: cup.teams }}).toArray();
		var teamMap = {};

		seasons.forEach(season => {
			teamMap[season.team] = season;
			season.competitions = season.competitions.filter(c => c.name !== "Emperor's Cup");
		});

		var comp, game;
		cup.rounds.forEach(round => {
			round.matches.forEach(match => {
				if (teamMap[match.l]) {
					comp = getComp(teamMap[match.l], cup.name, cup.season);
					game = { date: match.date, place: 'H', round: round.name, vs: match.r, url: match.url };
					if (round.name === 'Final')
						game.place = 'N';
					comp.matches.push(game);
				}

				if (teamMap[match.r]) {
					comp = getComp(teamMap[match.r], cup.name, cup.season);
					game = { date: match.date, place: 'A', round: round.name, vs: match.l, url: match.url };
					if (round.name === 'Final')
						game.place = 'N';
					comp.matches.push(game);
				}
			});
		});
			
		var bulk = Seasons.initializeUnorderedBulkOp();
	
		var team;
		for (var i in teamMap) {
			team = teamMap[i];
			bulk.find({ season: team.season, team: team.team }).upsert().update({ $set: { competitions: team.competitions }});
		}

		try {
			var result = await bulk.execute();
		} catch (err) {
			console.log(err);
		}

		res.sendStatus(200);
	});
}

