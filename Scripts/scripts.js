/* Add your JavaScript to this file */

var driver = function(){
    var first = "Thank you! your email address <";
    var second = "> has been added to our mailing list!";

    // Locates the div "message" and button "btn"
    var display = document.getElementsByClassName("message")[0];
    var button = document.getElementsByClassName("btn")[1];

    // Adds a onclick event listener to the button
    button.addEventListener("click", function(event){
        
        // The preventDefault() method cancels the event if it is cancelable, 
        // meaning that the default action that belongs to the event will not occur.
        event.preventDefault();

        // Gets the input field
        var email_field = document.getElementsByTagName("input")[0];
        // Gets the data entered in the input field
        var user_mail = email_field.value;

        // Checks to see if no data was entered in the input field
        if(user_mail === ""){
            display.innerHTML = "ERROR";
        }
        else{
            // Sets the text in the div
            display.innerHTML = (first + user_mail + second);
        }

        
    });
}

// Runs this function on startup
window.onload = driver;
