//Run once on page load
$(function () {
//get lat and lon from browser API
    navigator.geolocation.getCurrentPosition(function(position) {        
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
      // Moment.js Lib to handle Dates with JS
      let weekday = moment().format('dddd');
      let date_month = moment().format('lll');
      let time_now = moment().format('h:mm:ss a');
      document.getElementById("weekday").innerHTML = weekday;
      document.getElementById("date-month").innerHTML = date_month;
  
      var urlAPI = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
      
  console.log(urlAPI);
       
  $.getJSON(urlAPI, function (data) {
  var currentTempInCelsius = data.main.temp;
  $("#temp").text(Math.round(currentTempInCelsius));
  $("#tempunit").text('ºC');  
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("weather-icon").src = data.weather[0].icon;
  document.getElementById("weather-desc").innerHTML = data.weather[0].main;
  
//On Click change C to F degrees
  $("#tempunit").click(function() {
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "ºC" ? "ºF" : "ºC";
    $("#tempunit").text(newTempUnit);
    if(newTempUnit == 'ºF'){
      let fTemp = Math.round((parseFloat(data.main.temp)*1.8+32));
      $('#temp').text(fTemp);
    }else{
      let cTemp = Math.round(currentTempInCelsius);
      $('#temp').text(cTemp);
    }

      });
    });
      
  });
});