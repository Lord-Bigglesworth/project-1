//nylas api
// var requestUrl = "https://dashboard.nylas.com/api_playground?console=true&query=1&step=1";
// var apiKey = "dlkbjf7illzcmuk2reyw3v31c";

//milk api
// var  apiKey is: dc7b772a2abee2298fcd98759ad1999d
// Your shared secret is: 1f29473bbdb8508f


//on click 

var requestUrl = "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js";
var apiKey = "AIzaSyDSEnEJ1Og_5c-q37YmxkVdfTr9LteskYc"

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
          initialView: 'dayGridMonth'4
        });
        calendar.render();
      });
    }
      

//  var calendar = new Calendar(calendarEl, {

//         events: function(info, successCallback, failureCallback) {
//           req.get('myxmlfeed.php')
//             .type('xml')
//             .query({
//               start: info.start.valueOf(),
//               end: info.end.valueOf()
//             })
//             .end(function(err, res) {
      
//               if (err) {
//                 failureCallback(err);
//               } else {
      
//                 successCallback(
//                   Array.prototype.slice.call( // convert to array
//                     res.getElementsByTagName('event')
//                   ).map(function(eventEl) {
//                     return {
//                       title: eventEl.getAttribute('title'),
//                       start: eventEl.getAttribute('start')
//                     }
//                   })
//                 )
//               }
//             })
//         }
      
//       });