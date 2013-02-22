$(document).ready(function() {
  
  $('#calendar').fullCalendar({
  
    // US Holidays
    events: 'https://www.google.com/calendar/feeds/207daonhtf2n59fituhs3juu4o%40group.calendar.google.com/public/basic',
    
    eventClick: function(event) {
      // opens events in a popup window
      window.open(event.url, 'gcalevent', 'width=700,height=600');
      return false;
    },
    
  });
  
});