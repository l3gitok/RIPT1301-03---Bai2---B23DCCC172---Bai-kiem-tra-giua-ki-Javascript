let hour = 0,
  minute = 0,
  second = 0,
  timer = null,
  alarm = document.getElementById("alarm");

document.getElementById("start").addEventListener("click", () => {
  hour = parseInt(document.getElementById("hours").value);
  minute = parseInt(document.getElementById("minutes").value);
  second = parseInt(document.getElementById("seconds").value);

  if (hour == 0 && minute == 0 && second == 0) {
    alert("Please enter a valid time.");
    return;
  }

  timer = setInterval(() => {
    if (second == 0) {
      if (minute == 0) {
        if (hour != 0) {
          hour--;
          minute = 60;
        } else {
          clearInterval(timer);
          alarm.play();
          alert("Time's up!");
          return;
        }
      }
      minute--;
      second = 60;
    }
    second--;

    document.getElementById("hours").value = hour < 10 ? "0" + hour : hour;
    document.getElementById("minutes").value =
      minute < 10 ? "0" + minute : minute;
    document.getElementById("seconds").value =
      second < 10 ? "0" + second : second;
  }, 1000);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  document.getElementById("hours").value = "00";
  document.getElementById("minutes").value = "00";
  document.getElementById("seconds").value = "00";
  alarm.load();
});