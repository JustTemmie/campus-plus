function insulter() {
    const handElement = document.getElementById("requestHelpBtn");
    handElement.remove();
}

async function checkSettings() {
    let settings = await browser.storage.local.get({"insulter": false})
    if (settings["insulter"]) {
        console.log("HELLO!")
        setInterval(insulter, 100)
    }
}

(async () => {
    await checkSettings();
})();

console.log("HI")