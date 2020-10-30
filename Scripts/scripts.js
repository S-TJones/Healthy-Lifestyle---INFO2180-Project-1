/* Add your JavaScript to this file */

var driver = function(){
    var first = "Thank you! your email address ";
    var second = " has been added to our mailing list!";

    // Locates the div "message"
    var display = document.getElementsByClassName(message);

    // Adds a onclick event listener to the button
    display.addEventListener("click",function(){

        // Gets the input field
        var email_field = document.getElementsByTagName('input');
        // Gets the data entered in the input field
        var user_mail = email_field.value;

        // Checks to see if no data was entered in the input field
        if(user_mail === ""){
            display.innerHTML = "ERROR";
        }
        else{
            display.innerHTML = (first + user_mail + second);
        }
    });
}

// Runs this function on startup
window.onload = driver;