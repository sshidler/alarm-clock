var totalSeconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;

$("#start").on("click", function(){
  setInterval(function(){
    totalSeconds++;
    
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60) % 60;
    hours = Math.floor(totalSeconds/60/60);
    $("#seconds").text(seconds);
    $("#minutes").text(minutes);  
    $("#hours").text(hours);
    
    console.log(totalSeconds);
  },1000)
});

