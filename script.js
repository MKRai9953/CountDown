const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");

const updateCountDown = (deadLine) => {
  const currTime = new Date();
  const currDiff = deadLine - currTime;

  // Cal time
  let calSecs = Math.floor(currDiff / 1000) % 60;
  let calMins = Math.floor(currDiff / 1000 / 60) % 60;
  let calHours = Math.floor(currDiff / 1000 / 60 / 60) % 60;
  let calDays = Math.floor(currDiff / 1000 / 60 / 60 / 24);

  const formatTimer = (time) => {
    return time > 10 ? time : `0${time}`;
  };
  days.textContent = formatTimer(calDays);
  hours.textContent = formatTimer(calHours);
  mins.textContent = formatTimer(calMins);
  sec.textContent = formatTimer(calSecs);
};

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("Sep 10 2023 20:00");
countDown(targetDate);
