/**
 * Defines global constants (do not change value) for Ids
 * To be used in all of the code.
 * Convention suggest constant values are written in uppercase and with underscores
 * Ex: Instead of using "celsius", CELSIUS_ID shall be used. It prevents from typos
 * @type {string}
 */

const CELSIUS_ID = "celsius"
const FAHRENHEIT_ID = "fahrenheit"
const KELVIN_ID = "kelvin"
const KILOS_ID = "kilos"
const GRAMS_ID = "grams"
const POUNDS_ID = "pounds"
const OUNCES_ID = "ounces"
const STONES_ID = "stones"
const METERS_ID = "meters"
const CENTIMETERS_ID = "centimeters"
const KILOMETERS_ID = "kilometers"
const FEET_ID = "feet"
const INCHES_ID = "inches"
const MILES_ID = "miles"
const YARDS_ID = "yards"
const SQUAREMETERS_ID = "squaremeters"
const SQUARECENTIMETERS_ID = "squarecentimeters"
const SQUAREKILOMETERS_ID = "squarekilometers"
const SQUAREFEET_ID = "squarefeet"
const SQUAREINCHES_ID = "squareinches"
const SQUAREMILES_ID = "squaremiles"
const SQUAREYARDS_ID = "squareyards"
const HECTARE_ID = "hectare"

/**
 * @type {string} - initializes de lastEdited flag to any of the input fields, by  default I choosed one of the unit types for each diferent unit..
 */
var lastEditedTemp = CELSIUS_ID;
var lastEditedWeight = KILOS_ID;
var lastEditedLength = METERS_ID;
var lastEditedArea = SQUAREMETERS_ID;
var lastEditedVolume = CUBICMETER_ID;
var lastEditedNumber = DECIMAL_ID;

/**
 * picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
 */
//TEMPERATURE
function celsiusChanged() {
    lastEditedTemp = CELSIUS_ID;
}

function fahrenheitChanged() {
    lastEditedTemp = FAHRENHEIT_ID;
}

function kelvinChanged() {
    lastEditedTemp = KELVIN_ID;
}

//WEIGHT
function kilosChanged() {
    lastEditedWeight = KILOS_ID;
}

function gramsChanged() {
    lastEditedWeight = GRAMS_ID;
}

function poundsChanged() {
    lastEditedWeight = POUNDS_ID;
}

function ouncesChanged() {
    lastEditedWeight = OUNCES_ID;
}

function stonesChanged() {
    lastEditedWeight = STONES_ID;
}

//LENGHT
function metersChanged() {
    lastEditedLength = METERS_ID;
}

function kilometersChanged() {
    lastEditedLength = KILOMETERS_ID;
}

function centimetersChanged() {
    lastEditedLength = CENTIMETERS_ID;
}

function feetChanged() {
    lastEditedLength = FEET_ID;
}

function inchesChanged() {
    lastEditedLength = INCHES_ID;
}

function milesChanged() {
    lastEditedLength = MILES_ID;
}

function yardsChanged() {
    lastEditedLength = YARDS_ID;
}

//AREA
function squaremetersChanged() {
    lastEditedArea = SQUAREMETERS_ID;
}

function squarekilometersChanged() {
    lastEditedArea = SQUAREKILOMETERS_ID;
}

function squarecentimetersChanged() {
    lastEditedArea = SQUARECENTIMETERS_ID;
}

function squarefeetChanged() {
    lastEditedArea = SQUAREFEET_ID;
}

function squareinchesChanged() {
    lastEditedArea = SQUAREINCHES_ID;
}

function squaremilesChanged() {
    lastEditedArea = SQUAREMILES_ID;
}

function squareyardsChanged() {
    lastEditedArea = SQUAREYARDS_ID;
}

function hectareChanged() {
    lastEditedArea = HECTARE_ID;
}

//VOLUME
function cubicMeterChanged() {
    lastEditedVolume = CUBICMETER_ID;
}

function cubicDecimeterAndLiterChanged() {
    lastEditedVolume = CUBICDECIMETERANDLITER_ID;
}

function cubicCentimeterAndMilliliterChanged() {
    lastEditedVolume = CUBICCENTIMETERANDMILLILITER_ID;
}

function gallonChanged() {
    lastEditedVolume = GALLON_ID;
}

