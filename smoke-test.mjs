import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/kaor/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("console", (message) => {
  const text = message.text();
  if (message.type() === "error" && !text.includes("Failed to load resource")) errors.push(text);
});
page.on("pageerror", (error) => errors.push(error.message));

await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase("shimabus-link");
    request.addEventListener("success", resolve);
    request.addEventListener("blocked", resolve);
    request.addEventListener("error", () => reject(request.error));
  });
  localStorage.clear();
});
await page.reload({ waitUntil: "networkidle" });

async function selectRoute(fromName, toName) {
  await page.fill("#fromInput", fromName);
  await page.keyboard.press("Enter");
  await page.fill("#toInput", toName);
  await page.keyboard.press("Enter");
}

await selectRoute("奄美空港", "奄美市役所前");
const urlText = await page.locator("#routeUrl").textContent();
const openEnabled = await page.locator("#openRoute").isEnabled();
await selectRoute("和野", "奄美市役所前");
await selectRoute("奄美パーク", "奄美市役所前");
await selectRoute("奄美パーク入口", "奄美市役所前");
await selectRoute("節田", "奄美市役所前");
await selectRoute("笠寿園前", "奄美市役所前");
await page.waitForFunction(() => document.querySelectorAll(".saved-route-item").length === 5);
const savedCount = await page.evaluate(async () => {
  const localStorageKeys = Object.keys(localStorage);
  const dbs = await indexedDB.databases();
  return {
    localStorageKeys,
    hasRouteDb: dbs.some((db) => db.name === "shimabus-link")
  };
});
await page.reload({ waitUntil: "networkidle" });
await page.waitForFunction(() => document.querySelector("#routeUrl")?.textContent === "https://shimabus.busplus.jp/main/6-44");
const restoredRouteName = await page.locator("#routeName").textContent();
const historyCount = await page.locator(".saved-route-item").count();
const hasOldestRoute = await page.locator(".saved-route-item", { hasText: "奄美空港 → 奄美市役所前" }).count();
await page.locator(".saved-route-item", { hasText: "笠寿園前 → 奄美市役所前" }).locator('[data-action="delete"]').click();
await page.waitForFunction(() => document.querySelectorAll(".saved-route-item").length === 4);
const historyCountAfterDelete = await page.locator(".saved-route-item").count();
await page.click("#openRoute");
const frameSrc = await page.locator("#timetableFrame").getAttribute("src");
const csvRows = await page.locator("#csvRows tr").count();
await page.screenshot({ path: "shimabus-link-preview.png", fullPage: true });
await browser.close();

if (errors.length) {
  throw new Error(`Console errors: ${errors.join(" | ")}`);
}
if (urlText !== "https://shimabus.busplus.jp/main/1-44") {
  throw new Error(`Unexpected route URL: ${urlText}`);
}
if (!openEnabled) {
  throw new Error("Open route button stayed disabled.");
}
if (restoredRouteName !== "笠寿園前 → 奄美市役所前") {
  throw new Error(`Previous route was not restored: ${restoredRouteName}`);
}
if (historyCount !== 5) {
  throw new Error(`Expected five saved routes, found ${historyCount}.`);
}
if (hasOldestRoute) {
  throw new Error("Saved route history kept more than five routes.");
}
if (historyCountAfterDelete !== 4) {
  throw new Error(`Deleting a saved route failed: ${historyCountAfterDelete}`);
}
if (savedCount.localStorageKeys.length) {
  throw new Error(`Route data should not use localStorage. Found keys: ${savedCount.localStorageKeys.join(", ")}`);
}
if (!savedCount.hasRouteDb) {
  throw new Error("Route data was not saved to IndexedDB.");
}
if (frameSrc !== "https://shimabus.busplus.jp/main/6-44") {
  throw new Error(`Unexpected iframe src: ${frameSrc}`);
}
if (csvRows < 67) {
  throw new Error(`CSV table rendered too few rows: ${csvRows}`);
}

console.log("smoke test passed");
