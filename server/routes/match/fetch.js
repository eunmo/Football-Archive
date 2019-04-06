'use strict';

const path = require('path');
const Promise = require('bluebird');
const http = require('http');

const KLeagueUtil = require('../../util/kleague');
const UrlUtil = require('../../util/url');
const exec = require('../../util/exec');
const KLeagueMatch = require('../../util/match_kl');

module.exports = function(router, db) {
	const Seasons = db.collection('Seasons');
	const Matches = db.collection('Matches');

	function get(url) {

		return new Promise(function (resolve, reject) {
			http.get(url, (resp) => {
				let data = '';
				resp.setEncoding('utf8');
				resp.on('data', (chunk) => { data += chunk; });
				resp.on('end', () => { resolve(JSON.parse(data)); });
			}).on("error", (err) => {
				reject(err);
			});
		});
	}
	
	function getKLeagueMatch(url) {
		var uri = url.replace(/^KL/, '');

		return KLeagueMatch.fetch(uri)
		.then(summary => {
			if (summary === null)
				return;

			return Matches.insert({ url: url, summary: summary });
		});
	}

	function formatKFACupMatch(data) {
		const teamNameMap = KLeagueUtil.cupTeamNameMap;
		const teamNormalizeNameMap = KLeagueUtil.cupTeamNormalizeNameMap;

		var match = {
			goals: [],
			players: {
				l: { start: [], sub: [] },
				r: { start: [], sub: [] }
			}
		};

		var assistMap = [];

		match.l = data.l;
		match.r = data.r;

		if (teamNameMap[match.l])
			match.l = teamNameMap[match.l];

		if (teamNameMap[match.r])
			match.r = teamNameMap[match.r];

		if (teamNormalizeNameMap[match.l])
			match.l = teamNormalizeNameMap[match.l];

		if (teamNormalizeNameMap[match.r])
			match.r = teamNormalizeNameMap[match.r];

		if (data.aet === true)
			match.aet = true;

		if (data.pso)
			match.pso = data.pso;

		const sides = ['l', 'r'];
		var i, side;
		var j, og, goal;

		for (i = 0; i < sides.length; i++) {
			side = sides[1 - i];

			for (j = 0; j < data.og[i].length; j++) {
				og = data.og[i];
				goal = { side: side, scorer: og.name, minute: og.minute, style: 'own goal' };
				match.goals.push(goal);
			}
		}

		function getCard(row, player) {
			var cards;

			if (row.yellows) {
				cards = row.yellows.split(',');
				if (cards.length === 2) {
					player.card = { type: 'Second yellow', minute: cards[1] };
				} else {
					player.card = { type: 'yellow', minute: cards[0] };
				}
			}

			if (row.reds) {
				if (player.card === undefined || player.card.type !== 'Second yellow') {
					player.card = { type: 'red', minute: row.reds };
				}
			}
		}

		function addGoal(row, player, side) {
			if (row.goals === undefined)
				return;

			var goals = row.goals.split(',');
			var i, minute, goal;

			for (i = 0; i < goals.length; i++) {
				minute = goals[i];

				goal = { side: side, scorer: player.name, minute: minute };

				if (minute.match('[P]')) {
					goal.minute = minute.replace('[P]', '');
					goal.style = 'penalty';
				}

				match.goals.push(goal);
			}
		}

		function addAssist(row, player) {
			if (row.assists === undefined)
				return;

			var assists = row.assists.split(',');
			var i, minute;

			for (i = 0; i < assists.length; i++) {
				minute = assists[i];

				assistMap[minute] = player.name;
			}
		}

		function getSubIn(player, sideIndex) {
			const subs = data.sub[sideIndex];
			var i, sub, number;

			for (i = 0; i < subs.length; i++) {
				sub = subs[i];
				number = sub.number;

				if (number === player.number && sub.state === 'IN') {
					player.sub = sub.minute;
				}
			}
		}

		function getSubOut(player, sideIndex) {
			const subs = data.sub[sideIndex];
			var i, sub, number;

			for (i = 0; i < subs.length; i++) {
				sub = subs[i];
				number = sub.number;

				if (number === player.number && sub.state === 'OUT') {
					if (player.sub === undefined) {
						player.sub = sub.minute;
					} else {
						player.sub = [player.sub, sub.minute];
					}
				}
			}
		}
		
		var row, player;

		for (i = 0; i < sides.length; i++) {
			side = sides[i];

			for (j = 0; j < data.starting[i].length; j++) {
				row = data.starting[i][j];
				player = { number: row.number, name: row.name };
				getCard(row, player);
				addGoal(row, player, side);
				addAssist(row, player);
				getSubOut(player, i);

				match.players[side].start.push(player);
			}
		}

		for (i = 0; i < sides.length; i++) {
			side = sides[i];

			for (j = 0; j < data.bench[i].length; j++) {
				row = data.bench[i][j];
				player = { number: row.number, name: row.name };
				getCard(row, player);
				addGoal(row, player, side);
				addAssist(row, player);
				getSubIn(player, i);
				getSubOut(player, i);

				match.players[side].sub.push(player);
			}
		}

		for (i = 0; i < match.goals.length; i++) {
			goal = match.goals[i];

			if (goal.style !== undefined)
				continue;

			if (assistMap[goal.minute])
				goal.assist = assistMap[goal.minute];
		}

		match.goals.sort((a, b) => { return a.minute - b.minute; });

		return match;
	}

	function getKFACupMatch(url) {
		const uri = url.replace(/^KFACUP/, '').replace(/=/g, '%3D').replace(/&/, '%26');
		const execStr = 'perl ' + path.join(__dirname, '../../../perl', 'kfacup_match.pl') + ' ' + uri;

		return exec(execStr)
		.then(function (data) {
			if (data === '')
				return;

			if (data.starting[0].length === 0)
				return;

			const summary = formatKFACupMatch(data);

			return Matches.insert({ url: url, summary: summary });
		});
	}

	function fetchMatchUrl(url) {
		if (url === '' || url === undefined || url === 'undefined')
			return;

		if (url.match(/^KL/))
			return getKLeagueMatch(url);
		
		if (url.match(/^KFACUP/))
			return getKFACupMatch(url);

		if (url.match(/^JECUP/))
			return;

		const execStr = 'perl ' + path.join(__dirname, '../../../perl', 'match.pl') + ' ' + url;
		const teamNameMap = KLeagueUtil.replaceTeamNameMap;

		return exec(execStr)
		.then(function (data) {
			if (data === '')
				return;

			if (teamNameMap[data.l])
				data.l = teamNameMap[data.l];

			if (teamNameMap[data.r])
				data.r = teamNameMap[data.r];

			const newMatch = {
				url: url,
				summary: data
			};

			return Matches.insert(newMatch);
		}).catch(function (error) {
			console.log(execStr);
		});
	}

	function fetchThenRespond(res, urls) {
		Matches.find({url: {$in: urls}}, {_id: 0, url: 1}).toArray()
			.then(function(matches) {
				var fetchUrls = [];
				var urlMap = {};
				var i, url;

				for (var i in matches) {
					urlMap[matches[i].url] = true;
				}

				for (var i in urls) {
					url = urls[i];
					if (urlMap[url] === undefined) {
						fetchUrls.push(url);
					}
				}

				Promise.map(fetchUrls, function (url) {
					return fetchMatchUrl(url);
				}, {concurrency: 5})
				.then(function () {
					res.sendStatus(200);
				});
			});
	}
	
	router.get('/api/match/fetch-season/:_season', function(req, res) {
		const season = req.params._season;
		
		Seasons.find({season: season}).toArray()
			.then(function(seasons) {
				if (seasons.length === 0) {
					res.sendStatus(204);
				} else {
					var season, competition, match;
					var matchDate;
					var i, j, k;
					var urlMap = {};

					for (i in seasons) {
						season = seasons[i];

						for (j in season.competitions) {
							competition = season.competitions[j];

							for (k in competition.matches) {
								match = competition.matches[k];
								matchDate = new Date(match.date);

								if (matchDate < new Date()) {
									urlMap[match.url] = match.url;
								}
							}
						}
					}

					var urls = [];
					for (i in urlMap) {
						urls.push(i);
					}

					fetchThenRespond(res, urls);	
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	});
};