function megaliterChanged() {
    lastEditedVolume = MEGALITER_ID;
}

function cubicInchChanged() {
    lastEditedVolume = CUBICINCH_ID;
}

function tablespoonChanged() {
    lastEditedVolume = TABLESPOON_ID;
}

function teaspoonChanged() {
    lastEditedVolume = TEASPOON_ID;
}

//NUMBER
function decimalChanged() {
    lastEditedNumber = DECIMAL_ID;
}

function binaryChanged() {
    lastEditedNumber = BINARY_ID;
}

function hexadecimalChanged() {
    lastEditedNumber = HEXADECIMAL_ID;
}

function octalChanged() {
    lastEditedNumber = OCTAL_ID;
}

/**
 * Converts Temperature - Unit values used: Celsius, Fahrenheit and Kelvin
 */
function convertTemperature() {
    var decimalPlacesTemp = 0; //remove decimal places from temperature
    var conversionC;
    var conversionF;
    var conversionK;

    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    //temperature values, will be our "return" value after the method
    var celsius = document.getElementById(CELSIUS_ID).value;
    celsius = parseFloat(celsius);

    var fahrenheit = document.getElementById(FAHRENHEIT_ID).value;
    fahrenheit = parseFloat(fahrenheit);

    var kelvin = document.getElementById(KELVIN_ID).value;
    kelvin = parseFloat(kelvin);

    //if the celsius field changes, convert the fahrenheit and kelvin values
    if (lastEditedTemp === CELSIUS_ID) {
        if(document.getElementById("celsius").value > 50){
            document.getElementById("weatherImage").src = "https://media.giphy.com/media/mbTRlJ2AwBZMk/200w_d.gif";
            document.getElementById("weatherText").innerHTML = "I'm melting!"
        }

        if(document.getElementById("celsius").value < -50){
            document.getElementById("weatherImage").src = "https://www.thirsty.co/wp-content/uploads/2018/01/freeze-2.gif";
            document.getElementById("weatherText").innerHTML = "I think our website is gonna f-freeze..."
        }
        conversionF = normalizeOutput((celsius * 9 / 5 + 32), decimalPlacesTemp);
        conversionK = normalizeOutput((celsius + 273), decimalPlacesTemp);
        attributeNumberValueArray([FAHRENHEIT_ID, KELVIN_ID], [conversionF, conversionK]);
    }
    //if the fahrenheit field changes, convert the celsius and kelvin values
    else if (lastEditedTemp === FAHRENHEIT_ID) {
        conversionC = normalizeOutput(((fahrenheit - 32) * 5 / 9), decimalPlacesTemp);
        conversionK = normalizeOutput((conversionC + 273), decimalPlacesTemp)

        attributeNumberValueArray([CELSIUS_ID, KELVIN_ID], [conversionC, conversionK]);
    }
    //if the kelvin field changes, convert the celsius and fahrenheit values
    else if (lastEditedTemp === KELVIN_ID) {
        conversionC = normalizeOutput((kelvin - 273), decimalPlacesTemp);
        conversionF = normalizeOutput((conversionC * 9 / 5 + 32), decimalPlacesTemp);

        attributeNumberValueArray([CELSIUS_ID, FAHRENHEIT_ID], [conversionC, conversionF]);
    }
}

/**
 * Converts Weight - Unit values used: Kilograms, Grams, Pounds, Ounces and Stones
 */
