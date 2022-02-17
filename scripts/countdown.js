var days_element = document.getElementById("days");
var hours_element = document.getElementById("hours");
var minutes_element = document.getElementById("minutes");
var seconds_element = document.getElementById("seconds");
function countdown() {
    var end_date = new Date('2022-03-05').valueOf();
    var cur_date = new Date().valueOf();
    var tot_diff = (end_date - cur_date); //Total time to endDate In milliseconds
    var totseconds = tot_diff / 1000; // Total time to endDate in seconds
    var seconds = String(Math.floor(totseconds % 60)); // Timer showing seconds between    0 to 59
    var minutes = String(Math.floor(totseconds / 60) % 60); // Timer showing minutes between    0 to 59
    var hours = String(Math.floor((totseconds / 60) / 60) % 24); // Timer showing hours between      0 to 59
    var days = String(Math.floor(((totseconds / 60) / 60) / 24) % 365); // Timer showing days between       0 to 23
    seconds_element.innerHTML = seconds;
    minutes_element.innerHTML = minutes;
    hours_element.innerHTML = hours;
    days_element.innerHTML = days;
}
countdown();
setInterval(countdown, 1000);
