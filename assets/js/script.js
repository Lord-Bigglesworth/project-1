document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2021-06-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title,addEventButton',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },

    headerToolbar: {
      center: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var descriptor = prompt('Enter the description of your event');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: descriptor,
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    },
  


    events: [
      {
        title: 'All Day Event',
        start: '2021-06-01'
      },
      {
        title: 'Long Event',
        start: '2021-06-07',
        end: '2021-06-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-06-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-06-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2021-06-11',
        end: '2021-06-13'
      },
      {
        title: 'Meeting',
        start: '2021-06-12T10:30:00',
        end: '2021-06-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2021-06-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2021-06-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2021-06-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-06-28'
      }
    ]

  
  });

  calendar.render();
  
});

/*
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      center: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    }
  });

  calendar.render();
});

*/
  
