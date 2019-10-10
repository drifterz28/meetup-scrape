exports.getText = async (page, selector) => await page.$eval(selector, el => el.innerText);
exports.getHtml = async (page, selector) => await page.$eval(selector, el => el.innerHTML);
