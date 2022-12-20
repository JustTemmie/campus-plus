console.log('popup!');

var buttons = document.getElementsByClassName("buttonParent");

// the ID names that are expected to be stored
const settingsList = ["removeHand", "discussionCSS", "insulter"]

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', () => {
        handleClick(button)
    })
}

async function handleClick(button) {
    // console.log(button.id + " pressed");
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
        if (value == false && settingsList.includes(key)) {
            document.getElementById(key).classList.remove("active")
            document.getElementById(key).children[1].checked = false;
        }
    }

    let remove = true

    Object.entries(settings).forEach(thing => {
        if (thing.includes("insulter")) {
            remove = false
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