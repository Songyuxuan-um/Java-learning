// Set the date we're counting down to
var countDownDate1 = new Date("April 28, 2022 00:00").getTime();
var countDownDate2 = new Date("April 29, 2022 00:00").getTime();
var countDownDate3 = new Date("April 30, 2022 00:00").getTime();
var countDownDate4 = new Date("April 26, 2022 00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance1 = countDownDate1 - now;
    var distance2 = countDownDate2 - now;
    var distance3 = countDownDate3 - now;
    var distance4 = countDownDate4 - now;

    // Time calculations for days, hours, minutes and seconds
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

    var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timeremain1").innerHTML = days1 + "d " + hours1 + "h " +
        minutes1 + "m " + seconds1 + "s ";

    document.getElementById("timeremain2").innerHTML = days2 + "d " + hours2 + "h " +
        minutes2 + "m " + seconds2 + "s ";

    document.getElementById("timeremain3").innerHTML = days3 + "d " + hours3 + "h " +
        minutes3 + "m " + seconds3 + "s ";

    document.getElementById("timeremain4").innerHTML = days4 + "d " + hours4 + "h " +
        minutes4 + "m " + seconds4 + "s ";

    // If the count down is over, write some text 
    if (distance1 < 0) {
        clearInterval(x);
        document.getElementById("timeremain1").innerHTML = "EXPIRED";
    }

    if (distance2 < 0) {
        clearInterval(x);
        document.getElementById("timeremain2").innerHTML = "EXPIRED";
    }

    if (distance3 < 0) {
      clearInterval(x);
      document.getElementById("timeremain3").innerHTML = "EXPIRED";
  }

    if (distance4 < 0) {
        clearInterval(x);
        document.getElementById("timeremain4").innerHTML = "EXPIRED";
}
}, 1000);


/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
