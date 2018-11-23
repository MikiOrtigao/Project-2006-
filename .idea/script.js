// TEMPERATURA

/**
 * @type {string} - initializes de lastEdited flag to any of the input fields, by  default I choosed one of the unit types for each diferent unit..
 */
var lastEditedTemp = "celsius";  // initialize the lastEdited flag to any of the input fields.
var lastEditedWeight = "kilos";
var lastEditedLength = "meters";
var lastEditedArea = "squaremeters";
var lastEditedVolume = "cubicMeter";
var lastEditedNumber = "decimal";

/**
 * Button listeners - what will happen when the user clicks on page buttons
 * @type {convert} it will send the input to get the converted results on mouse click
 * @type {reset} it will reset the input and results on mouse click
 */
//document.getElementById("submit").onclick = convert;
//document.getElementById("reset").onclick = reset;

//picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
function celsiusChanged() {
    lastEditedTemp = "celsius";
}

function fahrenheitChanged() {
    lastEditedTemp = "fahrenheit";
}

function kelvinChanged () {
    lastEditedTemp = "kelvin";
}

//WEIGHT
function kilosChanged () {
    lastEditedWeight = "kilos";
}
function gramsChanged () {
    lastEditedWeight = "grams";
}
function poundsChanged() {
    lastEditedWeight = "pounds";
}
function ouncesChanged() {
    lastEditedWeight = "ounces";
}
function stonesChanged () {
    lastEditedWeight = "stones";
}
//LENGHT
function metersChanged () {
    lastEditedLength = "meters";
}
function kilometersChanged() {
    lastEditedLength = "kilometers";
}

function centimetersChanged() {
    lastEditedLength = "centimeters";
}
function feetChanged () {
    lastEditedLength = "feet";
}
function inchesChanged() {
    lastEditedLength = "inches";
}
function milesChanged() {
    lastEditedLength = "miles";
}
function yardsChanged() {
    lastEditedLength = "yards";
}

//AREA
function squaremetersChanged () {
    lastEditedArea = "squaremeters";
}
function squarekilometersChanged () {
    lastEditedArea = "squarekilometers";
}
function squarecentimetersChanged() {
    lastEditedArea = "squarecentimeters";
}
function squarefeetChanged () {
    lastEditedArea = "squarefeet";
}
function squareinchesChanged () {
    lastEditedArea = "squareinches";
}
function squaremilesChanged () {
    lastEditedArea = "squaremiles";
}
function squareyardsChanged() {
    lastEditedArea = "squareyards";
}
function hectareChanged() {
    lastEditedArea = "hectare";
}
//Volume
function cubicMeterChanged() {
    lastEditedVolume = "cubicMeter";
}
function cubicDecimeterAndLiterChanged() {
    lastEditedVolume = "cubicDecimeterAndLiter";
}
function cubicCentimeterAndMilliliterChanged() {
    lastEditedVolume = "cubicCentimeterAndMilliliter";
}
function gallonChanged() {
    lastEditedVolume = "gallon";
}
function megaliterChanged() {
    lastEditedVolume = "megaliter";
}
function cubicInchChanged() {
    lastEditedVolume = "cubicInch";
}
function tablespoonChanged() {
    lastEditedVolume = "tablespoon";
}
function teaspoonChanged() {
    lastEditedVolume = "teaspoon";
}
//Number
function decimalChanged() {
    lastEditedNumber = "decimal";
}
function binaryChanged() {
    lastEditedNumber = "binary";
}
function hexadecimalChanged() {
    lastEditedNumber = "hexadecimal";
}
function octalChanged() {
    lastEditedNumber = "octal";
}
/**
 * Converts Temperature - Unit values used: Celsius, Fahrenheit and Kelvin
 */
