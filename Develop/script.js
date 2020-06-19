
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

