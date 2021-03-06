const portfinder = require("portfinder");
const puppeteer = require("puppeteer");
const app = require("../meadowlark-04");

let server = null;
let port = null;

beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});
test("home page links to about page", async () => {
  const brower = await puppeteer.launch();
  const page = await brower.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/about`);
  await brower.close();
});
