var totalSeconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    timer;

$("#start").on("click", function(){
  timer = setInterval(function(){
 
    
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60) % 60;
    hours = Math.floor(totalSeconds/60/60);
    $("#seconds").text(seconds);
    $("#minutes").text(minutes);  
    $("#hours").text(hours);
    
    console.log(totalSeconds);
    totalSeconds++;
  },1000)
});

$("#reset").on("click", function(){
  totalSeconds = 0;
});

$("#pause").on("click", function(){
  clearInterval(timer);
});
