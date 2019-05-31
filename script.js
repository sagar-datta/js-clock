// function to get the current time and display it
var currentTime = function()
{
    // show clock on html
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "PM";
 
    // hrs
	  if (hours <= 12)
	  {
		  meridian = "AM";
	  }

	  if (hours > 12)
	  {
		  hours = hours - 12;
	  }
 
    // mins
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // format string
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + " \nヘ( ^o^)ノ＼(^_^ )ヘ";
 
    clock.innerText = clockTime;
};

// increment clock every second
setInterval( currentTime, 1000);
