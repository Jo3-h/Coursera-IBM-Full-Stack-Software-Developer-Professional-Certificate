function temperature() {

    // get value inputed into celsius field
    var celsius = document.getElementById("c");

    // check for valid input
    if (celsius.value == ""){
        alert("Please Enter Valid Temperature in Calsius")
        celsius.focus();
        return false;
    }

    // if input is valid set innerhtml of fahrenheit field
    var fahrenheit = (celsius.value*9/5)+32;
    document.getElementById("f").value = fahrenheit;
    return true;

}

function weight() {

    // get value input to kilo field
    var kilo = document.getElementById("kilo");

    // check for valid input
    if (kilo.value == ""){
        alert("Please Enter Valid Weight in Kilogrmas");
        kilo.focus();
        return false;
    }

    // if input is valid, set innerhtml of pounds field
    var pounds = kilo.value * 2.205;
    document.getElementById("pnd").value = pounds;
    return true;

}

function distance() {

    // get value input to kilometers field
    var kilometers = document.getElementById("kms");

    // check for valid input
    if (kilometers.value == ""){
        alert("Please Enter Valid Distance in Kilometers");
        kilometers.focus()
        return false
    }

    // if input is valid, set innerhtml of miles field
    var miles = kilometers.value / 1.609;
    document.getElementById("mls").value = miles;
    return true;

}