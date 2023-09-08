function insulter() {
    const handElement = document.getElementById("requestHelpBtn");
    handElement.remove();
}

async function checkSettings() {
    if (settings["insulter"]) {
        document.getElementById("submit-answer")
    }
}

(async () => {
    await checkSettings();
})();

console.log("HI")