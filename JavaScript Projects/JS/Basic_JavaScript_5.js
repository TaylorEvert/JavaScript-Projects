document.write(typeof "Word");
document.write(typeof 4);
document.write(2E310);
document.write(-2E310);
document.write(10 > 3);
document.write(12 > 55);
console.log(2 + 20);
document.write("12" + 55);
console.log(12 < 5);
document.write(18 == 18);
document.write(18 == 17);

W = "10";
X = 10;
Y = 10;
Z = "12";
T = 12;

document.write(X === Y);
document.write(X === Z);
document.write(Z === T);
document.write(W === Z);
document.write(18 > 10 && 12 > 11);
document.write(55 > 12 && 22 > 23);

function wordFunction() {
    document.getElementById("Word").innerHTML = 0/0;
}

function trueFunction() {
    document.getElementById("True").innerHTML = isNaN('This is a word. Display: True');
}

function falseFunction() {
    document.getElementById("False").innerHTML = isNaN('21');
}

function notFunction() {
    document.getElementById("Not").innerHTML = ! (18 < 16);
}

function corFunction() {
    document.getElementById("Correct").innerHTML = ! (18 > 16);
}