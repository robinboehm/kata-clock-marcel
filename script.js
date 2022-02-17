function renderDigitalClock() {
  const digitalTimeElement = document.querySelector(".digitaltime");
  digitalTimeElement.textContent = getDigitalTimeAsString();
}

function renderAnalogClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const clockHoursElement = document.querySelector(".clock-pointer-hours");
  clockHoursElement.style.transform = `rotate(${(360 / 12) * hours - 90}deg)`;

  const clockSecondsElement = document.querySelector(".clock-pointer-seconds");
  clockSecondsElement.style.transform = `rotate(${
    (360 / 60) * seconds - 90
  }deg)`;

  const clockMinutesElement = document.querySelector(".clock-pointer-minutes");
  clockMinutesElement.style.transform = `rotate(${
    (360 / 60) * minutes - 90
  }deg)`;
}

function render() {
  renderAnalogClock();
  renderDigitalClock();
}

function getDigitalTimeAsString() {
  const currentDate = new Date();
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

setInterval(render, 1000);
