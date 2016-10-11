(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarmClockModule = AlarmClock;

function AlarmClock() {

};

var audio = new Audio('https://raw.githubusercontent.com/jsaerom/testing/master/audio/Fetty_Wap_Wake_Up.mp3');
AlarmClock.prototype.alert = function() {

  audio.play();
}

AlarmClock.prototype.stop = function() {
  audio.pause();
}

},{}],2:[function(require,module,exports){
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

},{"./../js/alarmClock.js":1}]},{},[2]);
