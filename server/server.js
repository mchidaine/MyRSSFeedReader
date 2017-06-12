var express = require('express');

var app = express();

var feed = require('feed-read');
var rssurls = [
        "http://feeds.reuters.com/news/artsculture",
        "http://feeds.reuters.com/reuters/businessNews",
        "http://feeds.reuters.com/reuters/companyNews",
        "http://feeds.reuters.com/reuters/entertainment",
        "http://feeds.reuters.com/reuters/environment",
        "http://feeds.reuters.com/reuters/healthNews",
        "http://feeds.reuters.com/reuters/lifestyle",
        "http://feeds.reuters.com/news/wealth",
        "http://feeds.reuters.com/reuters/MostRead",
		"http://feeds.reuters.com/reuters/oddlyEnoughNews",
		"http://feeds.reuters.com/ReutersPictures",
		"http://feeds.reuters.com/reuters/peopleNews",
		"http://feeds.reuters.com/Reuters/PoliticsNews",
		"http://feeds.reuters.com/reuters/scienceNews",
		"http://feeds.reuters.com/reuters/sportsNews",
		"http://feeds.reuters.com/reuters/technologyNews",
		"http://feeds.reuters.com/reuters/topNews",
		"http://feeds.reuters.com/Reuters/domesticNews",
		"http://feeds.reuters.com/Reuters/worldNews"
        ];


app.get('/api/news', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let results = [];
    let i = 0;
	  	for (let j = 0; j < rssurls.length; j++) {
	  		feed(rssurls[j], function(err, articles){
					if (err) throw err;
	  			else {
	  				for (let article of articles) {
						 results.push(article);
					}
					results.sort(compare);

					  
					  i++;
					if (i== rssurls.length)

	  				res.json(results);
	  			}
				});

	  	}

});

app.get('/api/artsculture', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/news/artsculture", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/businessNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/businessNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/companyNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/companyNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/entertainment', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/entertainment", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/environment', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("	http://feeds.reuters.com/reuters/environment", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/healthNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/healthNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/lifestyle', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/lifestyle", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/wealth', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/news/wealth", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/MostRead', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/MostRead", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/oddlyEnoughNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/oddlyEnoughNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});


app.get('/api/peopleNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/peopleNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/PoliticsNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/Reuters/PoliticsNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/scienceNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/scienceNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/sportsNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/sportsNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/technologyNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/technologyNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/topNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/reuters/topNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/domesticNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/Reuters/domesticNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});

app.get('/api/worldNews', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	feed("http://feeds.reuters.com/Reuters/worldNews", function(err, articles){
		if (err) throw err;
	  			else {
					articles.sort(compare);
					res.json(articles);
				}	 					
	});
});



app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !')
});

app.listen(8080);


function compare(a,b) {
  if (Date.parse(a.published) > Date.parse(b.published))
    return -1;
  if (Date.parse(a.published) < Date.parse(b.published))
    return 1;
  return 0;
}
