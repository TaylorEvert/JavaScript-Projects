function RideFunction() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function ageFunction() {
    var Age, CanVote;
    Age = document.getElementById("Age").value;
    CanVote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = CanVote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("KeyCon").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; 
}

function Family(Age, Car, Job) {
    this.Family_Age = Age;
    this.Family_Car = Car;
    this.Family_Job = Job;
}

var Jescina = new Family(42, "Mazda", "Accountant");
var Jason = new Family(42, "Camero", "Project Manager");
var Hailey = new Family(18, "Chevy", "Student");

function theFunction() {
    document.getElementById("NewThis").innerHTML = 
    "Hailey is " + Hailey.Family_Age + " and drives a " + Hailey.Family_Car + "." + " She is currently a " + Hailey.Family_Job + ".";
}

function nestFunction() {
    document.getElementById("Nested").innerHTML = Numbers();
    function Numbers() {
        var start = 1;
        function add() {start += 1;}
        add();
        return start;
    }
}