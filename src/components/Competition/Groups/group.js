import React, { Component } from 'react';

import './style.css';

import { Grid, LeagueTable } from '../../Common';
	
export default class Group extends Component {

	render() {
		const group = this.props.data.group;
		var grid = null;
		var size = 4;
		var grouped = [];

		if (group.table.length <= 4) {
			grouped = this.groupSomeMatches(group);
		} else {
			[size, grouped] = this.groupMoreMatches(group);
		}

		grid = <Grid matches={grouped} year={this.props.data.comp.season} size={size} />;

		return (
			<div>
				<LeagueTable league={group} />
				<br/>
				{grid}
			</div>
		);
	}

	groupSomeMatches(group) {
		var matches = [];

		var i, match;
		var j, teamA;
		var k, teamB;
		var teams, index;

		for (i = 0; i < group.matches.length; i++) {
			match = group.matches[i];
			for (j = 0; j < group.table.length; j++) {
				teamA = group.table[j].name;

				for (k = 0; k < group.table.length; k++) {
					teamB = group.table[k].name;
					if (j === k)
						continue;

					if (match.l === teamA && match.r === teamB) {
						if (group.matches.length === group.table.length * (group.table.length - 1) ||
							j < k) {
							teams = [match.l, match.r];
							index = k * 4 + j;
						} else {
							teams = [match.r, match.l];
							index = j * 4 + k;
						}

						matches[index] = {
							teams: teams,
							matches: [match]
						};
					}
				}
			}
		}

		return matches;
	}
	
	groupMoreMatches(group) {
		var matches = [];

		var i, match;
		var j, teamA;
		var k, teamB;
		var teams, index;
		const isFull = group.matches.length === group.table.length * (group.table.length - 1);
		const size = isFull ? group.table.length : group.table.length - 1;

		for (i = 0; i < group.matches.length; i++) {
			match = group.matches[i];
			for (j = 0; j < group.table.length; j++) {
				teamA = group.table[j].name;

				for (k = 0; k < group.table.length; k++) {
					teamB = group.table[k].name;
					if (j === k)
						continue;

					if (match.l === teamA && match.r === teamB) {
						if (isFull || j < k) {
							teams = [match.l, match.r];
							index = k * size + j;
						} else {
							teams = [match.r, match.l];
							index = j * size + k;
						}

						matches[index] = {
							teams: teams,
							matches: [match]
						};
					}
				}
			}
		}

		return [size, matches];
	}
}