function convertTemperature() {

    //initialize local variables
    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    var celsius = document.getElementById("celsius").value;
    celsius = parseFloat(celsius);

    var fahrenheit = document.getElementById("fahrenheit").value;
    fahrenheit = parseFloat(fahrenheit);

    var kelvin = document.getElementById("kelvin").value;
    kelvin = parseFloat(kelvin);

    //temperature values, will be our "return" value after the method
    var conversionC;
    var conversionF;
    var conversionK;

    //if the celsius field changes, convert the fahrenheit and kelvin values
    if (lastEditedTemp === "celsius") {
        conversionF = celsius * 9 / 5 + 32;
        conversionK = celsius + 273;
        //round the converted fahrenheit and kelvin values
        document.getElementById("fahrenheit").value = Math.round(conversionF);
        document.getElementById("kelvin").value = Math.round(conversionK);
    }
    //if the fahrenheit field changes, convert the celsius and kelvin values
    else if (lastEditedTemp === "fahrenheit") {
        conversionC = (fahrenheit - 32) * 5 / 9;
        conversionK = conversionC + 273;
        //round the converted celsius and kelvin values
        document.getElementById("celsius").value = Math.round(conversionC);
        document.getElementById("kelvin").value = Math.round(conversionK);
    }
    //if the kelvin field changes, convert the celsius and fahrenheit values
    else if (lastEditedTemp === "kelvin") {
        conversionC = kelvin - 273;
        conversionF = conversionC * 9 / 5 + 32;
        //round the converted celsius and fahrenheit values
        document.getElementById("celsius").value = Math.round(conversionC);
        document.getElementById("fahrenheit").value = Math.round(conversionF);
    }

    /**
     * get the current conversion temperature values and store them in the input fields
     */
    document.getElementById("celsius").innerHTML = conversionC;
    document.getElementById("fahrenheit").innerHTML = conversionF;
    document.getElementById("kelvin").innerHTML = conversionK;
}

/**
 * Converts Weight - Unit values used: Kilograms, Grams, Pounds, Ounces and Stones
 */
function convertWeight() {

    //initialize local variables
    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    var kilos = document.getElementById("kilos").value;
    kilos = parseFloat(kilos);

    var grams = document.getElementById("grams").value;
    grams = parseFloat(grams);

    var pounds = document.getElementById("pounds").value;
    pounds = parseFloat(pounds);

    var ounces = document.getElementById("ounces").value;
    ounces = parseFloat(ounces);

    var stones = document.getElementById("stones").value;
    stones = parseFloat(stones);

    //weight values
    var conversionKilos;
    var conversionGrams;
    var conversionPounds;
    var conversionOunces;
    var conversionStones;

    //if the kilos field changes, convert the grams, pounds, ouces and stone values;
    if (lastEditedWeight === "kilos") {
        conversionGrams = kilos * 1000;
        conversionPounds = kilos * 2.2046;
        conversionOunces = kilos * 35.274;
        conversionStones = kilos * 0.15747;
        //round the converted weight values
        document.getElementById("grams").value = Math.round(conversionGrams);
        document.getElementById("pounds").value = Math.round(conversionPounds);
        document.getElementById("ounces").value = Math.round(conversionOunces);
        document.getElementById("stones").value = Math.round(conversionStones);
    }
//if the grams field changes, convert the kilos, pounds, ouces and stone values;
    else if (lastEditedWeight === "grams") {
        conversionKilos = grams / 1000;
        conversionPounds = grams / 453.59237;
        conversionOunces = grams / 28.34952;
        conversionStones = grams * 0.00015747;
        //round the converted weight values
        document.getElementById("kilos").value = Math.round(conversionKilos);
        document.getElementById("pounds").value = Math.round(conversionPounds);
        document.getElementById("ounces").value = Math.round(conversionOunces);
        document.getElementById("stones").value = Math.round(conversionStones);
    }
//if the pounds field changes, convert the kilos, grams, ouces and stone values;
    else if (lastEditedWeight === "pounds") {
        conversionKilos = pounds / 2.2046;
        conversionGrams = pounds * 453.59237;
        conversionOunces = pounds * 16;
        conversionStones = pounds * 0.071429;
        //round the converted weight values
        document.getElementById("kilos").value = Math.round(conversionKilos);
        document.getElementById("grams").value = Math.round(conversionGrams);
        document.getElementById("ounces").value = Math.round(conversionOunces);
        document.getElementById("stones").value = Math.round(conversionStones);
    }
//if the ounces field changes, convert the kilos, grams, pounds and stone values;
    else if (lastEditedWeight === "ounces") {
        conversionKilos = ounces * 0.02834952;
        conversionGrams = ounces * 28.34952;
        conversionPounds = ounces / 16;
        conversionStones = ounces* 0.0044643;
        document.getElementById("kilos").value = Math.round(conversionKilos);
        document.getElementById("grams").value = Math.round(conversionGrams);
        document.getElementById("pounds").value = Math.round(conversionPounds);
        document.getElementById("stones").value = Math.round(conversionStones);
        //round the converted weight values
    }
    else if (lastEditedWeight==="stones"){
        conversionKilos = stones/ 0.15747;
        conversionGrams = stones/0.00015747;
        conversionPounds= stones*14.000;
        conversionOunces = stones*224.00;
        document.getElementById("kilos").value = Math.round(conversionKilos);
        document.getElementById("grams").value = Math.round(conversionGrams);
        document.getElementById("pounds").value = Math.round(conversionPounds);
        document.getElementById("ounces").value = Math.round(conversionOunces);
    }
    /**
     * get the current conversion weight values and store them in the input fields
     */
    document.getElementById("kilos").innerHTML = conversionKilos;
    document.getElementById("grams").innerHTML = conversionGrams;
    document.getElementById("pounds").innerHTML = conversionPounds;
    document.getElementById("ounces").innerHTML = conversionOunces;
    document.getElementById("stones").innerHTML = conversionStones;
}

