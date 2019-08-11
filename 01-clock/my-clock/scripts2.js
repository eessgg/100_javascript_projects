(function init(){
  
  var output, time, hr,mins,secs,hours, outputHour, outputMins, outputSecs;
    
  outputHour = document.getElementById('hours');
  outputMins = document.getElementById('minutes');
  outputSecs = document.getElementById('seconds');  
 
   
  function getTime(){
    time = new Date();
    hr = time.getHours();
    mins = time.getMinutes();
    secs = time.getSeconds().toString();

    addZero();
  }
  
  function addZero() {
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;  
    }
    showTime();
  }

  
  function showTime(){
    outputHour.innerHTML = hr;
    outputMins.innerHTML = mins;
    outputSecs.innerHTML = secs;
  };
  setInterval(getTime,1000);


})();