function getReceipt() {
    // initalizes string to grow as it goes along to the full result
    var text1 = "<h3>You Ordered: </h3>"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Kid Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for ( var t = 0; t < toppingArray.length; t++) {
        if (toppingArray[t].checked) {
            selectedTopping.push(toppingArray[t].value);
            console.log("selected topping item: (" + toppingArray[t].value + ")");
            text1 = text1 + toppingArray[t].value + "<br>";
        } 
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log("topping count: " + toppingCount + " - 1st topping free = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("purchase total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong> $" + runningTotal + ".00 </strong></h3>";
}