'use strict';

module.exports = function(router, db) {
  const Seasons = db.collection('Seasons');
  const Matches = db.collection('Matches');

  router.get('/api/match/cleanup', async function(req, res) {
    await Matches.deleteMany({ 'summary.l': null });
    res.sendStatus(200);
  });
};
