import React, { Component } from 'react';

import './style.css';

import { Team } from '../../Common';

import { nations, teams } from '../data';

export default class FIFARankings extends Component {
  constructor(props) {
    super(props);

    this.state = { rankings: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const rankings = this.state.rankings;

    if (rankings.length === 0) return null;

    var gridStyle = {
      display: 'grid',
      gridTemplateColumns: '30px 1fr',
      gridColumnGap: '5px'
    };

    return (
      <div>
        <div
          className="text-center"
          style={{ fontSize: '1.5em', marginBottom: '10px' }}
        >
          Ranking of {this.state.date}
        </div>
        {rankings.map(team => (
          <div key={team.id} className="flex-container">
            <div className="flex-2 hide-mobile" />
            <div className="flex-1" />
            <div className="flex-3" style={gridStyle}>
              <span className="text-right">{team.rank}</span>
              <Team key={team.id} team={team.team} year={nations.years.max} />
            </div>
            <div className="flex-1" />
          </div>
        ))}
      </div>
    );
  }

  fetch() {
    const that = this;
    const url = '/api/fifa/select';

    var teamMap = {};
    var team;
    for (var i in teams) {
      if (teams[i]) {
        team = teams[i];
        if (team) {
          if (Number.isInteger(team.id)) continue;

          if (team.fifa) teamMap[team.fifa] = i;
          else teamMap[team.id] = i;
        }
      }
    }

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var rankings = [];
        data[0].ranks.forEach(entry => {
          rankings.push({
            team: teamMap[entry.id],
            id: entry.id,
            rank: entry.rank
          });
        });

        that.setState({ rankings: rankings, date: data[0].date });
      });
  }
}
