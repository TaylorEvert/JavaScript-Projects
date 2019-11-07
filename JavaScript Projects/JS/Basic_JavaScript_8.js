function catFunction() {
    var p1 = "My mom, ";
    var p2 = "is the best ";
    var p3 = "mom ever! ";
    var p4 = "You can even ask me!";
    var together = p1.concat(p2, p3, p4);
    document.getElementById("ConCat").innerHTML = together;
}

function sliceFunction() {
    var Sen = "This is a sentence. It is being used to demonstrate the slice method";
    var Sli = Sen.slice(55, 61);
    document.getElementById("Slice").innerHTML = Sli;
}

function searchFunction() {
    var sentence = "This is a sentence for the search method."
    var search = sentence.search("search method");
    document.getElementById("Search").innerHTML = search;
}

function upperFunction() {
    var upper = "This sentence is used to demonstrate the upperCase method."
    document.getElementById("Upper").innerHTML = upper.toUpperCase();
}

function stringFunction() {
    X = 10;
    document.getElementById("String").innerHTML = X.toString();
}

function preFunction() {
    Y = 1518644321.684845;
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);
}

function fixFunction() {
    var F = 15.2323;
    var whole = F.toFixed();
    document.getElementById("Fixed").innerHTML = whole;
}

function valFunction() {
    var food = ["Salad", "Soup", "Steak", "Lobster"];
    document.getElementById("Value").innerHTML = food.valueOf();
}