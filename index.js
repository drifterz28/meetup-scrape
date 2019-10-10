const express = require('express');
const app = express();
const port = 3000;

const scrapePage = require('./src/events');
const scrapeGroup = require('./src/group');
const scrapeGroups = require('./src/groups');

app.use(express.static('public'));
app.get('/find', scrapeGroups);
app.get('/find/events', scrapePage);
app.get('/:group', scrapeGroup);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