function convertLength() {

    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    var meters = document.getElementById("meters").value;
    meters = parseFloat(meters);
    var kilometers = document.getElementById("kilometers").value;
    kilometers = parseFloat(kilometers);
    var centimeters = document.getElementById("centimeters").value;
    centimeters = parseFloat(centimeters);
    var feet = document.getElementById("feet").value;
    feet = parseFloat(feet);
    var inches = document.getElementById("inches").value;
    inches = parseFloat(inches);
    var miles = document.getElementById("miles").value;
    miles = parseFloat(miles);
    var yards = document.getElementById("yards").value;
    yards = parseFloat(yards);

    //length values, will be our "return" value after the method
    var conversionM;
    var conversionK;
    var conversionC;
    var conversionF;
    var conversionI;
    var conversionMi;
    var conversionY;

    if (lastEditedLength === "meters") {
        conversionK = meters * 1000;
        conversionC = meters / 100;
        conversionF = meters * 0.3048;
        conversionI = meters * 0.0254;
        conversionMi = meters * 1609.344;
        conversionY = meters * 0.9144;

        document.getElementById("kilometers").value = conversionK;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("feet").value = conversionF;
        document.getElementById("inches").value = conversionI;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "centimeters") {
        conversionM = centimeters * 100;
        conversionK = centimeters * 100000;
        conversionF = centimeters * 30.48;
        conversionI = centimeters * 2.54;
        conversionMi = centimeters * 160934.4;
        conversionY = centimeters * 91.44;

        document.getElementById("meters").value = conversionM;
        document.getElementById("kilometers").value = conversionK;
        document.getElementById("feet").value = conversionF;
        document.getElementById("inches").value = conversionI;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "feet") {
        conversionM = feet * 3.280839895;
        conversionK = feet * 3280.839895;
        conversionC = feet * 0.032808399;
        conversionI = feet * 0.0833333333;
        conversionMi = feet * 5280;
        conversionY = feet * 3;

        document.getElementById("meters").value = conversionM;
        document.getElementById("kilometers").value = conversionK;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("inches").value = conversionI;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "inches") {
        conversionM = inches * 39.37007874;
        conversionK = inches * 39370.07874;
        conversionC = inches * 0.3937007874;
        conversionF = inches * 12;
        conversionMi = inches * 63360;
        conversionY = inches * 36;

        document.getElementById("meters").value = conversionM;
        document.getElementById("kilometers").value = conversionK;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("feet").value = conversionF;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "miles") {
        conversionM = miles * 1609.344;
        conversionK = miles * 1.609344;
        conversionC = miles * 160934.4;
        conversionF = miles * 5280;
        conversionI = miles * 63360;
        conversionY = miles * 1760;

        document.getElementById("meters").value = conversionM;
        document.getElementById("kilometers").value = conversionK;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("feet").value = conversionF;
        document.getElementById("inches").value = conversionI;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "kilometers") {
        conversionM = kilometers * 1000;
        conversionMi = kilometers * 0.6213711922;
        conversionC = kilometers * 100000;
        conversionF = kilometers * 3280.839895;
        conversionI = kilometers * 39370.07874;
        conversionY = kilometers * 1093.6132983;

        document.getElementById("meters").value = conversionM;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("feet").value = conversionF;
        document.getElementById("inches").value = conversionI;
        document.getElementById("yards").value = conversionY;
    }
    else if (lastEditedLength === "yards") {
        conversionM = yards * 0.9144;
        conversionMi = yards * 0.0005681818;
        conversionC = yards * 91.44;
        conversionF = yards * 3;
        conversionI = yards * 36;
        conversionK = yards * 0.0009144;

        document.getElementById("meters").value = conversionM;
        document.getElementById("miles").value = conversionMi;
        document.getElementById("centimeters").value = conversionC;
        document.getElementById("feet").value = conversionF;
        document.getElementById("inches").value = conversionI;
        document.getElementById("kilometers").value = conversionK;
    }

    document.getElementById("meters").innerHTML = conversionM;
    document.getElementById("kilometers").innerHTML = conversionK;
    document.getElementById("centimeters").innerHTML = conversionC;
    document.getElementById("miles").innerHTML = conversionMi;
    document.getElementById("yards").innerHTML = conversionY;
    document.getElementById("inches").innerHTML = conversionI;
    document.getElementById("feet").innerHTML = conversionF;
}

