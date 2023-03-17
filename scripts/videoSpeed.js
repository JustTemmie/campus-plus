console.log("BOOOOST")

async function setPlaybackSpeed() {
    let settings = await browser.storage.local.get({"videoPlaybackSpeedInput": 100})
    console.log(settings["videoPlaybackSpeedInput"])
    let video = document.getElementById('video-player')
    video.playbackRate = settings["videoPlaybackSpeedInput"]/100
}

setInterval(setPlaybackSpeed, 200)