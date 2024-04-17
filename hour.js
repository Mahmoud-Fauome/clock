let text = document.querySelector("h1");

setInterval(() => {
  let date = new Date();
  hours = date.getHours();

  hours > 12 ? (hours = hours - 12) : (hours = hours);
  hours < 10 ? (hours = "0" + hours) : (hours = hours);
  /////////////////////////////////////
  miniute = date.getMinutes();
  miniute < 10 ? (miniute = "0" + miniute) : (miniute = miniute);
  // ///////////////////////////////////
  seconds = date.getSeconds();
  seconds < 10 ? (seconds = "0" + seconds) : (seconds = seconds);

  date.getHours() > 12
    ? (seconds = seconds + "PM")
    : (seconds = seconds + "AM");
  text.innerHTML = hours + ":" + miniute + ":" + seconds;
}, 1000);
