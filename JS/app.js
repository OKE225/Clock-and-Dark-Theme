"use strict";
const bodyHTML = document.querySelector("body");
const spanTimer = document.querySelector("span#timer");
function renderTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    spanTimer.innerHTML = "";
    setColorsForNumbers(addBeginningZero(hours), addBeginningZero(minutes), addBeginningZero(seconds));
}
function setColorsForNumbers(...args) {
    args
        .join(" : ")
        .split("")
        .forEach((el) => {
        const spanEl = document.createElement("span");
        switch (el) {
            case "0":
                spanEl.style.color = "#ff595e";
                break;
            case "1":
                spanEl.style.color = "#ff924c";
                break;
            case "2":
                spanEl.style.color = "#ffca3a";
                break;
            case "3":
                spanEl.style.color = "#c5ca30";
                break;
            case "4":
                spanEl.style.color = "#8ac926";
                break;
            case "5":
                spanEl.style.color = "#52a675";
                break;
            case "6":
                spanEl.style.color = "#1982c4";
                break;
            case "7":
                spanEl.style.color = "#4267ac";
                break;
            case "8":
                spanEl.style.color = "#6a4c93";
                break;
            case "9":
                spanEl.style.color = "#b5a6c9";
                break;
            case " ":
                spanEl.style.color = "#000000";
                spanEl.style.width = `${0.5}em`;
                break;
        }
        spanEl.innerHTML = el;
        spanTimer.appendChild(spanEl);
    });
}
function addBeginningZero(num) {
    if (num < 10) {
        return `0${num}`;
    }
    else {
        return `${num}`;
    }
}
const divTimeContainer = document.querySelector("div#time-container");
const divBoxToggleSwitch = document.querySelector("div#box-switch-btn");
const inputToggleSwitch = document.querySelector("input#input-switch");
function changeTheme() {
    if (inputToggleSwitch.checked) {
        bodyHTML.style.backgroundColor = "black";
        spanTimer.style.color = "white";
        divTimeContainer.style.color = "white";
        divBoxToggleSwitch.style.color = "white";
    }
    else {
        bodyHTML.style.backgroundColor = "white";
        spanTimer.style.color = "black";
        divTimeContainer.style.color = "black";
        divBoxToggleSwitch.style.color = "black";
    }
}
window.onload = function () {
    setInterval(renderTime, 100);
    renderTime();
    inputToggleSwitch === null || inputToggleSwitch === void 0 ? void 0 : inputToggleSwitch.addEventListener("change", changeTheme);
};
