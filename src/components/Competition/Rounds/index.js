import React, { Component } from 'react';

import './style.css';

import { PageSelector } from '../../Common';

import Finals from './finals';
import Grid from './grid';

import { rounds as roundData } from '../data';

import MatchUtil from '../../../util/match';

export default class Rounds extends Component {
	
	render() {
		return (
			<PageSelector views={this.getViews()} basename={this.props.basename} />
		);
	}

	getViews() {
		const comp = this.props.data.comp;
		const [earlyRounds, finals] = MatchUtil.groupFinals(this.props.data.rounds);
		var views = [];
		var i, round, group, name;

		if (finals.length > 0) {

			views.push({
				name: 'Finals',
				link: '/finals',
				component: Finals,
				data: { finals: finals, year: comp.season }
			});
		}

		for (i = 0; i < earlyRounds.length; i++) {
			round = earlyRounds[i];
			group = MatchUtil.groupMatches(round.matches);
			name = round.name.replace(/\./, '');
			name = name.replace(/Zwischenrunde/, 'Play-off');

			views.push({
				name: name,
				sh: roundData.getShortForm(comp.name, name),
				link: '/' + name.replace(/ /g, '-'),
				component: Grid,
				data: { matches: group, year: comp.season }
			});
		}

		return views;
	}
}
