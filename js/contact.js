form.addEventListener('submit', (e) => {
    validation();
});

function validation() {
    var firstName, lastName, email, message ;
    
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


(function() {
    
    var checkLength = function() {
        var maxText = 150, msgLength;
         msgLength = document.forms["form"]["textarea"].value;
         if(msgLength.length <= maxText) {
              document.getElementById("textLength").innerHTML = "Max " +(maxText - msgLength.length) + " Characters";
         }
    }
    setInterval(checkLength, 300);
    
}());