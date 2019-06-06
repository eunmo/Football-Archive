import React, { Component } from 'react';

import './style.css';

import { Team, Scoreboard, ResultSymbol } from '..';

export default class Grid extends Component {

	render() {
		var rows = this.getRows();

		return (
			<div className="Grid">
				{rows.map((row, index) => {
					return (
						<div key={index} className="Grid-flex-container">
							{row}
						</div>
					);
				})}
			</div>
		);
	}
	
	getEntryView(entry) {
		const year = this.props.year;
		const teams = entry.teams;
		var match;
		var emptyTeamStyle = { width: '26px' };
		var smallTeamStyle = { marginLeft: '3px', marginRight: '3px', height: '21px' };
		var shrink = false;

		if (window.innerWidth <= 350 ||
				(window.innerWidth <= 543 && this.props.size >= 6)) {
			emptyTeamStyle.width = '22px';
			smallTeamStyle.marginLeft = '1px';
			smallTeamStyle.marginRight = '1px';
			shrink = true;
		}

		const largeView = (
			<div className="hide-mobile flex-container flex-container-center" key={0}>
				<Team team={teams[0]} emblemLarge={true} year={year}/>
				<div className="Grid-long-scoreboard">
					{entry.matches.map((match, index) => {
						return <Scoreboard key={index} team={teams[0]} match={match} />;
					})}
				</div>
				<Team team={teams[1]} emblemLarge={true} year={year}/>
			</div>
		);

		if (entry.matches.length === 1) {
			match = entry.matches[0];

			return [
				largeView,
				<div className="show-mobile-flex flex-container flex-container-center" key={1}>
					<div style={smallTeamStyle}>
						<Team team={teams[0]} emblemSmall={true} year={year}/>
					</div>
					{this.getScore(match, teams[0], shrink)}
					<div style={smallTeamStyle}>
						<Team team={teams[1]} emblemSmall={true} year={year}/>
					</div>
				</div>
			];
		} else {
			return [
				largeView,
				<div className="show-mobile-flex flex-container flex-container-center" key={1}>
					<div style={smallTeamStyle}>
						<Team team={teams[0]} emblemSmall={true} year={year}/>
					</div>
					{this.getScore(entry.matches[0], teams[0], shrink)}
					<div style={emptyTeamStyle}></div>
				</div>,
				<div className="show-mobile-flex flex-container flex-container-center" key={2}>
					<div style={emptyTeamStyle}></div>
					{this.getScore(entry.matches[1], teams[0], shrink)}
					<div style={smallTeamStyle}>
						<Team team={teams[1]} emblemSmall={true} year={year}/>
					</div>
				</div>,
			];
		}
	}

	getScore(match, team, shrink) {
		if (window.innerWidth <= 543 && this.props.size > 4) {
			return <ResultSymbol match={match} team={team} />;
		} else {
			return <Scoreboard team={team} match={match} shrinkOnMobile={shrink} />
		}
	}

	getRows() {
		const matches = this.props.matches;
		const size = this.props.size ? this.props.size : 4;
		var rows = [];
		var i, j, index, entry;

		for (i = 0; i < matches.length / size; i++) {
			rows[i] = [];

			for (j = 0; j < size; j++) {
				index = i * size + j;
				if (index < matches.length) {
					entry = matches[index];
					if (entry === null || entry === undefined) {
						rows[i][j] = (<div key={index} className="flex-1" />);
					} else {
						rows[i][j] = (
							<div key={index} className="flex-1">
								{this.getEntryView(entry)}
							</div>
						);
					}	
				} else if (this.props.noFiller !== true) {
					rows[i][j] = (<div key={index} className="flex-1" />);
				}
			}
		}

		return rows;
	}
}
