const timeSpanEl: HTMLSpanElement = document.querySelector(
  "span#time"
) as HTMLSpanElement;

function renderTimer(): void {
  const hours: number = new Date().getHours();
  const minutes: number = new Date().getMinutes();
  const seconds: number = new Date().getSeconds();

  timeSpanEl.innerHTML = `${hours} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds < 10 ? "0" + seconds : seconds}`;
}

window.onload = function (): void {
  setInterval(renderTimer, 500);
  renderTimer();
};
