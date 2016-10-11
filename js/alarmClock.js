exports.alarmClockModule = AlarmClock;

function AlarmClock() {

};

AlarmClock.prototype.alert = function() {
  var audio = new Audio('https://raw.githubusercontent.com/jsaerom/testing/master/audio/Fetty_Wap_Wake_Up.mp3');
  audio.play();
}
