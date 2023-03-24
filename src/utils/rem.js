function setHtml() {
    let deviceWidth = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = deviceWidth / 375 * 10 + "px";
}

window.onresize = setHtml;

setHtml();