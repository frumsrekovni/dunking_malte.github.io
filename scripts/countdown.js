var days_element = document.getElementById("days");
var hours_element = document.getElementById("hours");
var minutes_element = document.getElementById("minutes");
var seconds_element = document.getElementById("seconds");
var subtitle_element = document.getElementById("subtitle");
function countdown() {
    var cur_date = new Date(); // The date right now
    var end_date = new Date("".concat(cur_date.getFullYear(), "-03-05")); // 5th of March is Karlstads birthday
    var cur_date_value_of = cur_date.valueOf();
    var end_date_value_of = end_date.valueOf();
    if (cur_date_value_of > end_date_value_of) {
        end_date.setFullYear(cur_date.getFullYear() + 1);
    }
    if (cur_date.toDateString() == end_date.toDateString()) { // Doing cur_date == end_date. doesnt actually work the way youd think it does
        console.log("Grattis på födelsedagen Karlstad!");
        subtitle_element.innerHTML = "Grattis på födelsedagen Karlstad!";
        subtitle_element.classList.add("blink");
        subtitle_element.onanimationend = function () {
            subtitle_element.classList.remove("blink");
        };
    }
    var tot_diff = (end_date.valueOf() - cur_date.valueOf()); // Total time to endDate In milliseconds
    var totseconds = tot_diff / 1000; // Total time to endDate in seconds
    var seconds = String(Math.floor(totseconds % 60)); // Timer showing seconds between    0 to 59
    var minutes = String(Math.floor(totseconds / 60) % 60); // Timer showing minutes between    0 to 59
    var hours = String(Math.floor((totseconds / 60) / 60) % 24); // Timer showing hours between      0 to 23
    var days = String(Math.floor(((totseconds / 60) / 60) / 24) % 365); // Timer showing days between       0 to 364
    seconds_element.innerHTML = seconds;
    minutes_element.innerHTML = minutes;
    hours_element.innerHTML = hours;
    days_element.innerHTML = days;
}
countdown();
setInterval(countdown, 1000);
