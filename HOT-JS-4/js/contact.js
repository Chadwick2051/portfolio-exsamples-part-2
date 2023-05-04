function sendcontact() {
    event.preventDefault();
   var fname   = document.getElementById("fname").value
   var lname   = document.getElementById("lname").value
   var address = document.getElementById("address").value
   var state   = document.getElementById("state").value
   var zip     = document.getElementById("zip").value
   var email   = document.getElementById("email").value
   const char1 = '@';
   const char2 = '.';

   document.getElementById("error").innerHTML = "";

    if (fname == "")
    {
     message = "Please enter a First Name"
     addToError(message)
    }
    if (lname == "")
    {
     message = "Please enter a Last Name"
     addToError(message)
    }
    if (address == "")
    {
     message = "Please enter a Address"
     addToError(message)
    }
    if (state == "" || state.length !== 2)
    {
     message = "Please enter a valid state abbreviation"
     addToError(message)
    }
    if (isNaN(zip)||zip.length !== 5)
    {
     message = "Please enter a valid ZIP code"
     addToError(message)
    }
    if (email == ""||email.indexOf(char1)==-1||email.indexOf(char2)==-1)
    {
    message = "Invalid Email"
     addToError(message)
    }
    else
    {
        const img = document.createElement('img')
        img.src = '../images/thankYou.png'
        document.getElementById('thanks').appendChild(img)
        document.getElementById("error").style.visibility = "hidden"
    }
}

function addToError(message) {
    document.getElementById("error").style.visibility = "visible"
    let error = message+"<br>"
        document.getElementById("error").innerHTML += error;
}

function clearAll() {
    document.getElementById("error").style.visibility = "hidden"
    document.getElementById("error").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("email").value = "";
    document.getElementById("thanks").style.visibility = "hidden"
    document.getElementById("fname").focus();
}

// function validateEmail(inputText)  (  couldnt get this to work :(  )
// {
// var mailformat =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// var email      = document.getElementById("email").value
// if(email.value.match(mailformat))
// {
// return true;
// }
// else
// {
// return false;
// }
// }