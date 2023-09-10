let timeElement = document.querySelector(".time");
let dayElement = document.querySelector(".day");

let dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
timeElement.textContent = currentTime.getTime();
dayElement.textContent = dayOfTheWeek[currentTime.getDay()];