function convertWeight() {
    //initialize local variables
    var decimalPlacesWeight = 2;
    var conversionKilos;
    var conversionGrams;
    var conversionPounds;
    var conversionOunces;
    var conversionStones;

    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    var kilos = document.getElementById(KILOS_ID).value;
    kilos = parseFloat(kilos);

    var grams = document.getElementById(GRAMS_ID).value;
    grams = parseFloat(grams);

    var pounds = document.getElementById(POUNDS_ID).value;
    pounds = parseFloat(pounds);

    var ounces = document.getElementById(OUNCES_ID).value;
    ounces = parseFloat(ounces);

    var stones = document.getElementById(STONES_ID).value;
    stones = parseFloat(stones);

    //if the kilos field changes, convert the grams, pounds, ouces and stone values;
    if (lastEditedWeight === KILOS_ID) {
        conversionGrams = normalizeOutput((kilos * 1000), decimalPlacesWeight);
        conversionPounds = normalizeOutput((kilos * 2.2046), decimalPlacesWeight);
        conversionOunces = normalizeOutput((kilos * 35.274), decimalPlacesWeight);
        conversionStones = normalizeOutput((kilos * 0.15747), decimalPlacesWeight);

        attributeNumberValueArray([GRAMS_ID, POUNDS_ID, OUNCES_ID, STONES_ID], [conversionGrams, conversionPounds, conversionOunces, conversionStones]);
    }
//if the grams field changes, convert the kilos, pounds, ouces and stone values;
    else if (lastEditedWeight === GRAMS_ID) {
        conversionKilos = normalizeOutput((grams / 1000), decimalPlacesWeight);
        conversionPounds = normalizeOutput((grams / 453.59237), decimalPlacesWeight);
        conversionOunces = normalizeOutput((grams / 28.34952), decimalPlacesWeight);
        conversionStones = normalizeOutput((grams * 0.00015747), decimalPlacesWeight);

        attributeNumberValueArray([KILOS_ID, POUNDS_ID, OUNCES_ID, STONES_ID], [conversionKilos, conversionPounds, conversionOunces, conversionStones]);
    }
//if the pounds field changes, convert the kilos, grams, ouces and stone values;
    else if (lastEditedWeight === POUNDS_ID) {
        conversionKilos = normalizeOutput((pounds / 2.2046), decimalPlacesWeight);
        conversionGrams = normalizeOutput((pounds * 453.59237), decimalPlacesWeight);
        conversionOunces = normalizeOutput((pounds * 16), decimalPlacesWeight);
        conversionStones = normalizeOutput((pounds * 0.071429), decimalPlacesWeight);

        attributeNumberValueArray([KILOS_ID, GRAMS_ID, OUNCES_ID, STONES_ID], [conversionKilos, conversionGrams, conversionOunces, conversionStones]);
    }
//if the ounces field changes, convert the kilos, grams, pounds and stone values;
    else if (lastEditedWeight === OUNCES_ID) {
        conversionKilos = normalizeOutput((ounces * 0.02834952), decimalPlacesWeight);
        conversionGrams = normalizeOutput((ounces * 28.34952), decimalPlacesWeight);
        conversionPounds = normalizeOutput((ounces / 16), decimalPlacesWeight);
        conversionStones = normalizeOutput((ounces * 0.0044643), decimalPlacesWeight);

        attributeNumberValueArray([KILOS_ID, GRAMS_ID, POUNDS_ID, STONES_ID], [conversionKilos, conversionGrams, conversionPounds, conversionStones]);
    }
    else if (lastEditedWeight === STONES_ID) {
        conversionKilos = normalizeOutput((stones / 0.15747), decimalPlacesWeight);
        conversionGrams = normalizeOutput((stones / 0.00015747), decimalPlacesWeight);
        conversionPounds = normalizeOutput((stones * 14.000), decimalPlacesWeight);
        conversionOunces = normalizeOutput((stones * 224.00), decimalPlacesWeight);

        attributeNumberValueArray([KILOS_ID, GRAMS_ID, POUNDS_ID, OUNCES_ID], [conversionKilos, conversionGrams, conversionPounds, conversionOunces]);
    }
}

