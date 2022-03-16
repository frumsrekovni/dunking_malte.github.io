const days_element = document.getElementById("days");
const hours_element = document.getElementById("hours");
const minutes_element = document.getElementById("minutes");
const seconds_element = document.getElementById("seconds");
const subtitle_element = document.getElementById("subtitle");

function countdown(){
    const cur_date = new Date();                                    // The date right now
    const end_date = new Date(`${cur_date.getFullYear()}-03-05`);   // 5th of March is Karlstads birthday
    const cur_date_value_of = cur_date.valueOf();
    const end_date_value_of = end_date.valueOf();

    if(cur_date_value_of > end_date_value_of){
        end_date.setFullYear(cur_date.getFullYear()+1);
    }
    
    if(cur_date.toDateString() == end_date.toDateString()){ // Doing cur_date == end_date. doesnt actually work the way youd think it does
        console.log("Grattis på födelsedagen Karlstad!");
        subtitle_element.innerHTML = "Grattis på födelsedagen Karlstad!";
        subtitle_element.classList.add("blink");
        subtitle_element.onanimationend = () =>{
            subtitle_element.classList.remove("blink");
        }
    }

    const tot_diff = (end_date.valueOf() - cur_date.valueOf());     // Total time to endDate In milliseconds

    const totseconds = tot_diff / 1000;                             // Total time to endDate in seconds
    const seconds = String(Math.floor(totseconds % 60));            // Timer showing seconds between    0 to 59
    const minutes = String(Math.floor(totseconds / 60) % 60);       // Timer showing minutes between    0 to 59
    const hours = String(Math.floor((totseconds / 60)/60) % 24);    // Timer showing hours between      0 to 23
    const days = String(Math.floor(((totseconds / 60)/60)/24)%365); // Timer showing days between       0 to 364

    seconds_element.innerHTML= seconds;
    minutes_element.innerHTML=minutes;
    hours_element.innerHTML=hours;
    days_element.innerHTML=days;    
}

countdown();
setInterval(countdown,1000);
