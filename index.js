const express = require('express');
const mcache = require('memory-cache');

const app = express();
const port = process.env.PORT || 3000;

const scrapePage = require('./src/events');
const scrapeGroup = require('./src/group');
const scrapeGroups = require('./src/groups');

const cache = duration => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

app.use(express.static('public'));
app.get('/find', cache(86400), scrapeGroups);
app.get('/find/events', cache(86400), scrapePage);
app.get('/:group', cache(120), scrapeGroup);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
