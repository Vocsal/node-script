import Request from "#src/common/request.js";
import { JSDOM } from "jsdom";

export async function getJsdom(url) {
  if (typeof url !== "string") throw new Error("Invalid URL: " + url);
  const html = await Request.get(url);
  return new JSDOM(html);
}
export default getJsdom;

export async function getDocument(url) {
  const jsdom = await getJsdom(url);
  return jsdom.window.document;
}