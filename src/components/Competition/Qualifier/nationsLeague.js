import React, { Component } from 'react';

import './style.css';

import { Cup } from '../../Common';

import Finals from '../Rounds/finals';

import MatchUtil from '../../../util/match';

export default class QualificationViewNationsLeague extends Component {

	render() {
		const rounds = this.props.data.rounds;
		const [_, finals] = MatchUtil.groupFinals(this.props.data.knockout);
		const headerStyle = {
			fontSize: '1.2em',
			margin: '10px',
		};

		const finalData = {year: this.props.data.comp.year, finals: finals};

		return (
			<div>
				<Finals data={finalData} />
				{rounds.map(round =>
					<div key={round.name}>
						<div className="text-center" style={headerStyle}>Nations League {round.name}</div>					
						<Cup cup={round} onlyGroup={true} />
					</div>
				)}
			</div>
		);
	}
}
