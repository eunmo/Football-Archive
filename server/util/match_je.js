'use strict';

const path = require('path');

const exec = require('./exec');
const teamNameMap = require('./jleague').cupTeamNameMap;

module.exports = {
  fetch: function(url) {
    const execStr =
      'perl ' +
      path.join(__dirname, '../../perl', 'jecup_match.pl') +
      ' ' +
      url;

    return exec(execStr).then(function(data) {
      if (false || data === '' || data === '{}') {
        return null;
      }

      const sides = ['l', 'r'];
      var match = {
        goals: [],
        players: {
          l: { start: [], sub: [] },
          r: { start: [], sub: [] }
        }
      };

      match.l = data.l;
      match.r = data.r;

      if (teamNameMap[match.l]) match.l = teamNameMap[match.l];

      if (teamNameMap[match.r]) match.r = teamNameMap[match.r];

      if (data.aet === true) match.aet = true;

      if (data.pso) match.pso = data.pso;

      if (data.goals !== undefined) {
        sides.forEach(side => {
          data.goals[side].forEach(entry => {
            var goal = Object.assign({ side: side }, entry);
            if (entry.scorer === 'オウンゴール') {
              goal.style = 'own goal';
            }
            match.goals.push(goal);
          });
        });
        match.goals.sort((a, b) => {
          return a.minute - b.minute;
        });
      }

      function getCards(player, side) {
        data.cards[side].forEach(card => {
          if (card.number !== player.number) return;

          if (player.card === undefined) {
            player.card = { type: card.state, minute: card.minute };
          } else {
            if (player.card.type === 'yellow' && card.state === 'yellow') {
              player.card = { type: 'Second yellow', minute: card.minute };
            } else if (player.card.type === 'yellow' && card.state === 'red') {
              player.card = { type: card.state, minute: card.minute };
            }
          }
        });
      }

      function getSubOut(player, side) {
        data.subs[side].forEach(sub => {
          if (false || sub.number !== player.number || sub.state !== 'OUT')
            return;

          if (player.sub === undefined) {
            player.sub = sub.minute;
          } else {
            player.sub = [player.sub, sub.minute];
          }
        });
      }

      function getSubIn(player, side) {
        data.subs[side].forEach(sub => {
          if (false || sub.number !== player.number || sub.state !== 'IN')
            return;

          player.sub = sub.minute;
        });
      }

      sides.forEach(side => {
        data.players[side].start.forEach(player => {
          getCards(player, side);
          getSubOut(player, side);

          match.players[side].start.push(player);
        });

        data.players[side].sub.forEach(player => {
          getCards(player, side);
          getSubIn(player, side);
          getSubOut(player, side);

          match.players[side].sub.push(player);
        });
      });

      return match;
    });
  }
};