function convertLength() {
    var decimalPlacesLength = 3;
    var conversionM;
    var conversionK;
    var conversionC;
    var conversionF;
    var conversionI;
    var conversionMi;
    var conversionY;

    var meters = document.getElementById(METERS_ID).value;
    meters = parseFloat(meters);
    var kilometers = document.getElementById(KILOMETERS_ID).value;
    kilometers = parseFloat(kilometers);
    var centimeters = document.getElementById(CENTIMETERS_ID).value;
    centimeters = parseFloat(centimeters);
    var feet = document.getElementById(FEET_ID).value;
    feet = parseFloat(feet);
    var inches = document.getElementById(INCHES_ID).value;
    inches = parseFloat(inches);
    var miles = document.getElementById(MILES_ID).value;
    miles = parseFloat(miles);
    var yards = document.getElementById(YARDS_ID).value;
    yards = parseFloat(yards);

    //length values, will be our "return" value after the method

    if (lastEditedLength === METERS_ID) {
        conversionK = normalizeOutput((meters * 1000), decimalPlacesLength);
        conversionC = normalizeOutput((meters / 100), decimalPlacesLength);
        conversionF = normalizeOutput((meters * 0.3048), decimalPlacesLength);
        conversionI = normalizeOutput((meters * 0.0254), decimalPlacesLength);
        conversionMi = normalizeOutput((meters * 1609.344), decimalPlacesLength);
        conversionY = normalizeOutput((meters * 0.9144), decimalPlacesLength);

        attributeNumberValueArray([KILOMETERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionC, conversionF, conversionI, conversionMi, conversionY]);
    }
    else if (lastEditedLength === CENTIMETERS_ID) {
        conversionM = normalizeOutput((centimeters * 100),decimalPlacesLength);
        conversionK = normalizeOutput((centimeters * 100000),decimalPlacesLength);
        conversionF = normalizeOutput((centimeters * 30.48), decimalPlacesLength);
        conversionI = normalizeOutput((centimeters * 2.54), decimalPlacesLength);
        conversionMi = normalizeOutput((centimeters * 160934.4), decimalPlacesLength);
        conversionY = normalizeOutput((centimeters * 91.44), decimalPlacesLength);

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, FEET_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionF, conversionI, conversionMi, conversionY]);
    }
    else if (lastEditedLength === FEET_ID) {
        conversionM = normalizeOutput((feet * 3.280839895), decimalPlacesLength);
        conversionK = normalizeOutput((feet * 3280.839895), decimalPlacesLength);
        conversionC = normalizeOutput((feet * 0.032808399), decimalPlacesLength);
        conversionI = normalizeOutput((feet * 0.0833333333), decimalPlacesLength);
        conversionMi = normalizeOutput((feet * 5280), decimalPlacesLength);
        conversionY = normalizeOutput((feet * 3), decimalPlacesLength);

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionI, conversionMi, conversionY]);
    }
    else if (lastEditedLength === INCHES_ID) {
        conversionM = normalizeOutput((inches * 39.37007874), decimalPlacesLength);
        conversionK = normalizeOutput((inches * 39370.07874), decimalPlacesLength);
        conversionC = normalizeOutput((inches * 0.3937007874), decimalPlacesLength);
        conversionF = normalizeOutput((inches * 12), decimalPlacesLength);
        conversionMi = normalizeOutput((inches * 63360), decimalPlacesLength);
        conversionY = normalizeOutput((inches * 36), decimalPlacesLength);

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionF, conversionMi, conversionY]);
    }
    else if (lastEditedLength === MILES_ID) {
        conversionM = normalizeOutput((miles * 1609.344), decimalPlacesLength);
        conversionK = normalizeOutput((miles * 1.609344), decimalPlacesLength);
        conversionC = normalizeOutput((miles * 160934.4), decimalPlacesLength);
        conversionF = normalizeOutput((miles * 5280), decimalPlacesLength);
        conversionI = normalizeOutput((miles * 63360), decimalPlacesLength);
        conversionY = normalizeOutput((miles * 1760), decimalPlacesLength);

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionF, conversionI, conversionY]);
    }
    else if (lastEditedLength === KILOMETERS_ID) {
        conversionM = normalizeOutput((kilometers * 1000), decimalPlacesLength);
        conversionMi = normalizeOutput((kilometers * 0.6213711922), decimalPlacesLength);
        conversionC = normalizeOutput((kilometers * 100000), decimalPlacesLength);
        conversionF = normalizeOutput((kilometers * 3280.839895), decimalPlacesLength);
        conversionI = normalizeOutput((kilometers * 39370.07874), decimalPlacesLength);
        conversionY = normalizeOutput((kilometers * 1093.6132983), decimalPlacesLength);

        attributeNumberValueArray([MILES_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, YARDS_ID], [conversionMi, conversionM, conversionC, conversionF, conversionI, conversionY]);
    }
    else if (lastEditedLength === YARDS_ID) {
        conversionM = normalizeOutput((yards * 0.9144), decimalPlacesLength);
        conversionMi = normalizeOutput((yards * 0.0005681818), decimalPlacesLength);
        conversionC = normalizeOutput((yards * 91.44), decimalPlacesLength);
        conversionF = normalizeOutput((yards * 3), decimalPlacesLength);
        conversionI = normalizeOutput((yards * 36), decimalPlacesLength);
        conversionK = normalizeOutput((yards * 0.0009144), decimalPlacesLength);

        attributeNumberValueArray([MILES_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, KILOMETERS_ID], [conversionMi, conversionM, conversionC, conversionF, conversionI, conversionK]);
    }
}

