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