function convertArea() {

    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    var squaremeters = document.getElementById("squaremeters").value;
    squaremeters = parseFloat(squaremeters);
    var squarekilometers = document.getElementById("squarekilometers").value;
    squarekilometers = parseFloat(squarekilometers);
    var squarecentimeters = document.getElementById("squarecentimeters").value;
    squarecentimeters = parseFloat(squarecentimeters);
    var squarefeet = document.getElementById("squarefeet").value;
    squarefeet = parseFloat(squarefeet);
    var squareinches = document.getElementById("squareinches").value;
    squareinches = parseFloat(squareinches);
    var squaremiles = document.getElementById("squaremiles").value;
    squaremiles = parseFloat(squaremiles);
    var squareyards = document.getElementById("squareyards").value;
    squareyards = parseFloat(squareyards);
    var hectare = document.getElementById("hectare").value;
    hectare = parseFloat(hectare);

    //length values, will be our "return" value after the method
    var conversionM2;
    var conversionK2;
    var conversionC2;
    var conversionF2;
    var conversionI2;
    var conversionMi2;
    var conversionY2;
    var conversionH;

    if (lastEditedArea === "squaremeters") {
        conversionK2 = squaremeters * 0.000001;
        conversionC2 = squaremeters * 10000;
        conversionF2 = squaremeters * 10.763910417;
        conversionI2 = squaremeters * 1550.0031;
        conversionMi2 = squaremeters * 0.0000003861018768;
        conversionY2 = squaremeters * 1.1959900463;
        conversionH = squaremeters * 0.0001;

        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squarecentimeters") {
        conversionK2 = squarecentimeters * 0.0000000001;
        conversionM2 = squarecentimeters * 0.0001;
        conversionF2 = squarecentimeters * 0.001076391;
        conversionI2 = squarecentimeters * 0.15500031;
        conversionMi2 = squarecentimeters * 0.00000000003861018768;
        conversionY2 = squarecentimeters * 0.000119599;
        conversionH = squarecentimeters * 0.00000001;

        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squarefeet") {
        conversionM2 = squarefeet * 0.09290304;
        conversionK2 = squarefeet * 0.00000009290304;
        conversionC2 = squarefeet * 929.0304;
        conversionI2 = squarefeet * 144;
        conversionMi2 = squarefeet * 0.0000000358700381;
        conversionY2 = squarefeet * 0.1111111111;
        conversionH = squarefeet * 0.0000092903;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squareinches") {
        conversionM2 = squareinches * 0.00064516;
        conversionK2 = squareinches * 0.00000000064516;
        conversionC2 = squareinches * 6.4516;
        conversionF2 = squareinches * 0.0069444444;
        conversionMi2 = squareinches * 0.0000000002490974868;
        conversionY2 = squareinches * 0.0007716049;
        conversionH = squareinches * 0.000000064516;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squaremiles") {
        conversionM2 = squaremiles * 2589990;
        conversionK2 = squaremiles * 2.58999;
        conversionC2 = squaremiles * 25899900000;
        conversionF2 = squaremiles * 27878420.34;
        conversionI2 = squaremiles * 4014492529;
        conversionY2 = squaremiles * 3097602.26;
        conversionH = squaremiles * 258.999;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squarekilometers") {
        conversionM2 = squarekilometers * 1000000;
        conversionMi2 = squarekilometers * 0.3861018768;
        conversionC2 = squarekilometers * 10000000000;
        conversionF2 = squarekilometers * 10763910.417;
        conversionI2 = squarekilometers * 1550003100;
        conversionY2 = squarekilometers * 1195990.0463;
        conversionH = squarekilometers * 100;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squareyards").value = conversionY2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "squareyards") {
        conversionM2 = squareyards * 0.83612736;
        conversionMi2 = squareyards * 0.0000003228303429;
        conversionC2 = squareyards * 8361.2736;
        conversionF2 = squareyards * 9;
        conversionI2 = squareyards * 1296;
        conversionK2 = squareyards * 0.00000083612736;
        conversionH = squareyards * 0.0000836127;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("hectare").value = conversionH;
    }
    else if (lastEditedArea === "hectare") {
        conversionM2 = hectare * 10000;
        conversionMi2 = hectare * 0.0038610188;
        conversionC2 = hectare * 100000000;
        conversionF2 = hectare * 107639.10417;
        conversionI2 = hectare * 15500031;
        conversionK2 = hectare * 0.01;
        conversionY2 = hectare * 11959.900463;

        document.getElementById("squaremeters").value = conversionM2;
        document.getElementById("squaremiles").value = conversionMi2;
        document.getElementById("squarecentimeters").value = conversionC2;
        document.getElementById("squarefeet").value = conversionF2;
        document.getElementById("squareinches").value = conversionI2;
        document.getElementById("squarekilometers").value = conversionK2;
        document.getElementById("squareyards").value = conversionY2;
    }

    document.getElementById("squaremeters").innerHTML = conversionM2;
    document.getElementById("squarekilometers").innerHTML = conversionK2;
    document.getElementById("squarecentimeters").innerHTML = conversionC2;
    document.getElementById("squaremiles").innerHTML = conversionMi2;
    document.getElementById("squareyards").innerHTML = conversionY2;
    document.getElementById("squareinches").innerHTML = conversionI2;
    document.getElementById("squarefeet").innerHTML = conversionF2;
    document.getElementById("hectare").innerHTML = conversionH;
}
function convertVolume() {

    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    var cubicMeter = document.getElementById("cubicMeter").value;
    cubicMeter = parseFloat(cubicMeter);
    var cubicDecimeterAndLiter = document.getElementById("cubicDecimeterAndLiter").value;
    cubicDecimeterAndLiter = parseFloat(cubicDecimeterAndLiter);
    var cubicCentimeterAndMilliliter = document.getElementById("cubicCentimeterAndMilliliter").value;
    cubicCentimeterAndMilliliter = parseFloat(cubicCentimeterAndMilliliter);
    var gallon = document.getElementById("gallon").value;
    gallon = parseFloat(gallon);
    var megaliter = document.getElementById("megaliter").value;
    megaliter = parseFloat(megaliter);
    var cubicInch = document.getElementById("cubicInch").value;
    cubicInch = parseFloat(cubicInch);
    var tablespoon = document.getElementById("tablespoon").value;
    tablespoon = parseFloat(tablespoon);
    var teaspoon = document.getElementById("teaspoon").value;
    teaspoon = parseFloat(teaspoon);

    //length values, will be our "return" value after the method
    var conversionM3;
    var conversionD3AndL;
    var conversionC3AndMl;
    var conversionGl;
    var conversionMgL;
    var conversionIN3;
    var conversionTbS;
    var conversionTeaS;

    if (lastEditedVolume === "cubicMeter") {
        conversionD3AndL = cubicMeter * 1000;
        conversionC3AndMl = cubicMeter * 1000000;
        conversionGl = cubicMeter * 264.172052;
        conversionMgL = cubicMeter * 0.001;
        conversionIN3 = cubicMeter * 61023.7441;
        conversionTbS = cubicMeter * 67628.0454;
        conversionTeaS = cubicMeter * 202884.136;

        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "cubicCentimeterAndMilliliter") {
        conversionD3AndL = cubicCentimeterAndMilliliter * 0.001;
        conversionM3 = cubicCentimeterAndMilliliter * 0.000001;
        conversionGl = cubicCentimeterAndMilliliter * 0.000264172052;
        conversionMgL = cubicCentimeterAndMilliliter * 0.000000001;
        conversionIN3 = cubicCentimeterAndMilliliter * 0.0610237441;
        conversionTbS = cubicCentimeterAndMilliliter * 0.0676280454;
        conversionTeaS = cubicCentimeterAndMilliliter * 0.202884136;

        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "gallon") {
        conversionM3 = gallon * 0.00378541178;
        conversionD3AndL = gallon * 3.78541178;
        conversionC3AndMl = gallon * 3785.41178;
        conversionMgL = gallon * (3.78541178 * 0.000001);
        conversionIN3 = gallon * 231;
        conversionTbS = gallon * 256;
        conversionTeaS = gallon * 768;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "megaliter") {
        conversionM3 = megaliter * 1000;
        conversionD3AndL = megaliter * 1000000;
        conversionC3AndMl = megaliter * 1000000000;
        conversionGl = megaliter * 264172.052;
        conversionIN3 = megaliter * 61023744.1;
        conversionTbS = megaliter * 67628045.4;
        conversionTeaS = megaliter * 202884136;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "cubicInch") {
        conversionM3 = cubicInch * 1.6387064 * 0.00002;
        conversionD3AndL = cubicInch * 2.58999;
        conversionC3AndMl = cubicInch * 0.016387064;
        conversionGl = cubicInch * 0.00432900433;
        conversionMgL = cubicInch * 1.6387064 * 0.00000001;
        conversionTbS = cubicInch * 1.10822511;
        conversionTeaS = cubicInch * 3.32467532;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "tablespoon") {
        conversionM3 = tablespoon * 1.47867648 * 0.00001;
        conversionIN3 = tablespoon * 0.90234375;
        conversionC3AndMl = tablespoon * 14.7867648;
        conversionGl = tablespoon * 0.00390625;
        conversionMgL = tablespoon * 1.47867648 * 0.00000001;
        conversionD3AndL = tablespoon * 0.014786764;
        conversionTeaS = tablespoon * 3;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedVolume === "teaspoon") {
        conversionM3 = teaspoon * 4.92892159 * 0.000001;
        conversionIN3 = teaspoon * 0.30078125;
        conversionC3AndMl = teaspoon * 4.92892159;
        conversionGl = teaspoon * 0.00130208333;
        conversionMgL = teaspoon * 4.92892159 * 0.000000001;
        conversionD3AndL = teaspoon * 0.00492892159;
        conversionTbS = teaspoon * 0.333333333;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("tablespoon").value = conversionTbS;
    }

    document.getElementById("cubicMeter").innerHTML = conversionM3;
    document.getElementById("cubicDecimeterAndLiter").innerHTML = conversionD3AndL;
    document.getElementById("cubicCentimeterAndMilliliter").innerHTML = conversionC3AndMl;
    document.getElementById("cubicInch").innerHTML = conversionIN3;
    document.getElementById("megaliter").innerHTML = conversionMgL;
    document.getElementById("gallon").innerHTML = conversionGl;
    document.getElementById("teaspoon").innerHTML = conversionTeaS;
    document.getElementById("tablespoon").innerHTML = conversionTbS;
}