function convertArea() {
    // the parseFloat Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    var squaremeters = document.getElementById(SQUAREMETERS_ID).value;
    squaremeters = parseFloat(squaremeters);
    var squarekilometers = document.getElementById(SQUAREKILOMETERS_ID).value;
    squarekilometers = parseFloat(squarekilometers);
    var squarecentimeters = document.getElementById(SQUARECENTIMETERS_ID).value;
    squarecentimeters = parseFloat(squarecentimeters);
    var squarefeet = document.getElementById(SQUAREFEET_ID).value;
    squarefeet = parseFloat(squarefeet);
    var squareinches = document.getElementById(SQUAREINCHES_ID).value;
    squareinches = parseFloat(squareinches);
    var squaremiles = document.getElementById(SQUAREMILES_ID).value;
    squaremiles = parseFloat(squaremiles);
    var squareyards = document.getElementById(SQUAREYARDS_ID).value;
    squareyards = parseFloat(squareyards);
    var hectare = document.getElementById(HECTARE_ID).value;
    hectare = parseFloat(hectare);

    //length values, will be our "return" value after the method
    var decimalPlacesArea = 12;
    var conversionM2;
    var conversionK2;
    var conversionC2;
    var conversionF2;
    var conversionI2;
    var conversionMi2;
    var conversionY2;
    var conversionH;

    if (lastEditedArea === SQUAREMETERS_ID) {
        conversionK2 = normalizeOutput((squaremeters * 0.000001), decimalPlacesArea);
        conversionC2 = normalizeOutput((squaremeters * 10000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squaremeters * 10.763910417), decimalPlacesArea);
        conversionI2 = normalizeOutput((squaremeters * 1550.0031), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squaremeters * 0.0000003861018768), decimalPlacesArea);
        conversionY2 = normalizeOutput((squaremeters * 1.1959900463), decimalPlacesArea);
        conversionH = normalizeOutput((squaremeters * 0.0001), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionC2, conversionF2, conversionI2, conversionMi2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUARECENTIMETERS_ID) {
        conversionK2 = normalizeOutput((squarecentimeters * 0.0000000001), decimalPlacesArea);
        conversionM2 = normalizeOutput((squarecentimeters * 0.0001), decimalPlacesArea);
        conversionF2 = normalizeOutput((squarecentimeters * 0.001076391), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarecentimeters * 0.15500031), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarecentimeters * 0.00000000003861018768), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarecentimeters * 0.000119599), decimalPlacesArea);
        conversionH = normalizeOutput((squarecentimeters * 0.00000001), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionF2, conversionI2, conversionMi2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUAREFEET_ID) {
        conversionM2 = normalizeOutput((squarefeet * 0.09290304), decimalPlacesArea);
        conversionK2 = normalizeOutput((squarefeet * 0.00000009290304), decimalPlacesArea);
        conversionC2 = normalizeOutput((squarefeet * 929.0304), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarefeet * 144), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarefeet * 0.0000000358700381), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarefeet * 0.1111111111), decimalPlacesArea);
        conversionH = normalizeOutput((squarefeet * 0.0000092903), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionI2, conversionMi2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUAREINCHES_ID) {
        conversionM2 = normalizeOutput((squareinches * 0.00064516), decimalPlacesArea);
        conversionK2 = normalizeOutput((squareinches * 0.00000000064516), decimalPlacesArea);
        conversionC2 = normalizeOutput((squareinches * 6.4516), decimalPlacesArea);
        conversionF2 = normalizeOutput((squareinches * 0.0069444444), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squareinches * 0.0000000002490974868), decimalPlacesArea);
        conversionY2 = normalizeOutput((squareinches * 0.0007716049), decimalPlacesArea);
        conversionH = normalizeOutput((squareinches * 0.000000064516), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionMi2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUAREMILES_ID) {
        conversionM2 = normalizeOutput((squaremiles * 2589990), decimalPlacesArea);
        conversionK2 = normalizeOutput((squaremiles * 2.58999), decimalPlacesArea);
        conversionC2 = normalizeOutput((squaremiles * 25899900000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squaremiles * 27878420.34), decimalPlacesArea);
        conversionI2 = normalizeOutput((squaremiles * 4014492529), decimalPlacesArea);
        conversionY2 = normalizeOutput((squaremiles * 3097602.26), decimalPlacesArea);
        conversionH = normalizeOutput((squaremiles * 258.999), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUAREKILOMETERS_ID) {
        conversionM2 = normalizeOutput((squarekilometers * 1000000), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarekilometers * 0.3861018768), decimalPlacesArea);
        conversionC2 = normalizeOutput((squarekilometers * 10000000000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squarekilometers * 10763910.417), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarekilometers * 1550003100), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarekilometers * 1195990.0463), decimalPlacesArea);
        conversionH = normalizeOutput((squarekilometers * 100), decimalPlacesArea);

        attributeNumberValueArray([SQUAREYARDS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionY2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionH]);
    }
    else if (lastEditedArea === SQUAREYARDS_ID) {
        conversionM2 = normalizeOutput((squareyards * 0.83612736), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squareyards * 0.0000003228303429), decimalPlacesArea);
        conversionC2 = normalizeOutput((squareyards * 8361.2736), decimalPlacesArea);
        conversionF2 = normalizeOutput((squareyards * 9), decimalPlacesArea);
        conversionI2 = normalizeOutput((squareyards * 1296), decimalPlacesArea);
        conversionK2 = normalizeOutput((squareyards * 0.00000083612736), decimalPlacesArea);
        conversionH = normalizeOutput((squareyards * 0.0000836127), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREMILES_ID, SQUAREFEET_ID, SQUAREINCHES_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionMi2, conversionF2, conversionI2, conversionH]);
    }
    else if (lastEditedArea === HECTARE_ID) {
        conversionM2 = normalizeOutput((hectare * 10000), decimalPlacesArea);
        conversionMi2 = normalizeOutput((hectare * 0.0038610188), decimalPlacesArea);
        conversionC2 = normalizeOutput((hectare * 100000000), decimalPlacesArea);
        conversionF2 = normalizeOutput((hectare * 107639.10417), decimalPlacesArea);
        conversionI2 = normalizeOutput((hectare * 15500031), decimalPlacesArea);
        conversionK2 = normalizeOutput((hectare * 0.01), decimalPlacesArea);
        conversionY2 = normalizeOutput((hectare * 11959.900463), decimalPlacesArea);

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, SQUAREYARDS_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionY2]);
    }
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


        document.getElementById("cubicMeter").value = conversionM3.toExponential();
        document.getElementById("cubicInch").value = conversionIN3.toExponential();
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl();
        document.getElementById("gallon").value = conversionGl();
        document.getElementById("megaliter").value = conversionMgL();
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL();
        document.getElementById("tablespoon").value = conversionTbS();
    }
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
}

