$(document).ready(() => {

$("#submit").click(function(){
    event.preventDefault();
   var fname   = $("#fname").val().trim()
   var lname   = $("#lname").val().trim()
   var address = $("#address").val().trim()
   var city    = $("#city").val().trim()
   var zip     = $("#zip").val().trim()
   var phone   = $("#phone").val().trim()
   var email   = $("#email").val().trim()
   const zipPattern   = /(^\d{5}$)|(^\d{5}-\d{4}$)/
   const emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
   const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
   let isValid = true

    if (fname === "")
    {
        $("#fname").next().text("Please enter a First Name")
        isValid = false
    }
    else {$("#fname").next().text("");}
    if (lname === "")
    {
        $("#lname").next().text("Please enter a Last Name")
        isValid = false
    }
    else {$("#lname").next().text("");}
    if (address === "")
    {
        $("#address").next().text("Please enter an address")
        isValid = false
    }
    else {$("#address").next().text("");}
    if (city === "")
    {
        $("#city").next().text("Please enter an city")
        isValid = false
    }
    else {$("#city").next().text("");}
    if (zip === "")
    {
        $("#zip").next().text("Please enter an ZIP Code")
        isValid = false
    }
    else if (!zipPattern.test(zip))
    {
        $("#zip").next().text("Must be a valid ZIP code")
        isValid = false
    }
    else {$("#zip").next().text("");}
    if (phone === "")
    {
        $("#phone").next().text("Please enter an Phone")
        isValid = false
    }
    else if (!phonePattern.test(phone))
    {
        $("#phone").next().text("Must be a valid Phone #")
        isValid = false
    }
    else {$("#phone").next().text("");}
    if (email === "")
    {
        $("#email").next().text("Please enter an Email")
        isValid = false
    }
    else if (!emailPattern.test(email))
    {
        $("#email").next().text("Must be a valid Email")
        isValid = false
    }
    else {$("#email").next().text("");}

    if (isValid)
    {
        $(location).prop('href', 'SUCCESS.html')
    }
})
$('input[type=radio][name=yes]').change(function() {
if ($("#yes").prop("checked")){
    $(".options").show()
}
if ($("#no").prop("checked")){
    $(".options").hide()
}
});


$("#clear").click(function(){
    $("#lname").val("")
    $("#fname").val("")
    $("#address").val("")
    $("#state").val("")
    $("#zip").val("")
    $("#email").val("")
    $("#fname").focus();
})
})