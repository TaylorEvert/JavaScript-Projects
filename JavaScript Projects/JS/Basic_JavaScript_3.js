function addFunction() {
    var addition = 2 + 5;
    document.getElementById("Add").innerHTML = " 2 + 5 = " + addition;
}

function subFunction() {
    var subtraction = 12 - 7;
    document.getElementById("Subtract").innerHTML = " 12 - 7 = " + subtraction;
}

function mulFunction() {
    var multiplication = 5 * 5;
    document.getElementById("Multiply").innerHTML = " 5 * 5 = " + multiplication;
}

function divideFunction() {
    var division = 100 / 15;
    document.getElementById("Divide").innerHTML = " 100 / 15 = " + division;
}

function extraFunction() {
    var extra = (50 * 3) + 15 / (22 - 7);
    document.getElementById("Extra").innerHTML = " (50 x 3) + 15 / (22 - 7) = " + extra;
}

function modFunction() {
    var mod = 100 % 5;
    document.getElementById("Modulus").innerHTML = " 100 / 15 has a remainder of: " + mod;
}

function negFunction() {
    var neg = 15;
    document.getElementById("Negation").innerHTML = -neg + ", This number will display as the opposite of what it's true value actually is.";
}

function incFunction() {
    var inc = 15;
    inc++;
    document.getElementById("Increment").innerHTML = "The original number is: 15. The incremented number is: " + inc;
}

function decFunction() {
    var dec = 28;
    dec--;
    document.getElementById("Dec").innerHTML = "The original number is: 28. The decremented number is: " + dec;
}

function ranFunction() {
    var ran = Math.random() * 150;
    document.getElementById("Random").innerHTML = "Random number between 1 and 150: " + ran;
}

function maxFunction() {
    var max = Math.max(12, 5, 24, 88, 79);
    document.getElementById("Max").innerHTML = "The largest number in the list is: " + max;
}