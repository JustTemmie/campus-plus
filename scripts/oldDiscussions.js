function resizeCSS() {
    const element = document.getElementById("activityRoot");
    element.style.width = "max-content";
    element.style.maxWidth = "90vw";
    element.style.minWidth = "500px";
}

function oldCSS() {
    const URL = window.location.href
    if (URL.includes("Discussion2")) {
        console.log("ew discussions v2, gross")
        let redirectButton = document.createElement("button")
        redirectButton.href = URL.replace("Discussion2", "Discussion")
        redirectButton.textContent = "ew discussions 2 is gross"
        redirectButton.id = "redirectToDisc1"
        document.body.appendChild(redirectButton)

        let redirectButtonReal = document.getElementById("redirectToDisc1")
        redirectButtonReal.click()
    }
}

async function checkSettings() {
    let settings = await browser.storage.local.get({"oldDiscussion": true})
    if (settings["oldDiscussion"]) {
        oldCSS()
        // resizeCSS()
    }
}

(async () => {
    await checkSettings();
})();