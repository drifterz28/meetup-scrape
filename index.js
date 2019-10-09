const express = require('express');
const app = express();
const port = 3000;

const scrapePage = require('./src/events');
const scrapeGroup = require('./src/group');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/find', (req, res) => {
  //?allMeetups=true&radius=50&userFreeform=Bend%2C+OR&mcId=z97701&mcName=Bend%2C+OR&sort=distance
});

app.get('/find/events', scrapePage);

app.get('/:group', (req, res) => {
  // const group = req.params.group;
  scrapeGroup(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
