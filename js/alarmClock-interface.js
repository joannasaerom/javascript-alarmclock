var AlarmClock = require('./../js/alarmClock.js').alarmClockModule;

$(document).ready(function(){

  setInterval(function(){
    $("#currentTime").text(moment().format('hh:mm:ss A'));
  }, 1000);

  var formattedTime, checkAlarm, currentTime;
  var newAlarm = new AlarmClock();
  $('#alarm-clock').submit(function(event) {
    event.preventDefault();

    var input = $('#alarm').val();

    //formatted time to compare set alarm time to current time
    formattedTime = new moment(input, 'HH:mm:ss').format();
    //get current time in year, month, date + time format
    currentTime = new moment().format();

    //checks every second to see if set alarm time is equal to current time
    checkAlarm = setInterval(function(){
      if(formattedTime === new moment().format()){
        newAlarm.alert();
      }
    }, 1000);


  });

  //turn off the alarm
  $("#turnOff").click(function(){
    newAlarm.stop();
    clearInterval(checkAlarm);
  });

  $("#snoozeOptions").submit(function(event){
    event.preventDefault();
    var snoozeTime = parseInt($('#snoozeTime').val());
    var hitSnooze = new moment().add(snoozeTime, 'minutes');
    var formattedSnooze = hitSnooze.format('hh:mm:ss');
    console.log(formattedSnooze);
    //checks every second to see if snooze time is equal to current time
    checkAlarm = setInterval(function(){
      if(formattedSnooze === moment().format('hh:mm:ss')){
        newAlarm.alert();
      }
    }, 1000);
  });

});
