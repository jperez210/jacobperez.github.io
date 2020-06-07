
    var time = new Date().getHours();
    var greeting;
    if (time > 18) {
      greeting = "Good evening";
    } else if (time > 12) {
      greeting = "Good afternoon";
    } else if (time > 0) {
      greeting = "Good morning";
    } else {
      greeting ="Welcome";
    }
    document.getElementById("greeting").innerHTML = greeting;
  