function attFunction(car) {
    var carType = car.getAttribute("data-car-type");
    alert(carType + " is a popular vehicle made by " + car.innerHTML);
}