function removeHand() {
    const handElement = document.getElementById("requestHelpBtn");
    handElement.remove();
}

async function checkSettings() {
    let settings = await browser.storage.local.get({"removeHand": true})
    if (settings["removeHand"]) {
        setInterval(removeHand, 100)
    }
}

(async () => {
    await checkSettings();
})();
