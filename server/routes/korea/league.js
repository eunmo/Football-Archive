'use strict';

const path = require('path');

const KLeagueUtil = require('../../util/kleague');
const exec = require('../../util/exec');

module.exports = function(router, db) {
	const KLeague = db.collection('KLeague');
	const teamNameMap = KLeagueUtil.leagueTeamNameMap;

	function promiseFromChildProcess(child) {
		return new Promise(function (resolve, reject) {
			child.addListener("error", reject);
			child.addListener("exit", resolve);
		});
	}

	function normalizeName(team, season) {
		if (teamNameMap[season] && teamNameMap[season][team])
			return teamNameMap[season][team];

		return team;
	}

	function getGames(data) {
		const schedule = data.monthlyScheduleDailyGroup;
		var date, formattedDate, uri, index, match, season;
		var games = [];

		schedule.forEach(day => {
			var date = day.date;
			var season = date.substring(0, 4);
			var formattedDate = date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4);

			day.scheduleList.forEach(match => {
				uri = match.textRelayURI.replace(/^.*gameId=/, '');
				games.push({
					date: formattedDate,
					home: normalizeName(match.homeTeamName, season),
					away: normalizeName(match.awayTeamName, season),
					state: match.state,
					round: match.gameContent,
					uri: uri,
				});
			});
		});

		return games;
	}

	function getMonth(league, year, month) {
		var monthUrl = (month < 10 ? '0' : '') + month;
		const execStr = 'perl ' + path.join(__dirname, '../../../perl', 'kleague.pl') + ' ' + league + ' ' + year + ' ' + monthUrl;

		return exec(execStr)
		.then(function (data) {
			if (data === '')
				return null;

			if (data.month === undefined || data.month !== monthUrl)
				return null;

			return getGames(data);
		});
	}

	router.get('/api/korea/league/update/:_season/:_league', async function(req, res) {
		const season = req.params._season;
		const leagueName = req.params._league;

		var month, data;
		var promises = [];
		var months = [];

		for (month = 1; month <= 12; month++) {
			data = await getMonth(leagueName, season, month);
			months.push(data);
		}

		var name = 'K League ' + ((leagueName === 'kleague2') ? '2' : '1');

		var games = [];
		months.forEach(month => { if (month !== null) { games = games.concat(month); } });
		var entry = { season: season, name: name, games: games };
		return KLeague.findOneAndReplace({ season: season, name: name }, entry, { upsert: true })
			.then(_ => { res.sendStatus(200); });
	});
};