/**
 * reset temperature values
 */
function resetTemp() {
    resetNumberValueArray([CELSIUS_ID, FAHRENHEIT_ID, KELVIN_ID])
}

/**
 * reset weight values
 */
function resetWeight() {
    resetNumberValueArray([KILOS_ID, GRAMS_ID, POUNDS_ID, OUNCES_ID, STONES_ID])
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

/**
 * Auxiliary Methods to normalize outputs
 */

function normalizeOutput(value, decimalPlaces) {
    value = parseFloat(value.toFixed(decimalPlaces));

    if (value >= 10000) { //só vai fazer a parte do exponencial se o valor for superior a este, podemos mudar
        value = value.toExponential();
    }
    return value;
}

/**
 * Method works because arrays are the same size and values are ordered in the same position as ids
 * example: attributeNumberValueArray([FAHRENHEIT_ID, KELVIN_ID], [conversionF, conversionK]);
 * position 0 of valuesArray has the value for fahrenheit.
 * @param idsArray
 * @param valuesArray
 */
function attributeNumberValueArray(idsArray, valuesArray) {
    for (i = 0; i < idsArray.length; i++) {
        document.getElementById(idsArray[i]).value = valuesArray[i];
    }
}

/**
 * Method to reset the input values.
 * @param idsArray - array of Ids from the unit we want to reset
 */
function resetNumberValueArray(idsArray) {
    for (i = 0; i < idsArray.length; i++) {
        document.getElementById(idsArray[i]).value = 0;
    }
}
