function loopFunction() {
    X = 0;
    Num1 = "";
    while (X < 20) {
        Num1 += X;
        X++;
        document.getElementById("Loop").innerHTML = Num1;
    }
}

function lengthFunction() {
    var T = "This is a sentence. "
    var Z = T.length;
    document.getElementById("Length").innerHTML = T + "There are " + Z + " characters in this sentence.";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var I;
function for_Loop() {
    for (I = 0; I < Instruments.length; I++) {
        Content += Instruments[I] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var Hello = ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d", "!"];
var Output = "";
var Z;
function helloFunction() {
    for (Z = 0; Z < Hello.length; Z++) {
        Output += Hello[Z] + " ";
    }
    document.getElementById("HelloWorld").innerHTML = Output;
}

var Array = ["Jacob ", "Ashley ", "Evan ", "Hailey ", "Tre "];
function arrayFunction() {
    document.getElementById("Array").innerHTML = "People Taylor knows: " + Array[0] + Array[1] + Array[2] + Array[3] + Array[4];
}

function constantFunction() {
    const MusicalInstruments = {type:"guitar", brand:"Fender", color:"black"};
    MusicalInstruments.color = "blue";
    MusicalInstruments.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + MusicalInstruments.type + " was " + MusicalInstruments.price;
}

function conFunction() {
    const OpenCar = {type:"Sedan", brand:"Chevy", make:"Cruze", year:"2012"};
    OpenCar.price = "$12000";
    OpenCar.color = "Silver";
    OpenCar.warranty = "N/A";
    document.getElementById("Con").innerHTML = "The " + OpenCar.brand + ", " + OpenCar.make + " is listed at: " + OpenCar.price + ". "
    + "Year: " + OpenCar.year + " Warranty: " + OpenCar.warranty;
}


var O = 18;
document.writeln(O);
{
    let O = 16;
    document.writeln(O);
}
document.writeln(O);

window.onload = function() {
function nameFunction(name) {
    return "Hello, " + name;
}
document.getElementById("Name").innerHTML = nameFunction("Taylor");
}

function carFunction() {
let Car1 = {
    make: "Audi ",
    model: "A3 ",
    year: "2016 ",
    color: "Black ",
    engine: "Boosted Twin Turbo ",
    warranty: "Warranty: Available ",
    description: function() {
    return "More car information: " + this.make + this.model + this.year + this.color + this.engine + this.warranty;
    }
};
document.getElementById("Car").innerHTML = Car1.description();
}

function breakFunction() {
    text = "";
    for (X = 0; X < 15; X++) {
        text += X + " ";
        document.getElementById("Break").innerHTML = text;

    if (X === 10) {
            break;
    }
    }
}

function continueFunction() {
    text = "";
    for (X = 0; X < 20; X++) {
        if (X === 1 || X === 3 || X === 5 || X === 7 || X === 9 || X === 11 || X === 13 || X === 15 || X === 17 || X === 19) {
            continue;
        }
        text += X + " ";
        document.getElementById("Continue").innerHTML = text;
    }
}