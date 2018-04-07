import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Match from '../../../util/match';
import UrlUtil from '../../../util/url';

export default class Circle extends Component {

	constructor(props) {
		super(props);

		this.state = this.newState(this.props);
		
		this.selectPlayer = this.selectPlayer.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.newState(nextProps));
	}

	newState(props) {
		const matches = Match.extractAndSort(props.data);
		var summaries = [];

		for (var i = 0; i < matches.length; i++) {
			summaries[i] = Match.summarizeResult(matches[i], props.team);
		}

		return {
			matches: matches,
			summaries: summaries
		};
	}
	
	render() {
		const width = 350;
		const height = 350;
		const cx = width / 2;
		const cy = height / 2;
		const circleR = 110;

		const circle = <circle cx={cx} cy={cy} r={circleR} stroke="black" strokeWidth="1" fill="none" />;

		var i, match;
		var dnps = [];
		var matches = [];
		var ticks = [];
		var teams = [];
		var months = [];
	
		const matchR = 135;
		const Astr = ' A ' + matchR + ' ' + matchR + ' ';
		const teamR = 160;
		const teamSize = 18;
		var rot, dRot;
		var dTheta, thetaOffset, theta, theta1, theta2;
		var d;
		var x, y, x1, y1, x2, y2;
		var result;
		var stroke, playerMinutes;
		var image, vs, url;
		const tickWidth = 5;
		var prevTheta;
		var month;

		const colors = {
			win: 'hsl(210, 100%, 50%)',
			draw: 'hsl( 40, 100%, 50%)',
			loss: 'hsl(360,  90%, 50%)', 
			unplayed: 'lightgray'
		};
		
		const colorsDNP = {
			win: 'hsl(210, 100%, 90%)',
			draw: 'hsl( 40, 100%, 90%)',
			loss: 'hsl(360,  90%, 90%)', 
			unplayed: 'lightgray'
		};

		dRot = 360 / (this.state.matches.length + 2);
		dTheta = 2 * Math.PI / (this.state.matches.length + 2);
		thetaOffset = Math.PI * -0.5 + dTheta;

		function getTick(theta, i) {
			const tickR = 120;
			var x1 = cx + (tickR - tickWidth) * Math.cos(theta);
			var y1 = cx + (tickR - tickWidth) * Math.sin(theta);
			var x2 = cx +	(tickR + tickWidth) * Math.cos(theta);
			var y2 = cx + (tickR + tickWidth) * Math.sin(theta);
			return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="gray" strokeWidth="1" />;
		}

		function getMonth(month, theta) {
			const monthR = 100;
			var x = cx + monthR * Math.cos(theta);
			var y = cx + monthR * Math.sin(theta);
			return (
				<text key={theta} x={x} y={y} alignmentBaseline="middle" textAnchor="middle" fontSize="1.5em"
				 fill="gray">
					{month}
				</text>
			);
		}

		function getPath(url, key, d, stroke) {
			var	path = <path key={key} d={d} stroke={stroke} fill="none" strokeWidth="20" />;

			if (url) {
				path = <Link key={key} to={'/match/' + url}>{path}</Link>;
			}

			return path;
		}

		function getPlayerD(playerMinutes) {
			var theta1 = dTheta * (i + playerMinutes[0]) + thetaOffset;
			var theta2 = dTheta * (i + playerMinutes[1]) + thetaOffset;
			var x1 = cx + matchR * Math.cos(theta1);
			var y1 = cx + matchR * Math.sin(theta1);
			var x2 = cx +	matchR * Math.cos(theta2);
			var y2 = cx + matchR * Math.sin(theta2);
			return 'M ' + x1 + ' ' + y1 + Astr + rot + ' 0 1 ' + x2 + ' ' + y2;
		}

		for (i = 0; i < this.state.matches.length; i++) {
			match = this.state.matches[i];
			rot = dRot * i;
			theta1 = dTheta * i + thetaOffset;
			theta2 = dTheta * (i + 1) + thetaOffset;
			x1 = cx + matchR * Math.cos(theta1);
			y1 = cx + matchR * Math.sin(theta1);
			x2 = cx +	matchR * Math.cos(theta2);
			y2 = cx + matchR * Math.sin(theta2);
			d = 'M ' + x1 + ' ' + y1 + Astr + rot + ' 0 1 ' + x2 + ' ' + y2;
			result = this.state.summaries[i].result;

			if (this.props.player) {
				stroke = colorsDNP[result];
				dnps.push(getPath(match.url, i, d, stroke));

				playerMinutes = this.playerMinutes(match);
				if (playerMinutes) {
					d = getPlayerD(playerMinutes);
					stroke = colors[result];
					matches.push(getPath(match.url, i, d, stroke));
				}
			} else {
				stroke = colors[result];
				matches.push(getPath(match.url, i, d, stroke));
			}

			theta = dTheta * (i + 0.5) + thetaOffset;
			x = cx + teamR * Math.cos(theta) - teamSize / 2;
			y = cx + teamR * Math.sin(theta) - teamSize / 2;
			vs = match.vs;
			url = UrlUtil.getEmblemUrl(vs);
			image = <image key={i} xlinkHref={url} x={x} y={y} width={teamSize} height={teamSize} />;
			teams.push(this.getLink(image, vs));

			if (i === 0 ||
					(this.state.matches[i - 1].date.substring(0, 2) !== match.date.substring(0, 2))) {
				ticks.push(getTick(theta1, i));

				if (prevTheta !== undefined) {
					theta = (prevTheta + theta1) / 2;
					month = parseInt(this.state.matches[i - 1].date.substring(0, 2), 10);
					months.push(getMonth(month, theta));
				}

				prevTheta = theta1;
			}

			if (i === this.state.matches.length - 1) {
				ticks.push(getTick(theta2, i + 1));
				
				if (prevTheta !== undefined) {
					theta = (prevTheta + theta2) / 2;
					month = parseInt(match.date.substring(0, 2), 10);
					months.push(getMonth(month, theta));
				}
			}
		}

		return (
			<div className="Circle flex-container flex-container-center">
				<svg width={width} height={width}>
					{ticks}
					{dnps}
					{matches}
					{teams}
					{months}
				</svg>
			</div>
		);
	}

	selectPlayer(player) {
		this.setState({ selectedPlayer: player });
	}

	getLink(image, team) {
		if (image === null) {
			return null;
		}

		var link = UrlUtil.getLink(this.props.data.season, team);

		if (link) {
			return (
				<Link key={image.key} to={link}>
					{image}
				</Link>
			);
		}

		return image;
	}
	
	playerMinutes(match) {
		const player = this.props.player;
		const summary = match.summary;
				
		if (summary === undefined || summary.players === undefined)
			return null;

		const side = (summary.r === this.props.team) ? 'r' : 'l';
		const players = summary.players[side];
		const matchLength = summary.aet ? 121 : 91;
		const name = player.fullname;
		var entry;

		for (var i = 0; i < players.start.length; i++) {
			entry = players.start[i];
			if (entry.name === name) {
				if (entry.card && (entry.card.type === 'red' || entry.card.type === 'Second yellow')) {
					return [0, entry.card.minute / matchLength];
				}
				return [0, entry.sub ? (entry.sub / matchLength) : 1];
			}
		}
		
		let length = players.sub === undefined ? 0 : players.sub.length;
		for (i = 0; i < length; i++) {
			entry = players.sub[i];
			if (entry.sub && entry.name === name) {
				if (entry.sub.length) {
					return [entry.sub[0] / matchLength, entry.sub[1] / matchLength];
				} else if (entry.card && (entry.card.type === 'red' || entry.card.type === 'Second yellow')) {
					return [entry.sub / matchLength, entry.card.minute / matchLength];
				} else {
					return [entry.sub / matchLength, 1];
				}
			}
		}

		return null;
	}
}