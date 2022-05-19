const puppeteer = require("puppeteer");

export default async function main(req, res) {
  if (req.method === "POST") {
    const { word, cate } = req.body;
    let data = [];

    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto("https://datalab.naver.com/shoppingInsight/sKeyword.naver");
    let target;
    let arr;
    let mobile, pc, male, female;
    let age = [
      { key: "10대", value: "" },
      { key: "20대", value: "" },
      { key: "30대", value: "" },
      { key: "40대", value: "" },
      { key: "50대", value: "" },
      { key: "60대", value: "" },
    ];
    const ageTarget = [
      "#bar-container > ul > li:nth-child(1) > span > span",
      "#bar-container > ul > li:nth-child(2) > span > span",
      "#bar-container > ul > li:nth-child(3) > span > span",
      "#bar-container > ul > li:nth-child(4) > span > span",
      "#bar-container > ul > li:nth-child(5) > span > span",
      "#bar-container > ul > li:nth-child(6) > span > span",
    ];
    // target = "//a[contains(text(),'검색어 통계')]";
    // let handler = await page.waitForXPath(target);
    // await handler.click();

    target =
      "#content > div.section_instie_area.space_top > div > div.section.insite_inquiry > div > div > div:nth-child(1) > div > div:nth-child(1) > span";
    let handler = await page.waitForSelector(target);
    await handler.click();
    target = `//a[contains(text(),'${cate}')]`;
    handler = await page.waitForXPath(target);
    await handler.click();

    target = "//input[@id='item_keyword']";
    handler = await page.waitForXPath(target);
    await handler.type(word);
    await handler.press("Enter");

    target = "//span[contains(text(),'조회하기')]";
    handler = await page.waitForXPath(target);
    await handler.click();

    const scrapeText = async (selector) => {
      let value;
      await page.waitForSelector(selector, { timeout: 500 });
      arr = await page.$$(selector);
      for (const item of arr) {
        value = await item.evaluate((el) => el.textContent);
      }
      return value;
    };

    try {
      mobile = await scrapeText(
        "#pie_chart_device > svg > g:nth-child(2) > g.bb-chart > g.bb-chart-arcs > g.bb-chart-arc.bb-target.bb-target-mo > text"
      );
      pc = await scrapeText(
        "#pie_chart_device > svg > g:nth-child(2) > g.bb-chart > g.bb-chart-arcs > g.bb-chart-arc.bb-target.bb-target-pc > text"
      );
      male = await scrapeText(
        "#pie_chart_gender > svg > g:nth-child(2) > g.bb-chart > g.bb-chart-arcs > g.bb-chart-arc.bb-target.bb-target-m > text"
      );
      female = await scrapeText(
        "#pie_chart_gender > svg > g:nth-child(2) > g.bb-chart > g.bb-chart-arcs > g.bb-chart-arc.bb-target.bb-target-f > text"
      );
    } catch {
      return res.json({ chart: "not found" });
    }

    const scrapeStyle = async (selector) => {
      let value;
      await page.waitForSelector(selector, { timeout: 500 });
      arr = await page.$$(selector);
      for (const item of arr) {
        value = await item.evaluate((el) => el.getAttribute("style"));
      }
      return value;
    };

    for (const item of age) {
      try {
        const selector = ageTarget[age.indexOf(item)];
        const style = await scrapeStyle(selector);
        item.value = style;
      } catch {
        break;
      }
    }

    let byAge = [];
    for (const item of age) {
      let newObj = {};
      newObj[item.key] = item.value.replace("height: ", "");
      byAge.push(newObj);
    }
    data = { chart: [{ mobile }, { pc }, { male }, { female }, ...byAge] };

    browser.close();
    return res.json(data);
  }
}
