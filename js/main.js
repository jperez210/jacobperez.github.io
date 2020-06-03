function myFunction() {
    var time = new Date().getHours();
    var greeting;
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting ="Good evening";
    }
  document.getElementById("demo").innerHTML = greeting;
  }