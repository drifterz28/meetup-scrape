const puppeteer = require('puppeteer');

module.exports = async function scrapePage(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const group = req.params.group;
  const date = new Date();
  const params = {
    keywords: '',
    radius: 30,
    sort: 'distance',
    userFreeform: 'Bend%2C+OR',
    mcId: 'z97701',
    mcName: 'Bend%2C+OR',
    month: date.getMonth() + 1,
    day: date.getDate(),
    year: date.getFullYear()
  };
  params.allMeetups = !Boolean(params.keywords);

  await page.goto(`https://www.meetup.com/${group}`);

  const listings = await page.evaluate(() => {
    const results = [...document.querySelectorAll('.event-listing')];
    //.groupHomeHeader-groupNameLink
    //.groupHomeHeaderInfo-cityLink
    //.groupHomeHeaderInfo-memberLink
    //.groupPrivacyLabelTooltip
    //.groupHomeHeader-banner group image is style background image
    //.group-description
    //.groupHome-eventsList-upcomingEvents
    //.groupHome-eventsList-pastEvents
      return results.map(listing => {
        const datetime = listing.querySelector('time');
        const groupInfo = listing.querySelector('.text--labelSecondary a');
        const eventInfo = listing.querySelector('.event');
        const groupLink = groupInfo.href;
        return {
          groupName: groupInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
          groupLink,
          self: groupLink.split('/').slice(-2, -1)[0],
          date: datetime.getAttribute('datetime'),
        };
      });
  });
  await browser.close();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log('listings:', listings);
  res.send(JSON.stringify(listings));
};
