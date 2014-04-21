/**
 * Created with JetBrains WebStorm.
 * User: Santhosh
 * Date: 20/4/14
 * Time: 10:15 PM
 * To change this template use File | Settings | File Templates.
 */


// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var News       = require('/models/news');

mongoose.connect('mongodb://localhost/newsdb');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/news')
    .get(function(req, res){
        News.find(function(err, news){
           if(err)
                res.sen(err);
           res.json(news);

        });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);