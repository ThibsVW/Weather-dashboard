
$(document).ready(function() {

const searchCity = $("#searchCity");
const runSearch = $("#run-search");
const clearSearch = $("#clear-all");
const notificationElement = $("#notification");
const iconElement =$('#weather-icons');
const tempElement = $("#temperature-value p");
const descElement = $('#temperature-description p');
const locationElement = $("#location p");
const city = $("#searchCity").val();

var queryURL =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ba2a1569518951bccaf8df7ccbbf0e7b";


// .on("click") function associated with the search button
$("#run-search").on("click", function(event) {
    event.preventDefault();
   
   });




//Takes API data (JSON object) and turns it into elements on the page
function upDateWeather (){

}

// function to empty out previous researches
function clear (){
    $("#weather-result").empty();

}




//.on("click") function ssociated with the clear button
$("#clear-all").on("click", clear);




})