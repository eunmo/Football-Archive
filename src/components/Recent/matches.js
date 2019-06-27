import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { Team, Scoreboard, ResultSymbol } from '../Common';

import { colors } from '../data';

import UrlUtil from '../../util/url';
import Match from '../../util/match';

export default class RecentMatches extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const competitions = this.props.data.competitions;

    if (competitions.length === 0) return null;

    return (
      <div className="Recent">
        {competitions.map(comp => {
          if (comp.matches.length === 0) return null;

          var logo = null;
          if (comp.country)
            logo = <Team team={comp.country} emblemSmall={true} />;

          var nameDiv = (
            <div className="Recent-comp text-center">
              {logo} {comp.name}
            </div>
          );

          const link = UrlUtil.getCompLink(comp.season, comp.name);
          if (link !== null) nameDiv = <Link to={link}>{nameDiv}</Link>;

          var year = comp.season;
          if (comp.seasonMax) year = comp.seasonMax;

          return (
            <div key={comp.name}>
              {nameDiv}
              {this.getGrid(comp.matches, year)}
            </div>
          );
        })}
      </div>
    );
  }

  groupMatches(matches) {
    var group = [];
    var i, match;

    for (i = 0; i < matches.length; i++) {
      match = matches[i];
      group.push({
        teams: match.teams,
        matches: [match]
      });
    }

    return group;
  }

  getGrid(matches, year) {
    var outerGridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: '5px',
      justifyItems: 'center'
    };
    var innerGridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 14px 1fr 1fr',
      height: '21px',
      justifyItems: 'center'
    };

    if (this.state.width > 543) {
      innerGridStyle.gridTemplateColumns = '1fr 1fr 40px 1fr 1fr';
      innerGridStyle.height = '50px';
      innerGridStyle.lineHeight = '50px';
      innerGridStyle.alignItems = 'center';
    } else if (this.props.data.showScore) {
      outerGridStyle.gridTemplateColumns = '1fr 1fr 1fr';
      innerGridStyle.gridTemplateColumns = '1fr 1fr 40px 1fr 1fr';
    }

    return (
      <div style={outerGridStyle}>
        {matches.map((match, index) => {
          const [result, colorResult] = this.getMatchResult(match);
          const style = {};
          if (result !== 'unplayed') {
            style.background = colors[Match.getColorDNP(colorResult)];
          }

          return (
            <div key={index} style={style}>
              <div style={innerGridStyle}>
                {this.getRank(match.teams[0])}
                {this.getTeam(match.teams[0], year)}
                {this.getResult(match, result, colorResult)}
                {this.getTeam(match.teams[1], year)}
                {this.getRank(match.teams[1])}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  getMatchResult(match) {
    const ranks = this.props.data.teamRanks;
    const teamA = match.teams[0];
    const teamB = match.teams[1];

    const sum = Match.summarizeResult(match, teamA);
    const result = sum.result;
    var colorResult = sum.resultFull;

    if (
      (ranks[teamA] && ranks[teamB] && ranks[teamA] > ranks[teamB]) ||
      (ranks[teamA] === undefined && ranks[teamB])
    ) {
      colorResult = Match.summarizeResult(match, teamB).resultFull;
    }

    return [result, colorResult];
  }

  getTeam(team, year) {
    if (this.state.width <= 543) {
      return <Team team={team} emblemSmall={true} year={year} />;
    } else {
      return <Team team={team} emblemLarge={true} year={year} />;
    }
  }

  getRank(team) {
    var rank = this.props.data.teamRanks[team];
    var style = { color: 'gray' };

    if (rank >= 100 && this.state.width < 534)
      rank = (
        <small>
          <small>{rank}</small>
        </small>
      );

    return (
      <div style={style}>
        <small>{rank}</small>
      </div>
    );
  }

  getScoreboard(match) {
    const ranks = this.props.data.teamRanks;
    const teamA = match.teams[0];
    const teamB = match.teams[1];

    var team = teamA;

    if (
      (ranks[teamA] && ranks[teamB] && ranks[teamA] > ranks[teamB]) ||
      (ranks[teamA] === undefined && ranks[teamB])
    ) {
      team = teamB;
    }

    return <Scoreboard team={team} match={match} reverse={team === teamB} />;
  }

  getResult(match, result, colorResult) {
    if (this.state.width > 543 || this.props.data.showScore) {
      return this.getScoreboard(match);
    }

    const ranks = this.props.data.teamRanks;
    const teamA = match.teams[0];
    const teamB = match.teams[1];
    var team = teamA;

    if (
      (ranks[teamA] && ranks[teamB] && ranks[teamA] > ranks[teamB]) ||
      (ranks[teamA] === undefined && ranks[teamB])
    ) {
      team = teamB;
    }

    match.l = teamA;

    return <ResultSymbol match={match} team={team} />;
  }
}
