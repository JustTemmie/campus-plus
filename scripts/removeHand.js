function removeHand() {
    const handElement = document.getElementById("requestHelpBtn");
    handElement.remove();
}

async function checkSettings() {
    let reziseCSS = await browser.storage.local.get("removeHand")
    if (reziseCSS["removeHand"]) {
        setInterval(removeHand, 100)
    }
}

(async () => {
    await checkSettings();
})();
