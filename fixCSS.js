console.log("campus+ initiated");

//document.body.style.border = "5px solid red";

setInterval(removeHand, 100)

function removeHand() {
    const handElement = document.getElementById("requestHelpBtn");
    handElement.remove();
}

function resizeCSS() {
    if (window.location.href.includes("campus.inkrement.no/Discussion")) {

        const element = document.getElementById("activityRoot");
        element.style.width = "max-content";
        element.style.maxWidth = "90vw";
    }
}

resizeCSS()
