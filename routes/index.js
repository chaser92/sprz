var express = require('express');
var cradle = require('cradle');
var router = express.Router();
var connection = new cradle.Connection();
var database = connection.database('sprz');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/sprz', function(req, res) {
    database.view('alldocs/all', function(err, docs) {
        res.json(docs);
    });
});

router.post('/sprz', function(req, res) {
    console.log(JSON.stringify(req.body));
    database.save(Date.now() + "", {
        author: req.body.author,
        trash: req.body.trash,
        dish: req.body.dish,
        wipe: req.body.wipe,
        hoover: req.body.hoover,
        takeout: req.body.takeout
    }, function(err, status) {
        res.json({status: "ok"});
    });
});

module.exports = router;
