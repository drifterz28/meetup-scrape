const puppeteer = require('puppeteer');
const querystring = require('querystring');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const params = {
    keywords: '',
    radius: 50,
    userFreeform: 'Bend%2C+OR',
    mcId: 'z97701',
    mcName: 'Bend%2C+OR',
    month: 10,
    day: 7,
    year: 2019
  };
  params.allMeetups = !Boolean(params.keywords);
  await page.goto(`https://www.meetup.com/find/events/?${querystring.stringify(params)}`);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    const results = [...document.querySelectorAll('.event-listing')];
      return results.map(listing => {
        const datetime = listing.querySelector('time');
        const groupInfo = listing.querySelector('.text--labelSecondary a');
        const eventInfo = listing.querySelector('.event');

        return {
          eventTitle: eventInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
          eventLink: eventInfo.href,
          groupName: groupInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
          groupLink: groupInfo.href,
          date: datetime.getAttribute('datetime'),
        };
      });
  });

  console.log('listings:', dimensions);

  await browser.close();
})();


//?allMeetups=true&radius=50&userFreeform=Bend%2C+OR&mcId=z97701&mcName=Bend%2C+OR&month=10&day=7&year=2019
