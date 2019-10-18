const puppeteer = require('puppeteer');
const { getText, getHtml } = require('./helpers');

const getEvents = async (page, selector) => await page.$$eval('.groupHome-eventsList-upcomingEvents .eventCard', events => {
  return events.map(event => ({
    eventName: event.querySelector('.eventCardHead--title').innerText,
    eventLink: event.querySelector('.eventCardHead--title').href,
    time: event.querySelector('time').getAttribute('datetime'),
    location: event.querySelector('.venueDisplay').innerText,
    attending: event.querySelector('.avatarRow--attendingCount').innerText,
    info: event.querySelector('.text--small.padding--top.margin--halfBottom:last-child').innerHTML
    }));
  });

module.exports = async function scrapePage(req, res) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const group = req.params.group;

  await page.goto(`https://www.meetup.com/${group}/`);

  const upcomingEvents = await getEvents(page, '.groupHome-eventsList-upcomingEvents .eventCard');
  const pastEvents = await getEvents(page, '.groupHome-eventsList-pastEvents .eventCard');
  const groupName = await getText(page, '.groupHomeHeader-groupNameLink');
  const city = await getText(page, '.groupHomeHeaderInfo-cityLink');
  const members = await getText(page, '.groupHomeHeaderInfo-memberLink');
  const privacy = await getText(page, '.groupPrivacyLabelTooltip .infoToggle-label');
  const groupImage = await page.$eval('.groupHomeHeader-banner', el => el.style.backgroundImage);
  const description = await getHtml(page, '.group-description:last-child', el => el.innerHTML);

  const listing = {
    groupName,
    city,
    members,
    privacy,
    description,
    groupImage: groupImage.split('"').slice(-2, -1)[0],
    upcomingEvents: upcomingEvents,
    pastEvents: pastEvents
  };
  await browser.close();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(listing));
};
