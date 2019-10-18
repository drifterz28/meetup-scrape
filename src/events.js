const puppeteer = require('puppeteer');
const querystring = require('querystring');
const { getText, getHtml } = require('./helpers');

module.exports = async function scrapePage(req, res) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const currentDate = new Date();
  const params = {
    keywords: '',
    radius: 30,
    userFreeform: 'Bend%2C+OR',
    mcId: 'z97701',
    mcName: 'Bend%2C+OR',
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    year: currentDate.getFullYear()
  };
  params.allMeetups = !Boolean(params.keywords);
  await page.goto(`https://www.meetup.com/find/events/?${querystring.stringify(params)}`);

  const listings = await page.$$eval('.event-listing', listings => {
    return listings.map(listing => {
      const datetime = listing.querySelector('time');
      const groupInfo = listing.querySelector('.text--labelSecondary a');
      const eventInfo = listing.querySelector('.event');
      const groupLink = groupInfo.href;

      return {
        eventTitle: eventInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
        eventLink: eventInfo.href,
        groupName: groupInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
        groupLink,
        next: groupLink.split('/').slice(-2, -1)[0],
        date: datetime.getAttribute('datetime'),
      }
    });
  });

  await browser.close();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(listings));
};
