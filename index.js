let Parser = require('rss-parser');
let parser = new Parser();
'use strict';
var rssFinder = require('rss-finder');
  
rssFinder('http://www.nytimes.com').then(function(res) {
   


    (async () => {
 
        let feed = await parser.parseURL(res.feedUrls[0].url);
        console.log(feed.title);
       
        feed.items.forEach(item => {
          console.log(item.title + ':' + item.link)
        }); 
       
      })();


}).catch(function(err) {
    console.log(err);
});
 
