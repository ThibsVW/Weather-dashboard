
function citySearch() {
    event.preventDefault();
    const cityName = ($("#city-name").val());
    // query URL and custom API KEY variable for current day weather 
    var APIKey = "ba2a1569518951bccaf8df7ccbbf0e7b";
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + APIKey;
    //ajax "get" method for the JSON object
    $.get({
        url: queryURL,
        
    }).then(function (response) {
        console.log(response);
        const weather = response;
        console.log(weather.name);
        console.log(weather.main.temp);
        console.log(weather.main.humidity);
        console.log(weather.wind.speed);

        const cityName = weather.name;
        const cityTemp = weather.main.temp;
        const cityHumidity = weather.main.humidity;
        const cityWindSpeed = weather.wind.speed;

        $("#city-name").text(cityName);
        $("#city-temp").text("Temperature" + cityTemp.toFixed(1) +"C");
        $("#city-humidity").text("humidity" + cityHumidity + "%");
        $("#city-wind").text("wind-speed" + cityWindSpeed.toFixed(2)+ "KPH");
    });
};
    //button to run search
$("#btnSearch").on("click", citySearch)


//Keep city searached by the guests
     var keepCities = [];
     var displayCity = $("#cityDisplay");
     var searchButton = $("#btnSearch");
     var cityInput = $("#city-name");

      // Function for displaying city names 
      function renderCityNames() {

        displayCity.innerHTML = "";
        
$("li").empty()

        // Render a new city for each search
        for (var i = 0; i < keepCities.length; i++) {

       var keepCity = keepCities[i];
       var li = $("<li>");
       li.text(keepCities[i]);
       li.attr("data-index", i);
       var button = $("<h1>");
       li.append(button);
       displayCity.append(li);
       
        }
      }

function init () {

    //stored city names from local storage
    var storedCityNames = JSON.parse(localStorage.getItem("KeepCities"));
    //update local storage if keepCities 
    if (storedCityNames !==null){
        keepCities = storedCityNames;
    }
    renderCityNames();
}

function storeCityNames (){
    localStorage.setItem("keepCities", JSON.stringify(keepCities));
}

searchButton.on("click", function (event){
    event.preventDefault();
    var cityTextDisplay = cityInput.val();
    if (cityTextDisplay ==="") {
        return;
    }
    keepCities.push(cityTextDisplay);
    cityInput.value = "";

storeCityNames();
renderCityNames();

})

function uvIndex(lon, lat) {

    var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=a2a1569518951bccaf8df7ccbbf0e7b&lat=" + lat + "&lon=" + lon + "&cnt=1";

    $.ajax({
        url : uvIndexURL,
        method : "GET"
    }).then(function(response){
        var lon = response.coord.lon;
        var lat = response.coord.lat;

        var uvIndFinal = response.value;
        console.log(uvIndexURL);
        if (uvIndFinal <= 2) {
			// If LON&LAT is 2 or less, make Green
			uvBtn.attr("class", "uvGreen");
		} else if (uvIndFinal <=5) {
			// If LON&LAT is 5 or less but greater than 2, make Yellow
			uvBtn.attr("class", "uvYellow");
		} else if (uvIndFinal <=7) {
			// If LON&LAT is 7 or less but greater than 5, make Orange
			uvBtn.attr("class", "uvOrange");
		} else if (uvIndFinal < 11) {
			// If LON&LAT is 10 or less but greater than 7, make Red
			uvBtn.attr("class", "uvRed");
		} else {
			// If LON&LAT greater than 11, make Purple
			uvBtn.attr("class", "uvPurple");
		}

    });

}
