var X = 10;
var Y = 15;
var Z = 20;

function numFunction() {
    var T = 5;
    var H = 25;
    console.log(T + H);    
}

function num2Function() {
    console.log(X + Y + Z);
}

numFunction();
num2Function();

function dateFunction() {
    if (new Date().getHours() < 12) {
        document.getElementById("Date").innerHTML = "Good morning!";
    }
    else {
        document.getElementById("Date").innerHTML = "Good afternoon!";
    }
}

function addFunction() {
    var W = 0;
    while (W < 10) {
    if (W == 10) {
        document.getElementById("Add").innerHTML = "Done counting.";
    }
    else {
        W++;
    }
    document.getElementById("Add").innerHTML = W;
}
}

function numbersFunction() {
    var N = document.getElementById("num1").value;
    if (N == 18) {
        document.getElementById("Total").innerHTML = "Your favorite number is 18? Mine too! ";
    }
    else {
        document.getElementById("Total").innerHTML = "Nice, I will be sure to remember that! Mine is 18!";
    }
}

function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("TimeDay").innerHTML = Reply;
}