function carFunction() {
    var Car_Output;
    var CarChoice = document.getElementById("Car_Input").value;
    var Car_Text = " is a great car company. I personally prefer Audi.";
    var Car_Audi = "I like Audi too!";
    var Car_Mazda = "Hey my mom drives a Mazda!";
    switch(CarChoice) {

        case "Audi": 
            Car_Output = Car_Audi;
        break;

        case "Chevy": 
            Car_Output = "Chevy" + Car_Text;
        break;

        case "Ford":
            Car_Output = "Ford" + Car_Text;
        break;

        case "Mazda":
            Car_Output = Car_Mazda;
        break;

        case "Toyota":
            Car_Output = "Toyota" + Car_Text;
        break;

        case "Dodge":
            Car_Output = "Dodge" + Car_Text;
        break;
        default: Car_Output = "Please enter a car offered on the list above. Answers are case sensetive!"
    }
    document.getElementById("Car_Output").innerHTML = Car_Output;
}

function classFunction() {
    var C = document.getElementsByClassName("cName");

    C[1].innerHTML = "See! I changed like I said I would.";
}

function canvasFunction() {
    var X = document.getElementById("CanvasExample");
    var Draw = X.getContext("2d");

    Draw.beginPath();
    Draw.arc(250, 120, 100, 0, 2 * Math.PI);
    Draw.stroke();
}

function linearFunction() {
    var Y = document.getElementById("GradientExample");
    var Color = Y.getContext("2d");
    var FillGrd = Color.createLinearGradient(0, 0, 300, 0);

    FillGrd.addColorStop(0, "red");
    FillGrd.addColorStop(1, "black");

    Color.fillStyle = FillGrd;
    Color.fillRect(0, 0, 500, 250);
}