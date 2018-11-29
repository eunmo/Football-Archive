import React, { Component } from 'react';

import './style.css';

import {Competition, Team, Scoreboard} from '../../Common';

import { colors } from '../data';

import Match from '../../../util/match';

export default class Form extends Component {

	constructor(props) {
		super(props);

		this.getMatchView = this.getMatchView.bind(this);
	}
  
	render() {
		let allMatches = Match.extractAndSort(this.props.data.data);
		let sum = this.getMatchSummary(allMatches);

		const props = this.props.data;
		const data = {
			data: Match.getShortenedData(allMatches),
			squad: props.squad, team: props.team, year: props.year, player: props.player
		};

		const matches = Match.extractAndSort(data.data);
		
		return (
			<div className="Form">
				<div className="flex-container text-center">
					<div className="flex-1 flex-container">
						<div className="flex-3 hide-mobile" />
						<div className="flex-1" style={{backgroundColor: colors.lightblue}}>
							W <b>{sum.win}</b>
						</div>
						<div className="flex-1" style={{backgroundColor: colors.lightyellow}}>
							D <b>{sum.draw}</b>
						</div>
						<div className="flex-1" style={{backgroundColor: colors.lightred}}>
							L <b>{sum.loss}</b>
						</div>
						<div className="flex-3 hide-mobile" />
					</div>
					<div className="flex-1">
						{sum.unplayed} more game{sum.unplayed > 0 ? 's' : ''}
					</div>
				</div>
				<br/>
				{matches.map(this.getMatchView)}
				{this.getSeparator(sum.unplayed)}
			</div>
		);
	}

	getGoalSide(match, goal) {
		return (match.summary[goal.side] === this.props.data.team) ? 'l' : 'r';
	}

	getGoals(match) {
		if (match.summary === undefined)
			return null;

		return match.summary.goals.map((goal, index) => {
			const side = this.getGoalSide(match, goal);

			var array = [];
			
			if (side === 'l') {
				var scorerStyle = {
					fontSize: 'smaller',
					lineHeight: '21px',
					textAlign: 'right',
					gridColumn: '1'
				};
				var scoreType = '';

				if (goal.style === 'own goal') {
					scorerStyle.color = colors.red;
					scoreType = '(OG)';
				}

				if (goal.style === 'penalty') {
					scorerStyle.color = colors.blue;
					scoreType = '(PK)';
				}

				if (this.props.data.player && goal.scorer === this.props.data.player.fullname)
					scorerStyle.fontWeight = 'bold';

				array.push(<div key={index + 'scorer'} style={scorerStyle}>{goal.scorer} {scoreType}</div>);
			}
			
			var style = {gridColumn: '2'};

			if (side === 'r')
				style.textAlign = 'right';

			array.push(<div key={index} style={style}>⚽  </div>)

			if (side === 'l' && goal.assist) {
				style = {fontSize: 'smaller', lineHeight: '21px'};

				var assistStyle = {};
				
				if (this.props.data.player && goal.assist === this.props.data.player.fullname)
					assistStyle.fontWeight = 'bold';

				array.push(<div key={index + 'assist'} style={style}>(A) <span style={assistStyle}>{goal.assist}</span></div>);
			}

			return array;
		});
	}

	getMatchView(match, index) {
		const year = match.season ? match.season : this.props.data.year;
		
		const gridStyle1 = { 
			display: 'grid',
			gridTemplateColumns: '1fr 35px 1fr',
			gridColumnGap: '10px',
		};
		
		const gridStyle2 = { 
			display: 'grid',
			gridTemplateColumns: '1fr 40px 1fr',
			gridColumnGap: '7.5px',
		};

		const goals = this.getGoals(match);

		return (
			<div key={index}>
				<div style={gridStyle1}>
				<div className="text-right">
					<Competition name={match.competition} round={match.round} year={year} />
				</div>
				<Scoreboard team={this.props.data.team} match={match} 
				 player={this.props.data.player} skipScore={true}/>
				<div className="Timeline-team">
					<Team team={match.vs} year={this.props.data.year} />
				</div>
				</div>
				{goals && <div style={gridStyle2}>{goals}</div>}
			</div>
		);
	}

	getMatchSummary(matches) {
		var sum = {win: 0, draw: 0, loss: 0, unplayed: 0};

		matches.forEach(match => {
			const summary = Match.summarizeResult(match, this.props.data.team);

			sum[summary.result]++;
		});

		return sum;
	}

	getSeparator(unplayed) {
		return unplayed > 5 ? <div className="text-center">▼</div> : null;
	}

	getMatchesView(matches) {
		return matches.map((match, index) => {return this.getMatchView(match, index);});
	}
}
