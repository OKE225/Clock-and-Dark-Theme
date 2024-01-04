const bodyHTML: HTMLBodyElement = document.querySelector(
  "body"
) as HTMLBodyElement;

const spanTimer: HTMLDivElement = document.querySelector(
  "span#timer"
) as HTMLDivElement;

function renderTime(): void {
  const hours: number = new Date().getHours();
  const minutes: number = new Date().getMinutes();
  const seconds: number = new Date().getSeconds();

  spanTimer.innerHTML = "";

  setColorsForNumbers(
    addBeginningZero(hours),
    addBeginningZero(minutes),
    addBeginningZero(seconds)
  );
}

function setColorsForNumbers(...args: string[]): void {
  args
    .join(" : ")
    .split("")
    .forEach((el: string): void => {
      const spanEl: HTMLSpanElement = document.createElement(
        "span"
      ) as HTMLSpanElement;

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

function addBeginningZero(num: number): string {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

const divTimeContainer: HTMLDivElement = document.querySelector(
  "div#time-container"
) as HTMLDivElement;

const divBoxToggleSwitch: HTMLDivElement = document.querySelector(
  "div#box-switch-btn"
) as HTMLDivElement;

const inputToggleSwitch: HTMLInputElement = document.querySelector(
  "input#input-switch"
) as HTMLInputElement;

function changeTheme(): void {
  if (inputToggleSwitch.checked) {
    bodyHTML.style.backgroundColor = "black";
    spanTimer.style.color = "white";
    divTimeContainer.style.color = "white";
    divBoxToggleSwitch.style.color = "white";
  } else {
    bodyHTML.style.backgroundColor = "white";
    spanTimer.style.color = "black";
    divTimeContainer.style.color = "black";
    divBoxToggleSwitch.style.color = "black";
  }
}

window.onload = function (): void {
  setInterval(renderTime, 100);
  renderTime();

  inputToggleSwitch?.addEventListener("change", changeTheme);
};
