"use strict";
exports.__esModule = true;
var kata_temperatures_1 = require("kata-temperatures");
function stringToScale(value) {
    switch (value) {
        case "C":
            return kata_temperatures_1.TemperatureScale.Celsius;
        case "F":
            return kata_temperatures_1.TemperatureScale.Fahrenheit;
        case "K":
            return kata_temperatures_1.TemperatureScale.Kelvin;
        default:
            throw new Error("Temperature scale is not valid");
    }
}
function main() {
    var args = process.argv.splice(2);
    var value = +(args[0]);
    var toScale = args[2];
    if (isNaN(value)) {
        console.error("Temperature value is not valid");
        return;
    }
    try {
        var scale = stringToScale(args[1]);
        var temp = new kata_temperatures_1.Temperature(value, scale);
        switch (toScale) {
            case "C":
                console.log(temp.ToCelsius().ToString());
                break;
            case "F":
                console.log(temp.ToFahrenheit().ToString());
                break;
            case "K":
                console.log(temp.ToKelvin().ToString());
                break;
            default:
                throw new Error("Scale to convert is not valid");
        }
    }
    catch (e) {
        console.error(e.message);
    }
}
main();
