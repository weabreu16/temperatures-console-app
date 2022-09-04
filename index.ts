import { Temperature, TemperatureScale } from "kata-temperatures";

function stringToScale(value: string) {
    switch (value) {
        case "C":
            return TemperatureScale.Celsius;
        case "F":
            return TemperatureScale.Fahrenheit;
        case "K":
            return TemperatureScale.Kelvin;
        default:
            throw new Error("Temperature scale is not valid");
    }
}

function main() {

    const args: string[] = process.argv.splice(2);

    const value: number = +(args[0]);
    const toScale: string = args[2];

    if ( isNaN( value ) ) {
        console.error("Temperature value is not valid");
        return;
    }

    try {
        const scale = stringToScale(args[1]);
        const temp = new Temperature(value, scale);

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
        
    } catch (e) {
        console.error((e as Error).message);
    }
}

main();