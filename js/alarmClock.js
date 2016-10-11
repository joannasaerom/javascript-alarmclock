exports.alarmClockModule = AlarmClock;

function AlarmClock() {

};

AlarmClock.prototype.alert = function() {
  var audio = new Audio('https://raw.githubusercontent.com/grantsrb/snake/master/audio/castlevania-game-over.mp3');
  audio.play();
}
