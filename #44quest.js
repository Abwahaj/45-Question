function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Camry", color, "Blue", features, ["Sunroof", "Navigation"]);
// Print the car object to check the stored information
console.log(myCar);
