import React, { Component } from 'react';

import './style.css';

import Scoreboard from '../Scoreboard';

import teams from '../../data/teams';
import rounds from '../../data/rounds';

import UrlUtil from '../../util/url';
import SquadUtil from '../../util/squad';

export default class SeasonSummary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			league: [],
			cups: [],
			europe: [],
			squad: [],
			player: null
		};

		this.selectSeason = this.selectSeason.bind(this);
		this.selectPlayer = this.selectPlayer.bind(this);
	}

	componentDidMount() {
		this.selectSeason(this.props.season, this.props.team);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.season !== nextProps.season ||
				this.props.team !== nextProps.team) {
			this.selectSeason(nextProps.season, nextProps.team);
		}
	}

	selectPlayer(player) {
		if (this.state.player === player.fullname) {
			this.setState({ player: null });
		} else {
			this.setState({ player: player.fullname });
		}
	}

	getScoreboard(match, key) {
		return (<Scoreboard key={key} team={this.props.team} match={match} player={this.state.player} />);
	}

  render() {
		function displayRank(rank) {
			if (rank === 1) {
				return rank + 'st';
			} else if (rank === 2) {
				return rank + 'nd';
			} else {
				return rank + 'th';
			}
		}

		function getImgSrc(team) {
			var logoID = 2608043;

			if (teams[team] !== undefined) {
				logoID = teams[team].id;
			}

			return 'http://img.uefa.com/imgml/TP/teams/logos/50x50/' + logoID + '.png';
		}

		function displayRound(cup, round) {
			if (rounds[cup] !== undefined) {
				if (rounds[cup][round] !== undefined) {
					return rounds[cup][round];
				}
			}

			if (round.match(/^Group/)) {
				return 'G';
			}

			return round;
		}

    return (
			<div>
			<div className="flex-container">
				{this.state.europe.length > 0 &&
				<div className="flex-1">
					{this.state.europe.map(cup => {
						return (
							<div key={cup.name}>
								<h3 className="text-center">{cup.name}</h3>
								{cup.rounds.map(round => {
									return (
										<div className="flex-container Season-Summary-team" key={round.team}>
											<div className="flex-1 flex-container-right-aligned Season-Summary-left">{displayRound(cup.name, round.round)}</div>
											{this.getScoreboard(round.matches[0])}
											{round.matches.length > 1 ?
												this.getScoreboard(round.matches[1])
												: round.hideEmpty || <div className="Season-Summary-empty-match" />
											}
											<div className="flex-1 Season-Summary-right">
												<div>
													<img src={getImgSrc(round.team)} className="Season-Summary-logo" alt="" />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
				}
				<div className="flex-1">
					<h3 className="text-center">EPL</h3>
					{this.state.league.map(team => {
						return (
							<div className="flex-container Season-Summary-team" key={team.name}>
								<div className="flex-1 flex-container-right-aligned Season-Summary-left">
									{team.name !== this.props.team && team.rank}
								</div>
								{
									team.name === this.props.team
									? <div className="Season-Summary-self">{displayRank(team.rank)}</div>
									: team.matches.map(match => {
										return this.getScoreboard(match, match.place);
									})
								}
								<div className="flex-1 Season-Summary-right">
									<div>
										<img src={getImgSrc(team.name)} className="Season-Summary-logo" alt="" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex-1">
					{this.state.cups.map(cup => {
						return (
							<div key={cup.name}>
								<h3 className="text-center">{cup.name}</h3>
								{cup.rounds.map(round => {
									return (
										<div className="flex-container Season-Summary-team" key={round.round}>
											<div className="flex-1 flex-container-right-aligned Season-Summary-left">{displayRound(cup.name, round.round)}</div>
											{round.matches[0] ?
												this.getScoreboard(round.matches[0])
												: round.round !== 'Final' && <div className="Season-Summary-empty-match" />
											}
											{round.matches[1] ?
												this.getScoreboard(round.matches[1])
												: round.round !== 'Final' && <div className="Season-Summary-empty-match" />
											}
											<div className="flex-1 Season-Summary-right">
												<div>
													<img src={getImgSrc(round.team)} className="Season-Summary-logo" alt="" />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
			<br/>
			<div className="flex-container flex-container-wrap">
				{this.state.squad.map(player => {

					var backnumberStyle = 'Season-Summary-backnumber text-center';
					var playerNameStyle = 'Season-Summary-player-name';
					if (player.fullname === this.state.player) {
						backnumberStyle += ' Season-Summary-backnumber-selected';
						playerNameStyle += ' Season-Summary-player-name-selected';
					}

					return (
						<div className="flex-container Season-Summary-squad" key={player.fullname} onClick={() => this.selectPlayer(player)}>
							<div className={backnumberStyle}><small>{player.number}</small></div>
							<div className={playerNameStyle}><small>{player.name}</small></div>
						</div>
					);
				})}
			</div>
			</div>
    );
  }

	selectSeason(season, team) {
		const that = this;
		const url = UrlUtil.getSeasonSelectUrl(season, team);
				
		this.setState({
			league: [],
			cups: [],
			europe: [],
			squad: [],
			player: null
		});

		fetch(url)
			.then(function(response) {
				return response.json();
			})
		.then(function(data) {
			if (data.season) {
				that.setState(that.getStateFromData(data));
			}
		});
	}

	getStateFromData(data) {
		var leagueName = data.leagues[0].name;
		
		var i;
		var entry;
		var table = [];
		var teams = {};
		for (i = 0; i < data.leagues[0].table.length; i++) {
			entry = data.leagues[0].table[i];
			table[i] = { name: entry.name, matches: [], rank: entry.rank };
			teams[entry.name] = table[i];
		}
		var out = {league: table, cups: [], europe: []};

		var j, k;
		var match;
		var team;
		var cup, prevMatch, name, found, round;
		for (i = 0; i < data.competitions.length; i++) {
			entry = data.competitions[i];

			if (entry.name === leagueName) {
				for (j = 0; j < entry.matches.length; j++) {
					match = entry.matches[j];

					team = teams[match.vs];

					if (match.place === 'A') {
						team.matches[1] = match;
					} else {
						team.matches[0] = match;
					}
				}
			} else if (entry.name === 'FA Cup' || 
								 entry.name === 'League Cup' ||
								 entry.name === 'FA Community Shield') {
				cup = {name: entry.name, rounds: []};

				if (entry.name === 'FA Community Shield')
					cup.name = 'Community Shield';

				prevMatch = {};
				for (j = 0; j < entry.matches.length; j++) {
					match = entry.matches[j];
					if (match.round === prevMatch.round) {
						if (match.place === 'A') {
							round.matches[1] = match;
						} else {
							round.matches[0] = match;
						}
					} else {
						round = {
							round: match.round,
							team: match.vs,
							matches: []
						};

						if (match.place === 'A') {
							round.matches[1] = match;
						} else {
							round.matches[0] = match;
						}

						cup.rounds.push(round);
						prevMatch = match;
					}
				}

				cup.rounds.reverse();
				out.cups.push(cup);
			} else if (entry.name.match(/^Champions|^Europa|^Club|^UEFA/)) {
				name = entry.name.replace(/ Qual./, '');
				cup = {name: name, rounds: []};
				for (j = 0; j < out.europe.length; j++) {
					if (out.europe[j].name === name) {
						cup = out.europe[j];
					}
				}

				if (entry.name === 'UEFA-Supercup')
					cup.name = 'UEFA Super Cup';

				if (cup.rounds.length === 0) {
					out.europe.push(cup);
				}

				prevMatch = {};
				for (j = 0; j < entry.matches.length; j++) {
					match = entry.matches[j];
					if (match.round === prevMatch.round) {
						if (match.round.match(/^Group/)) {
							found = false;
							for (k = 0; k < cup.rounds.length; k++) {
								if (cup.rounds[k].team === match.vs) {
									cup.rounds[k].matches[1] = match;
									if (match.place === 'H') {
										cup.rounds[k].matches.reverse();
									}
									found = true;
									break;
								}
							}

							if (found === false) {
								cup.rounds.push({
									round: match.round,
									team: match.vs,
									matches: [match]
								});
							}
						} else {
							cup.rounds[cup.rounds.length - 1].matches[1] = match;
							if (match.place === 'H') {
								cup.rounds[cup.rounds.length - 1].matches.reverse();
							}
						}
					} else {
						cup.rounds.push({
							round: match.round,
							team: match.vs,
							matches: [match]
						});
						prevMatch = match;
					}
				}

				for (j = 0; j < cup.rounds.length; j++) {
					round = cup.rounds[j];
					if (entry.name.match(/^Club/) || round.round === 'Final') {
						round.hideEmpty = true;
					}
				}
			}
		}

		for (i = 0; i < out.europe.length; i++) {
			cup = out.europe[i];
			cup.rounds.sort(function (a, b) {
				var aDate = a.matches[0].date.split('/');
				var bDate = b.matches[0].date.split('/');
				var aStr = aDate[2] + aDate[0] + aDate[1];
				var bStr = bDate[2] + bDate[0] + bDate[1];

				return bStr - aStr;
			});
		}

		out.squad = SquadUtil.getSquadArray(data, this.props.team);

		return out;
	}
}
