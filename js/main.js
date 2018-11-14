var time = document.getElementById("time");

// formats time and date to include 0s if under 10
function formatTime(timeDenom){
  if(timeDenom < 10){
    return "0" + timeDenom;
  } else {
    return timeDenom;
  }
};

// function is used to diplay time live
function showDate() {

    // creates a variable with the the date properties
    var today = new Date();

    // cleans up the format
    var fT = formatTime(today.getHours()) + ":" + formatTime(today.getMinutes()) +
    ":" + formatTime(today.getSeconds());
    var fD = formatTime(today.getDate()) + "/" + formatTime(today.getMonth()+1)
    + "/" + formatTime(today.getFullYear());

    // displays the format in the body
    time.innerHTML = "<h1>Time: " + fT + " Date: " + fD + "</h1>";

    // uses recursion to update every second
    setTimeout(function() {
         showDate();
    }, 1000)

}
showDate();
