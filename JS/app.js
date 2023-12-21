"use strict";
const timeSpanEl = document.querySelector("span#time");
function renderTimer() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    timeSpanEl.innerHTML = `${hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
}
window.onload = function () {
    setInterval(renderTimer, 500);
    renderTimer();
};
