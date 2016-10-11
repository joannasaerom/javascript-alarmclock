(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarmClockModule = AlarmClock;

function AlarmClock() {

};

AlarmClock.prototype.alert = function() {
  var audio = new Audio('https://raw.githubusercontent.com/jsaerom/testing/master/audio/Fetty_Wap_Wake_Up.mp3');
  audio.play();
}

},{}],2:[function(require,module,exports){
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

},{"./../js/alarmClock.js":1}]},{},[2]);
