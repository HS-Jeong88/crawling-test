import puppeteer from "puppeteer";

export default async function category(req, res) {
  if (req.method === "GET") {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto("https://datalab.naver.com/shoppingInsight/sKeyword.naver");

    let category = [];
    let target = "//div[@class='set_period category']//div[1]//ul//li";
    await page.waitForXPath(target);
    const i = await page.$x(target);
    for (const item of i) {
      const value = await item.evaluate((el) => el.textContent);
      category.push(value.trim());
    }

    browser.close();
    return res.json({ category: [...category] });
  }
}