function convertNumber() {

    //initialize local variables
    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    var decimal = document.getElementById("decimal").value;
    decimal = parseFloat(decimal);

    var binary = document.getElementById("binary").value;
    binary = parseFloat(binary);

    var hexadecimal = document.getElementById("hexadecimal").value;
    hexadecimal = parseFloat(hexadecimal);

    var octal = document.getElementById("octal").value;
    octal = parseFloat(octal);

    //number values, will be our "return" value after the method
    var conversionDc;
    var conversionBn;
    var conversionHx;
    var conversionOc;
    var str;

    if (lastEditedNumber === "decimal") {
        str = "decimal";
        conversionBn = (+str).toString(2);
        conversionHx = (+str).toString(16);
        conversionOc = (+str).toString(8);
    }
    else if (lastEditedNumber === "binary") {
        str = "binary";
        conversionDc = parseInt(+str, 2).toString(10);
        conversionHx = parseInt(+str, 2).toString(16);
        conversionOc = parseInt(+str, 2).toString(8);
    }
    else if (llastEditedNumber === "hexadecimal") {
        str = "hexadecimal";
        conversionDc = parseInt(+str, 16).toString(10);
        conversionBn = parseInt(+str, 16).toString(2);
        conversionOc = parseInt(+str, 16).toString(8);
    }
    else if (lastEditedNumber === "octal") {
        str = "octal";
        conversionDc = parseInt(+str, 8).toString(10);
        conversionBn = parseInt(+str, 8).toString(2);
        conversionHx = parseInt(+str, 8).toString(16);
    }

    /**
     * get the current conversion number values and store them in the input fields
     */

    document.getElementById("decimal").innerHTML = conversionDc;
    document.getElementById("binary").innerHTML = conversionBn;
    document.getElementById("octal").innerHTML = conversionOc;
    document.getElementById("hexadecimal").innerHTML = conversionHx;
}
/**
 * reset temperature values
 */
