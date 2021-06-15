//nylas api
// var requestUrl = "https://dashboard.nylas.com/api_playground?console=true&query=1&step=1";
// var apiKey = "dlkbjf7illzcmuk2reyw3v31c";

//milk api
// var  apiKey is: dc7b772a2abee2298fcd98759ad1999d
// Your shared secret is: 1f29473bbdb8508f


//on click 
button.onclick = function(){
fetch(requestUrl)
    .then(function (response) {
        console.log(response);
        return response.json();
    })

    document.addEventListener('DOMContentLoaded', function() {
        console.log("This initiates the addEventListener");
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });
    }
      


// var getCityWeather = function(city){
//     var apiKey = "8a53c204fdc7aafec86bf779403642e0"
//     var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    
//     fetch(apiURL)
//     .then(function(response){
//      response.json().then(function(data){
//     displayWeather(data, city);
//             });
//         });
//     };