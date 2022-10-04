//time and date
function showTime() {
    let dateTime = new Date();
    // console.log(dateTime.getDate());
    // console.log(dateTime.getHours());    
    // console.log(dateTime.getMinutes());    
    // console.log(dateTime.getSeconds());
    // console.log(dateTime.getDate());    
    // console.log(dateTime.getMonth());    
    // console.log(dateTime.getFullYear());
    let hrs = dateTime.getHours();
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    document.getElementById('hrs').innerHTML = hrs;
    //minutes
    let min = dateTime.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    document.getElementById('min').innerHTML = min;
    //seconds
    let sec = dateTime.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('day').innerHTML = dateTime.getDate();
    //month
    let month = dateTime.getMonth();
    switch (month) {
        case 1: month = 'January';
            break;
        case 2: month = 'February';
            break;
        case 3: month = 'March';
            break;
        case 4: month = 'April';
            break;
        case 5: month = 'May';
            break;
        case 6: month = 'June';
            break;
        case 7: month = 'July';
            break;
        case 8: month = 'August';
            break;
        case 9: month = 'September';
            break;
        case 10: month = 'October';
            break;
        case 11: month = 'November';
            break;
        case 12: month = 'December';
            break;
        default:
            break;
    }
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = dateTime.getFullYear();
}
setInterval(showTime, 1000);
//greeting message
function greet() {
    let time = new Date();
    let greet = time.getHours();
    // console.log(greet);
    if (greet >= 0 && greet < 12) {
        document.getElementById('greeting').innerHTML = "Good Morning";
    }
    else if (greet >= 12 && greet < 16) {
        document.getElementById('greeting').innerHTML = "Good Afternoon";
    }
    else {
        document.getElementById('greeting').innerHTML = "Good Evening";
        console.log("working");
    }
}
greet();
setInterval(greet, 3600000);