
//Changes the year for the copyright

var yearSpan = document.getElementById('year');
var currentYear = new Date().getFullYear();

yearSpan.innerHTML = currentYear;

// Changes the month for the copyright

var monthSpan = document.getElementById('month');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'];
var currentMonth = months[new Date().getMonth()];

monthSpan.innerHTML = currentMonth;


// creates typewriter effect for Headers 

var heading = document.querySelector("header h1");

var fullText = heading.innerHTML;
var index = 0;


heading.innerHTML = "";

function typeWrite(){

    if (index< fullText.length){
        heading.innerHTML += fullText.charAt(index);
        index++;
        setTimeout(typeWrite,100);
    }
}

typeWrite();



