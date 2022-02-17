const days_element = document.getElementById("days");
const hours_element = document.getElementById("hours");
const minutes_element = document.getElementById("minutes");
const seconds_element = document.getElementById("seconds");


function countdown(){
    const end_date = new Date('2022-03-05').valueOf();
    const cur_date = new Date().valueOf();

    const tot_diff = (end_date - cur_date); //Total time to endDate In milliseconds

    const totseconds = tot_diff / 1000;                     // Total time to endDate in seconds
    const seconds = String(Math.floor(totseconds % 60));            // Timer showing seconds between    0 to 59
    const minutes = String(Math.floor(totseconds / 60) % 60);       // Timer showing minutes between    0 to 59
    const hours = String(Math.floor((totseconds / 60)/60) % 24);    // Timer showing hours between      0 to 59
    const days = String(Math.floor(((totseconds / 60)/60)/24)%365); // Timer showing days between       0 to 23
    
    seconds_element.innerHTML= seconds;
    minutes_element.innerHTML=minutes;
    hours_element.innerHTML=hours;
    days_element.innerHTML=days;
}

countdown();
setInterval(countdown,1000);
