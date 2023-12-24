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

      let color: string;

      switch (el) {
        case "0":
          color = "#ff595e";
          break;
        case "1":
          color = "#ff924c";
          break;
        case "2":
          color = "#ffca3a";
          break;
        case "3":
          color = "#c5ca30";
          break;
        case "4":
          color = "#8ac926";
          break;
        case "5":
          color = "#52a675";
          break;
        case "6":
          color = "#1982c4";
          break;
        case "7":
          color = "#4267ac";
          break;
        case "8":
          color = "#6a4c93";
          break;
        case "9":
          color = "#b5a6c9";
          break;
        case " ":
          color = "#000000";
          spanEl.style.width = `${0.5}em`;
          break;
        default:
          color = "#000000";
          break;
      }

      spanEl.innerHTML = el;
      spanEl.style.color = color;

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

window.onload = function (): void {
  setInterval(renderTime, 100);
  renderTime();
};
