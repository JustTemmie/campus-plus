function resizeCSS() {
    const element = document.getElementById("activityRoot");
    element.style.width = "max-content";
    element.style.maxWidth = "90vw";
    element.style.minWidth = "500px";
}

async function checkSettings() {
    let reziseCSS = await browser.storage.local.get("discussionCSS")
    if (reziseCSS["discussionCSS"]) {
        resizeCSS()
    }
}

(async () => {
    await checkSettings();
})();