(function() {
      
      let checkLength = function() {
          let maxText = 150, msgLength;
           msgLength = document.forms["form"]["textarea"].value;
           if(msgLength.length <= maxText) {
                document.getElementById("textLength").innerHTML = "Max " +(maxText - msgLength.length) + " Characters";
           }
      }
      setInterval(checkLength, 300);
      
}());

  let time = new Date().getHours();

  let greeting;

    if (time > 16) {
     greeting = "Good evening";
    } else if (time > 11) {
     greeting = "Good afternoon";
    } else if (time > 0) {
     greeting = "Good morning";
    } else {
     greeting ="Hello";
    }
    document.getElementById("greeting").innerHTML = greeting; 

     form.addEventListener('submit', (e) => {
          validation();
     });
  
     function validation() {
     let firstName, lastName, email, message ;
      
     firstName = document.forms["form"]["firstName"].value;
     lastName = document.forms["form"]["lastName"].value;
     message = document.forms["form"]["textarea"].value;
     email = document.forms["form"]["email"].value;
          
     if(firstName== null || firstName== "") {
          document.getElementById("formStatus").innerHTML  = "Please enter your first name.";
          form.firstName.focus();
          return false;
     }
  
     if(lastName== null || lastName== "") {
          document.getElementById("formStatus").innerHTML  = "Please enter your last name.";
          form.lastName.focus();
          return false;
     }
     
     if(message== null || message== "") {
          document.getElementById("formStatus").innerHTML  = "Please enter your message.";
          form.textarea.focus();
          return false;
      }
      
     if(email==null || email=="") {
          document.getElementById("formStatus").innerHTML  = "Please enter your email address.";
          form.email.focus();
          return false;
     }
}

     let scroll = new SmoothScroll('a[href*="#"]', {
          speed:800
     });