const puppeteer = require('puppeteer');
const querystring = require('querystring');

module.exports = async function scrapePage(req, res) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const currentDate = new Date();
  const params = {
    keywords: '',
    radius: 30,
    sort: 'distance', // default, founded_date, member_count, distance
    userFreeform: 'Bend%2C+OR',
    mcId: 'z97701',
    mcName: 'Bend%2C+OR',
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    year: currentDate.getFullYear()
  };
  params.allMeetups = !Boolean(params.keywords);
  //?allMeetups=true&radius=50&userFreeform=Bend%2C+OR&mcId=z97701&mcName=Bend%2C+OR&sort=distance
  await page.goto(`https://www.meetup.com/find/?${querystring.stringify(params)}`);

  const groups = await page.$$eval('.j-groupCard-list .groupCard', groups => {
    return groups.map(group => {
      const groupImage = group.querySelector('.groupCard--photo').style.backgroundImage;
      const groupInfo = group.querySelector('a:first-child');
      const groupLink = groupInfo.href;
      return {
        groupImage: groupImage.split('"').slice(-2, -1)[0],
        groupName: groupInfo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ''),
        groupLink,
        next: groupLink.split('/').slice(-2, -1)[0],
      }
    });
  });

  await browser.close();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(groups));
};
