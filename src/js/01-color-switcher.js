import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timerId = null;
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick() {
  refs.btnStop.disabled = false;
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    let switchColor = getRandomHexColor();
    refs.body.style.backgroundColor = switchColor;
  }, 1000);
}

function onStopClick() {
  clearInterval(timerId);
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}
