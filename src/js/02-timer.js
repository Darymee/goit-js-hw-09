import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

const CURRENT_DAY = new Date();
let SELECTED_DAY = 0;

// const FUTURE_DAY = 2771448234050;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  parseDate: true,
  onClose(selectedDates) {
    if (selectedDates[0] < CURRENT_DAY) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
      // selectedDates[0] = CURRENT_DAY;
      Notiflix.Notify.success('This time is right');
      console.log(SELECTED_DAY);
      console.log(dateStr);
      SELECTED_DAY = dateStr;
      return SELECTED_DAY;
      // return selectedDates;
    }
    // convertMs(msSum);
    // console.log(convertMs(msSum));
  },
};

// let msSum = FUTURE_DAY - CURRENT_DAY;

// console.log(msSum);

// options.onClose();

// let aaac = selectedDates;
// console.log(aaac);

flatpickr(refs.input, options);
require('flatpickr/dist/themes/confetti.css');

refs.btnStart.addEventListener('click', onStartBtnClick);

// const timer = {
//   start() {
//     const DAY_NOW = Date.now();
//     setInterval(() => {
//       const ad = Date.now();
//       console.log(ad - DAY_NOW);
//     }, 1000);
//   },
// };

// timer.start();

function onStartBtnClick() {
  refs.btnStart.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  // padStart()
}

// function makeDeltaTime() {
//   setInterval(() => {
//     // console.log('new Date', SELECTED_DAY);
//     // console.log('Date.now()', Date.now());
//     let delta = SELECTED_DAY - Date.now();

//     console.log(delta);
//     convertMs(delta);
//   }, 1000);
// }

// makeDeltaTime();

// function makeTimerInterface() {
//   refs.spanDays.textContent
//   refs.spanHours.textContent
//   refs.spanMinutes.textContent
//   refs.spanSeconds.textContent
// }
