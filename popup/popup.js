console.log('popup!');

var buttons = document.getElementsByClassName("buttonParent");

var numberBtn = document.getElementById("videoPlaybackSpeedInput")

numberBtn.addEventListener("change", () => {
    if (numberBtn.value > 800) {
        numberBtn.value = 800
    }

    else if (numberBtn.value < 20) {
        numberBtn.value = 20
    }

    (async () => {
        await storeSettings(numberBtn.id, numberBtn.value)
    })();
})


// the ID names that are expected to be stored
const booleanSettingsList = ["removeHand", "discussionCSS", "insulter"]

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', () => {
        handleClick(button)
    })
}

async function handleNumber(input) {
    await storeSettings(input.id, input.value)
}

async function handleClick(button) {
    console.log(button.id + " clicked")
    
    button.classList.toggle("active");
    if (button.className.includes("active")){
        button.children[1].checked = true;
    }
    
    else {
        button.children[1].checked = false;
    }

    await storeSettings(button.id, button.className.includes("active"))
}
async function storeSettings(setting, setTo) {
    browser.storage.local.set({[setting]: setTo})
}

async function loadSettings() {
    let settings = await browser.storage.local.get()
    for (const [key, value] of Object.entries(settings)) {
        if (value == false && booleanSettingsList.includes(key)) {
            document.getElementById(key).classList.remove("active")
            document.getElementById(key).children[1].checked = false;
        }
    }

    // code for entries that are false by default
    let remove = true

    Object.entries(settings).forEach(thing => {
        if (thing.includes("insulter")) {
            remove = false
        }

        if (thing.includes("videoPlaybackSpeedInput")) {
            // set the playback speed
            document.getElementById("videoPlaybackSpeedInput").value = thing[1];
        }
    })

    if (remove) {
        document.getElementById("insulter").classList.remove("active")
        document.getElementById("insulter").children[1].checked = false;
    }
}

(async () => {
    await loadSettings();
})();