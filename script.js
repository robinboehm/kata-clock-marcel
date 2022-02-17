function render() {
  const digitalTimeElement = document.querySelector(".digitaltime");
  digitalTimeElement.textContent = getDigitalTimeAsString();
}

function getDigitalTimeAsString() {
  const currentDate = new Date();
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

setInterval(render, 1000);
