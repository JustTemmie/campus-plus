let pattern = "https://developer.mozilla.org/*";
const targetUrl = "https://nationalzoo.si.edu/sites/default/files/styles/1400x700_scale_and_crop/public/animals/20181031-skipbrown112.jpg?itok=cUjU4IAl&timestamp=1542982168";

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);