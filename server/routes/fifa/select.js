'use strict';

module.exports = function(router, db) {
	const FIFARankings = db.collection('FIFARankings');

	router.get('/api/fifa/select', async function (req, res) {
		var rankings = await FIFARankings.find({}).sort({id: -1}).limit(1).toArray();
		res.json(rankings);
	});
	
	router.get('/api/fifa/select/:_id', async function (req, res) {
		var id = parseInt(req.params._id, 10);
		var rankings = await FIFARankings.find({id: id}).toArray();
		res.json(rankings);
	});

}