function resetTemp() {
    document.getElementById("celsius").value = 0;
    document.getElementById("fahrenheit").value = 0;
    document.getElementById("kelvin").value = 0;
}

/**
 * reset weight values
 */
function resetWeight() {
    document.getElementById("kilos").value = 0;
    document.getElementById("grams").value = 0;
    document.getElementById("pounds").value = 0;
    document.getElementById("ounces").value = 0;
    document.getElementById("stones").value = 0;
}

function resetLength() {
    document.getElementById("meters").value = 0;
    document.getElementById("kilometers").value = 0;
    document.getElementById("centimeters").value = 0;
    document.getElementById("miles").value = 0;
    document.getElementById("yards").value = 0;
    document.getElementById("inches").value = 0;
    document.getElementById("feet").value = 0;
}

function resetArea() {
    document.getElementById("squaremeters").value = 0;
    document.getElementById("squarekilometers").value = 0;
    document.getElementById("squarecentimeters").value = 0;
    document.getElementById("squaremiles").value = 0;
    document.getElementById("squareyards").value = 0;
    document.getElementById("squareinches").value = 0;
    document.getElementById("squarefeet").value = 0;
    document.getElementById("hectare").value = 0;
}

function resetVolume() {
    document.getElementById("cubicMeter").value = 0;
    document.getElementById("cubicDecimeterAndLiter").value = 0;
    document.getElementById("cubicCentimeterAndMilliliter").value = 0;
    document.getElementById("megaliter").value = 0;
    document.getElementById("cubicInch").value = 0;
    document.getElementById("tablespoon").value = 0;
    document.getElementById("teaspoon").value = 0;
    document.getElementById("gallon").value = 0;
}

function resetNumber() {
    document.getElementById("decimal").value = 0;
    document.getElementById("binary").value = 0;
    document.getElementById("octal").value = 0;
    document.getElementById("hexadecimal").value = 0;
}
