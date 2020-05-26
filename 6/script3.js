

function changeTimer() {
  let inputTime = document.getElementById('cur_time').textContent;

  let time=inputTime.split(':');
   console.log(time[1]);
  if(time[1]==59){
    time[0]++;
    time[1]="00";
    if (time[0]<10) {
        time[0]=`0${time[0]}`;
    }
  }
  else {
    time[1]++;
  }
  if(time[1]<10&&time[1]!=0){
    time[1]=`0${time[1]}`;
  }
    $(".screen").text(`${time[0]}:${time[1]}`);
}
function clearTimer() {
document.getElementById('cur_time').textContent="00:00";
}

$(document).ready(function () {

  let isTimerGo=false;
  let timer;
  $("#btn_go").click(function() {
    isTimerGo=!isTimerGo;
    if(isTimerGo){
      timer=setInterval(changeTimer, 1000);
    }
    else{
      clearInterval(timer);
    }
  });
  $("#btn_reset").click(function (){
    clearTimer();
  });
});
