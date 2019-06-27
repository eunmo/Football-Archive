import React, { Component } from 'react';

import { colors } from '../data';

import Match from '../../../util/match';

export default class ResultSymbol extends Component {
  render() {
    const match = this.props.match;

    const result = Match.summarizeResult(match, match.l).result;
    const colorResult = Match.summarizeResult(match, this.props.team)
      .resultFull;

    const color = colors[Match.getColor(colorResult)];
    const bgcolor = colors[Match.getColorDNP(colorResult)];

    var svgStyle = { width: '10px', height: '21px', background: bgcolor };
    var lineStyle = { stroke: color, strokeWidth: '3px', fill: 'none' };

    if (result === 'win') {
      return (
        <svg style={svgStyle}>
          <polyline points="0,3 9,10.5 0,18" style={lineStyle} />
        </svg>
      );
    } else if (result === 'draw') {
      return (
        <svg style={svgStyle}>
          <line x1="0" x2="10" y1="8" y2="8" style={lineStyle} />
          <line x1="0" x2="10" y1="13" y2="13" style={lineStyle} />
        </svg>
      );
    } else if (result === 'loss') {
      return (
        <svg style={svgStyle}>
          <polyline points="10,3 1,10.5 10,18" style={lineStyle} />
        </svg>
      );
    } else {
      svgStyle.background = 'none';
      return (
        <div style={svgStyle} className="text-center">
          <small>v</small>
        </div>
      );
    }
  }
}
