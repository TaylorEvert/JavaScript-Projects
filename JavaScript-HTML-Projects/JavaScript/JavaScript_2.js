function fnameFunction() {
    var X = document.forms["myForm"]["fname"].value;
    if (X == "") {
        alert("Please enter all information correctly");
        return false;
    }
}

function lnameFunction() {
    var X = document.forms["myForm"]["lname"].value;
    if (X == "") {
        alert("Please enter all information correctly");
        return false;
    }
}

function emailFunction() {
    var X = document.forms["myForm"]["email"].value;
    if (X == "") {
        alert("Please enter all information correctly");
        return false;
    }
}

function zipcodeFunction() {
    var X = document.forms["myForm"]["zipcode"].value;
    if (X == "") {
        alert("Please enter all information correctly");
        return false;
    }
}