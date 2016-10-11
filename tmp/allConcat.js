var AlarmClock = require('./../js/alarmClock.js').alarmClockModule;

$(document).ready(function(){

  setInterval(function(){
    $("#currentTime").text(moment().format('hh:mm A'));
  }, 1000);

  var formattedTime;
  var currentTime;
  $('#alarm-clock').submit(function(event) {
    event.preventDefault();
    var newAlarm = new AlarmClock();
    var input = $('#alarm').val();

    //formatted time to compare set alarm time to current time
    formattedTime = new moment(input, 'HH:mm:ss').format();
    //get current time in year, month, date + time format
    currentTime = new moment().format();
newAlarm.alert();
    // setInterval(function(){
    //   console.log(formattedTime);
    //   if(formattedTime === new moment().format()){
    //     newAlarm.alert();
    //   }
    // }, 1000);


  });


});
