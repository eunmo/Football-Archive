import React, { Component } from 'react';

import './style.css';

import {Progress} from '../../Common';

import {competitions} from '../data';

export default class Summary extends Component {

	constructor(props) {
		super(props);
		
		this.state = this.newState(this.props);
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState(this.newState(nextProps));
	}

  render() {
		const team = this.props.team;
		const year = this.props.year;
		const player = this.props.player;

		return (
			<div className="Summary">
				<div className="flex-container">
					{this.state.groups.map((group, index) => {
						return (
							<div key={index} className="flex-1">
								{group.map(comp => {
									var leagueTable = this.state.leagueTableMap[comp.name];
									return <Progress key={comp.name} team={team} year={year} player={player}
														competition={comp} leagueTable={leagueTable} />;
								})}
							</div>
						);
					})}
				</div>
			</div>
		);
  }
	
	newState(props) {
		const data = props.data;
		var state = { groups: [], leagueTableMap: {} };

		if (data.leagues === undefined) {
			return state; // data not yet fetched
		}

		var i, league;
		var compMap = {};
		var comp, name, entry, group;

		for (i = 0; i < data.leagues.length; i++) {
			league = data.leagues[i];
			state.leagueTableMap[league.name] = league.table;
		}
		
		for (i in competitions) {
			if (i) {
				compMap[i] = {name: i, matches: [], group: competitions[i].group};
			}
		}

		for (i = 0; i < data.competitions.length; i++) {
			comp = data.competitions[i];
			name = comp.name;
			entry = compMap[name];
			entry.matches = entry.matches.concat(comp.matches);
		}
		
		for (i in compMap) {
			if (compMap[i] && compMap[i].matches.length > 0) {
				group = compMap[i].group;

				if (state.groups[group] === undefined) {
					state.groups[group] = [];
				}

				state.groups[group].push(compMap[i]);
			}
		}

		return state;
	}
}