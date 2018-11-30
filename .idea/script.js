/**
 * Defines global constants (do not change values) for IDs.
 * Convention suggests constant values are written in uppercase and with underscores.
 * Ex: Instead of using "celsius", CELSIUS_ID shall be used. This helps prevent typos.
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
const CUBICMETER_ID = "cubicMeter"
const CUBICDECIMETERANDLITER_ID = "cubicDecimeterAndLiter"
const CUBICCENTIMITERANDMILLILITER_ID = "cubicCentimiterAndMilliliter"
const GALLON_ID = "gallon"
const MEGALITER_ID = "megaliter"
const CUBICINCH_ID = "cubicInch"
const TABLESPOON_ID = "tablespoon"
const TEASPOON_ID = "teaspoon"
const DECIMAL_ID = "decimal"
const BINARY_ID = "binary"
const HEXADECIMAL_ID = "hexadecimal"
const OCTAL_ID = "octal"

/**
 * @type {string} - Initializes the lastEdited flag to any of the input fields. One unit type was chosen as default for each operation.
 */
var lastEditedTemp = CELSIUS_ID;
var lastEditedWeight = KILOS_ID;
var lastEditedLength = METERS_ID;
var lastEditedArea = SQUAREMETERS_ID;
var lastEditedVolume = CUBICMETER_ID;
var lastEditedNumber = DECIMAL_ID;
var convertf;

/**
 * Picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
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
    lastEditedVolume = CUBICCENTIMITERANDMILLILITER_ID;
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
    var tempInCelsius;

    // the parseNumbers returns a floating point number if the input is a number, and NaN if it's not.
    // the method will return updated temperature values.
    var celsius = document.getElementById(CELSIUS_ID).value;
    celsius = parseNumbers(celsius);

    var fahrenheit = document.getElementById(FAHRENHEIT_ID).value;
    fahrenheit = parseNumbers(fahrenheit);

    var kelvin = document.getElementById(KELVIN_ID).value;
    kelvin = parseNumbers(kelvin);

    //if the celsius field changes, convert the fahrenheit and kelvin values
    if (lastEditedTemp === CELSIUS_ID) {
        tempInCelsius = document.getElementById(CELSIUS_ID).value;
        conversionF = normalizeOutput((celsius * 9 / 5 + 32), decimalPlacesTemp);
        conversionK = normalizeOutput((celsius + 273), decimalPlacesTemp);
        attributeNumberValueArray([FAHRENHEIT_ID, KELVIN_ID], [conversionF, conversionK]);
    }

    //if the fahrenheit field changes, convert the celsius and kelvin values
    else if (lastEditedTemp === FAHRENHEIT_ID) {
        conversionC = normalizeOutput(((fahrenheit - 32) * 5 / 9), decimalPlacesTemp);
        tempInCelsius = conversionC.valueOf();
        conversionK = normalizeOutput((conversionC + 273), decimalPlacesTemp);
        attributeNumberValueArray([CELSIUS_ID, KELVIN_ID], [conversionC, conversionK]);
    }

    //if the kelvin field changes, convert the celsius and fahrenheit values
    else if (lastEditedTemp === KELVIN_ID) {
        conversionC = normalizeOutput((kelvin - 273), decimalPlacesTemp);
        conversionF = normalizeOutput((conversionC * 9 / 5 + 32), decimalPlacesTemp);
        tempInCelsius = conversionC.valueOf();
        attributeNumberValueArray([CELSIUS_ID, FAHRENHEIT_ID], [conversionC, conversionF]);
    }

    //changes image and text
    if (tempInCelsius.valueOf() < 0) {
        document.getElementById("weatherImage").src = "https://media.giphy.com/media/1rM0Yhs1V9dFrySxXG/giphy.gif";
        document.getElementById("weatherText").innerHTML = "I think our website is gonna f-freeze..."
    } else if (tempInCelsius.valueOf() > 30) {
        document.getElementById("weatherImage").src = "https://media.giphy.com/media/g0ypOWq14CtmfLghkI/giphy.gif";
        document.getElementById("weatherText").innerHTML = "I'm melting!";
    } else if (0 <= tempInCelsius.valueOf() && tempInCelsius.valueOf() <= 30) {
        document.getElementById("weatherImage").src = "https://media.giphy.com/media/1Aeg7037dcxcSRPx8w/giphy.gif";
        document.getElementById("weatherText").innerHTML = "Nice weather today.";
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
    var weightInKg;

    // the parseNumbers returns a floating point number if the input is a number, and NaN if it's not.
    var kilos = document.getElementById(KILOS_ID).value;
    kilos = parseNumbers(kilos);

    var grams = document.getElementById(GRAMS_ID).value;
    grams = parseNumbers(grams);

    var pounds = document.getElementById(POUNDS_ID).value;
    pounds = parseNumbers(pounds);

    var ounces = document.getElementById(OUNCES_ID).value;
    ounces = parseNumbers(ounces);

    var stones = document.getElementById(STONES_ID).value;
    stones = parseNumbers(stones);

    //if the kilos field changes, convert the grams, pounds, ouces and stone values;
    if (lastEditedWeight === KILOS_ID) {
        conversionGrams = normalizeOutput((kilos * 1000), decimalPlacesWeight);
        conversionPounds = normalizeOutput((kilos * 2.2046), decimalPlacesWeight);
        conversionOunces = normalizeOutput((kilos * 35.274), decimalPlacesWeight);
        conversionStones = normalizeOutput((kilos * 0.15747), decimalPlacesWeight);
        weightInKg = document.getElementById(KILOS_ID).value;
        attributeNumberValueArray([GRAMS_ID, POUNDS_ID, OUNCES_ID, STONES_ID], [conversionGrams, conversionPounds, conversionOunces, conversionStones]);
    }

    //if the grams field changes, convert the kilos, pounds, ouces and stone values;
    else if (lastEditedWeight === GRAMS_ID) {
        conversionKilos = normalizeOutput((grams / 1000), decimalPlacesWeight);
        conversionPounds = normalizeOutput((grams / 453.59237), decimalPlacesWeight);
        conversionOunces = normalizeOutput((grams / 28.34952), decimalPlacesWeight);
        conversionStones = normalizeOutput((grams * 0.00015747), decimalPlacesWeight);
        weightInKg = KILOS_ID.valueOf();
        attributeNumberValueArray([KILOS_ID, POUNDS_ID, OUNCES_ID, STONES_ID], [conversionKilos, conversionPounds, conversionOunces, conversionStones]);
    }

    //if the pounds field changes, convert the kilos, grams, ouces and stone values;
    else if (lastEditedWeight === POUNDS_ID) {
        conversionKilos = normalizeOutput((pounds / 2.2046), decimalPlacesWeight);
        conversionGrams = normalizeOutput((pounds * 453.59237), decimalPlacesWeight);
        conversionOunces = normalizeOutput((pounds * 16), decimalPlacesWeight);
        conversionStones = normalizeOutput((pounds * 0.071429), decimalPlacesWeight);
        weightInKg = KILOS_ID.valueOf();
        attributeNumberValueArray([KILOS_ID, GRAMS_ID, OUNCES_ID, STONES_ID], [conversionKilos, conversionGrams, conversionOunces, conversionStones]);
    }

    //if the ounces field changes, convert the kilos, grams, pounds and stone values;
    else if (lastEditedWeight === OUNCES_ID) {
        conversionKilos = normalizeOutput((ounces * 0.02834952), decimalPlacesWeight);
        conversionGrams = normalizeOutput((ounces * 28.34952), decimalPlacesWeight);
        conversionPounds = normalizeOutput((ounces / 16), decimalPlacesWeight);
        conversionStones = normalizeOutput((ounces * 0.0044643), decimalPlacesWeight);
        weightInKg = KILOS_ID.valueOf();
        attributeNumberValueArray([KILOS_ID, GRAMS_ID, POUNDS_ID, STONES_ID], [conversionKilos, conversionGrams, conversionPounds, conversionStones]);
    }

    //if the stones field changes, convert the kilos, grams, pounds and ounces values;
    else if (lastEditedWeight === STONES_ID) {
        conversionKilos = normalizeOutput((stones / 0.15747), decimalPlacesWeight);
        conversionGrams = normalizeOutput((stones / 0.00015747), decimalPlacesWeight);
        conversionPounds = normalizeOutput((stones * 14.000), decimalPlacesWeight);
        conversionOunces = normalizeOutput((stones * 224.00), decimalPlacesWeight);
        weightInKg = KILOS_ID.valueOf();
        attributeNumberValueArray([KILOS_ID, GRAMS_ID, POUNDS_ID, OUNCES_ID], [conversionKilos, conversionGrams, conversionPounds, conversionOunces]);
    }

    //changes images displayed
    if (weightInKg.valueOf() < 40) {
        document.getElementById("weightImage").src = "https://media.giphy.com/media/3dkZ6MkMkZWgSXeUjx/giphy.gif";
        document.getElementById("weightText").innerHTML = "Light as a feather!"
    } else if (weightInKg.valueOf() >= 40 && weightInKg.valueOf() < 100) {
        document.getElementById("weightImage").src = "https://media.giphy.com/media/Wy5lk7aavBlKFcxna3/giphy.gif";
        document.getElementById("weightText").innerHTML = "Normal weight!"
    } else if (weightInKg.valueOf() >= 100) {
        document.getElementById("weightImage").src = "https://media.giphy.com/media/1oF1IonCrH4fB3j6RW/giphy.gif";
        document.getElementById("weightText").innerHTML = "That's pretty heavy..."
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
    var lengthInMeters;

    var meters = document.getElementById(METERS_ID).value;
    meters = parseNumbers(meters);
    var kilometers = document.getElementById(KILOMETERS_ID).value;
    kilometers = parseNumbers(kilometers);
    var centimeters = document.getElementById(CENTIMETERS_ID).value;
    centimeters = parseNumbers(centimeters);
    var feet = document.getElementById(FEET_ID).value;
    feet = parseNumbers(feet);
    var inches = document.getElementById(INCHES_ID).value;
    inches = parseNumbers(inches);
    var miles = document.getElementById(MILES_ID).value;
    miles = parseNumbers(miles);
    var yards = document.getElementById(YARDS_ID).value;
    yards = parseNumbers(yards);

    //length values, will be our "return" value after the method
    if (lastEditedLength === METERS_ID) {
        conversionK = normalizeOutput((meters / 1000), decimalPlacesLength);
        conversionC = normalizeOutput((meters * 100), decimalPlacesLength);
        conversionF = normalizeOutput((meters * 0.3048), decimalPlacesLength);
        conversionI = normalizeOutput((meters * 0.0254), decimalPlacesLength);
        conversionMi = normalizeOutput((meters * 1609.344), decimalPlacesLength);
        conversionY = normalizeOutput((meters * 0.9144), decimalPlacesLength);
        lengthInMeters = document.getElementById(METERS_ID).value;

        attributeNumberValueArray([KILOMETERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionC, conversionF, conversionI, conversionMi, conversionY]);
    } else if (lastEditedLength === CENTIMETERS_ID) {
        conversionM = normalizeOutput((centimeters * 100), decimalPlacesLength);
        conversionK = normalizeOutput((centimeters * 100000), decimalPlacesLength);
        conversionF = normalizeOutput((centimeters * 30.48), decimalPlacesLength);
        conversionI = normalizeOutput((centimeters * 2.54), decimalPlacesLength);
        conversionMi = normalizeOutput((centimeters * 160934.4), decimalPlacesLength);
        conversionY = normalizeOutput((centimeters * 91.44), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, FEET_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionF, conversionI, conversionMi, conversionY]);
    } else if (lastEditedLength === FEET_ID) {
        conversionM = normalizeOutput((feet * 3.280839895), decimalPlacesLength);
        conversionK = normalizeOutput((feet * 3280.839895), decimalPlacesLength);
        conversionC = normalizeOutput((feet * 0.032808399), decimalPlacesLength);
        conversionI = normalizeOutput((feet * 0.0833333333), decimalPlacesLength);
        conversionMi = normalizeOutput((feet * 5280), decimalPlacesLength);
        conversionY = normalizeOutput((feet * 3), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, INCHES_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionI, conversionMi, conversionY]);
    } else if (lastEditedLength === INCHES_ID) {
        conversionM = normalizeOutput((inches * 39.37007874), decimalPlacesLength);
        conversionK = normalizeOutput((inches * 39370.07874), decimalPlacesLength);
        conversionC = normalizeOutput((inches * 0.3937007874), decimalPlacesLength);
        conversionF = normalizeOutput((inches * 12), decimalPlacesLength);
        conversionMi = normalizeOutput((inches * 63360), decimalPlacesLength);
        conversionY = normalizeOutput((inches * 36), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, MILES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionF, conversionMi, conversionY]);
    } else if (lastEditedLength === MILES_ID) {
        conversionM = normalizeOutput((miles * 1609.344), decimalPlacesLength);
        conversionK = normalizeOutput((miles * 1.609344), decimalPlacesLength);
        conversionC = normalizeOutput((miles * 160934.4), decimalPlacesLength);
        conversionF = normalizeOutput((miles * 5280), decimalPlacesLength);
        conversionI = normalizeOutput((miles * 63360), decimalPlacesLength);
        conversionY = normalizeOutput((miles * 1760), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([KILOMETERS_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, YARDS_ID], [conversionK, conversionM, conversionC, conversionF, conversionI, conversionY]);
    } else if (lastEditedLength === KILOMETERS_ID) {
        conversionM = normalizeOutput((kilometers * 1000), decimalPlacesLength);
        conversionMi = normalizeOutput((kilometers * 0.6213711922), decimalPlacesLength);
        conversionC = normalizeOutput((kilometers * 100000), decimalPlacesLength);
        conversionF = normalizeOutput((kilometers * 3280.839895), decimalPlacesLength);
        conversionI = normalizeOutput((kilometers * 39370.07874), decimalPlacesLength);
        conversionY = normalizeOutput((kilometers * 1093.6132983), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([MILES_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, YARDS_ID], [conversionMi, conversionM, conversionC, conversionF, conversionI, conversionY]);
    } else if (lastEditedLength === YARDS_ID) {
        conversionM = normalizeOutput((yards * 0.9144), decimalPlacesLength);
        conversionMi = normalizeOutput((yards * 0.0005681818), decimalPlacesLength);
        conversionC = normalizeOutput((yards * 91.44), decimalPlacesLength);
        conversionF = normalizeOutput((yards * 3), decimalPlacesLength);
        conversionI = normalizeOutput((yards * 36), decimalPlacesLength);
        conversionK = normalizeOutput((yards * 0.0009144), decimalPlacesLength);
        lengthInMeters = conversionM.valueOf();

        attributeNumberValueArray([MILES_ID, METERS_ID, CENTIMETERS_ID, FEET_ID, INCHES_ID, KILOMETERS_ID], [conversionMi, conversionM, conversionC, conversionF, conversionI, conversionK]);
    }

    //changes images and inner text

    if (lengthInMeters.valueOf() > 1.9) {
        document.getElementById("lengthImage").src = "https://media.giphy.com/media/oVtwU0Ma5BJnofsMpY/giphy.gif";
        document.getElementById("lengthText").innerHTML = "That's huge!"
    } else if (lengthInMeters.valueOf() < 1.5) {
        document.getElementById("lengthImage").src = "https://media.giphy.com/media/psnHvuIx0Ldq2NM5wv/giphy.gif";
        document.getElementById("lengthText").innerHTML = "That's nothing!"
    } else if (lengthInMeters.valueOf() >= 1.5 && lengthInMeters.valueOf() <= 1.9) {
        document.getElementById("lengthImage").src = "https://media.giphy.com/media/yx65dkMmUo8LOhgNQc/giphy.gif";
        document.getElementById("lengthText").innerHTML = "Average length."
    }
}

function convertArea() {

    // the parseNumbers returns a floating point number if the input is a number, and NaN if it's not.
    var squaremeters = document.getElementById(SQUAREMETERS_ID).value;
    squaremeters = parseNumbers(squaremeters);
    var squarekilometers = document.getElementById(SQUAREKILOMETERS_ID).value;
    squarekilometers = parseNumbers(squarekilometers);
    var squarecentimeters = document.getElementById(SQUARECENTIMETERS_ID).value;
    squarecentimeters = parseNumbers(squarecentimeters);
    var squarefeet = document.getElementById(SQUAREFEET_ID).value;
    squarefeet = parseNumbers(squarefeet);
    var squareinches = document.getElementById(SQUAREINCHES_ID).value;
    squareinches = parseNumbers(squareinches);
    var squaremiles = document.getElementById(SQUAREMILES_ID).value;
    squaremiles = parseNumbers(squaremiles);
    var squareyards = document.getElementById(SQUAREYARDS_ID).value;
    squareyards = parseNumbers(squareyards);
    var hectare = document.getElementById(HECTARE_ID).value;
    hectare = parseNumbers(hectare);

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
    var areaInSquareKm;

    if (lastEditedArea === SQUAREMETERS_ID) {
        conversionK2 = normalizeOutput((squaremeters * 0.000001), decimalPlacesArea);
        conversionC2 = normalizeOutput((squaremeters * 10000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squaremeters * 10.763910417), decimalPlacesArea);
        conversionI2 = normalizeOutput((squaremeters * 1550.0031), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squaremeters * 0.0000003861018768), decimalPlacesArea);
        conversionY2 = normalizeOutput((squaremeters * 1.1959900463), decimalPlacesArea);
        conversionH = normalizeOutput((squaremeters * 0.0001), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionC2, conversionF2, conversionI2, conversionMi2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUARECENTIMETERS_ID) {
        conversionK2 = normalizeOutput((squarecentimeters * 0.0000000001), decimalPlacesArea);
        conversionM2 = normalizeOutput((squarecentimeters * 0.0001), decimalPlacesArea);
        conversionF2 = normalizeOutput((squarecentimeters * 0.001076391), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarecentimeters * 0.15500031), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarecentimeters * 0.00000000003861018768), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarecentimeters * 0.000119599), decimalPlacesArea);
        conversionH = normalizeOutput((squarecentimeters * 0.00000001), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionF2, conversionI2, conversionMi2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUAREFEET_ID) {
        conversionM2 = normalizeOutput((squarefeet * 0.09290304), decimalPlacesArea);
        conversionK2 = normalizeOutput((squarefeet * 0.00000009290304), decimalPlacesArea);
        conversionC2 = normalizeOutput((squarefeet * 929.0304), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarefeet * 144), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarefeet * 0.0000000358700381), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarefeet * 0.1111111111), decimalPlacesArea);
        conversionH = normalizeOutput((squarefeet * 0.0000092903), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionI2, conversionMi2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUAREINCHES_ID) {
        conversionM2 = normalizeOutput((squareinches * 0.00064516), decimalPlacesArea);
        conversionK2 = normalizeOutput((squareinches * 0.00000000064516), decimalPlacesArea);
        conversionC2 = normalizeOutput((squareinches * 6.4516), decimalPlacesArea);
        conversionF2 = normalizeOutput((squareinches * 0.0069444444), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squareinches * 0.0000000002490974868), decimalPlacesArea);
        conversionY2 = normalizeOutput((squareinches * 0.0007716049), decimalPlacesArea);
        conversionH = normalizeOutput((squareinches * 0.000000064516), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionMi2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUAREMILES_ID) {
        conversionM2 = normalizeOutput((squaremiles * 2589990), decimalPlacesArea);
        conversionK2 = normalizeOutput((squaremiles * 2.58999), decimalPlacesArea);
        conversionC2 = normalizeOutput((squaremiles * 25899900000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squaremiles * 27878420.34), decimalPlacesArea);
        conversionI2 = normalizeOutput((squaremiles * 4014492529), decimalPlacesArea);
        conversionY2 = normalizeOutput((squaremiles * 3097602.26), decimalPlacesArea);
        conversionH = normalizeOutput((squaremiles * 258.999), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUAREKILOMETERS_ID) {
        conversionM2 = normalizeOutput((squarekilometers * 1000000), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squarekilometers * 0.3861018768), decimalPlacesArea);
        conversionC2 = normalizeOutput((squarekilometers * 10000000000), decimalPlacesArea);
        conversionF2 = normalizeOutput((squarekilometers * 10763910.417), decimalPlacesArea);
        conversionI2 = normalizeOutput((squarekilometers * 1550003100), decimalPlacesArea);
        conversionY2 = normalizeOutput((squarekilometers * 1195990.0463), decimalPlacesArea);
        conversionH = normalizeOutput((squarekilometers * 100), decimalPlacesArea);
        areaInSquareKm = document.getElementById(SQUAREKILOMETERS_ID).value;

        attributeNumberValueArray([SQUAREYARDS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, HECTARE_ID], [conversionY2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionH]);
    } else if (lastEditedArea === SQUAREYARDS_ID) {
        conversionM2 = normalizeOutput((squareyards * 0.83612736), decimalPlacesArea);
        conversionMi2 = normalizeOutput((squareyards * 0.0000003228303429), decimalPlacesArea);
        conversionC2 = normalizeOutput((squareyards * 8361.2736), decimalPlacesArea);
        conversionF2 = normalizeOutput((squareyards * 9), decimalPlacesArea);
        conversionI2 = normalizeOutput((squareyards * 1296), decimalPlacesArea);
        conversionK2 = normalizeOutput((squareyards * 0.00000083612736), decimalPlacesArea);
        conversionH = normalizeOutput((squareyards * 0.0000836127), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREMILES_ID, SQUAREFEET_ID, SQUAREINCHES_ID, HECTARE_ID], [conversionK2, conversionM2, conversionC2, conversionMi2, conversionF2, conversionI2, conversionH]);
    } else if (lastEditedArea === HECTARE_ID) {
        conversionM2 = normalizeOutput((hectare * 10000), decimalPlacesArea);
        conversionMi2 = normalizeOutput((hectare * 0.0038610188), decimalPlacesArea);
        conversionC2 = normalizeOutput((hectare * 100000000), decimalPlacesArea);
        conversionF2 = normalizeOutput((hectare * 107639.10417), decimalPlacesArea);
        conversionI2 = normalizeOutput((hectare * 15500031), decimalPlacesArea);
        conversionK2 = normalizeOutput((hectare * 0.01), decimalPlacesArea);
        conversionY2 = normalizeOutput((hectare * 11959.900463), decimalPlacesArea);
        areaInSquareKm = conversionK2.valueOf();

        attributeNumberValueArray([SQUAREKILOMETERS_ID, SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREYARDS_ID, SQUAREYARDS_ID], [conversionK2, conversionM2, conversionC2, conversionF2, conversionI2, conversionY2, conversionY2]);
    }

    //changes images and text

    if (areaInSquareKm.valueOf() < 15) {
        document.getElementById("areaImage").src = "https://media.giphy.com/media/4NkqE4jUNa2lsackEi/giphy.gif";
        document.getElementById("areaText").innerHTML = "That's a pretty small place...";
    } else if (areaInSquareKm.valueOf() >= 15 && areaInSquareKm.valueOf() <= 45) {
        document.getElementById("areaImage").src = "https://media.giphy.com/media/OqBXKkH7qaFEhz29dr/giphy.gif";
        document.getElementById("areaText").innerHTML = "Decently sized - not too big, not too small."
    } else if (areaInSquareKm.valueOf() > 45) {
        document.getElementById("areaImage").src = "https://media.giphy.com/media/6CBpqtDAeoOZetnj6D/giphy.gif";
        document.getElementById("areaText").innerHTML = "What a huge area!"
    }
}

function convertVolume() {

    // the parseNumbers returns a floating point number if the input is a number, and NaN if it's not..
    var decimalPlacesVolume = 12;
    var conversionM3;
    var conversionD3AndL;
    var conversionC3AndMl;
    var conversionGl;
    var conversionMgL;
    var conversionIN3;
    var conversionTbS;
    var conversionTeaS;
    var volumeInLiters;

    var cubicMeter = document.getElementById(CUBICMETER_ID).value;
    cubicMeter = parseNumbers(cubicMeter);
    var cubicDecimeterAndLiter = document.getElementById(CUBICDECIMETERANDLITER_ID).value;
    cubicDecimeterAndLiter = parseNumbers(cubicDecimeterAndLiter);
    var cubicCentimiterAndMilliliter = document.getElementById(CUBICCENTIMITERANDMILLILITER_ID).value;
    cubicCentimiterAndMilliliter = parseNumbers(cubicCentimiterAndMilliliter);
    var gallon = document.getElementById(GALLON_ID).value;
    gallon = parseNumbers(gallon);
    var megaliter = document.getElementById(MEGALITER_ID).value;
    megaliter = parseNumbers(megaliter);
    var cubicInch = document.getElementById(CUBICINCH_ID).value;
    cubicInch = parseNumbers(cubicInch);
    var tablespoon = document.getElementById(TABLESPOON_ID).value;
    tablespoon = parseNumbers(tablespoon);
    var teaspoon = document.getElementById(TEASPOON_ID).value;
    teaspoon = parseNumbers(teaspoon);

    //length values, will be our "return" value after the method
    if (lastEditedVolume === CUBICMETER_ID) {
        conversionD3AndL = normalizeOutput((cubicMeter * 1000), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((cubicMeter * 1000000), decimalPlacesVolume);
        conversionGl = normalizeOutput((cubicMeter * 264.172052), decimalPlacesVolume);
        conversionMgL = normalizeOutput((cubicMeter * 0.001), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((cubicMeter * 61023.7441), decimalPlacesVolume);
        conversionTbS = normalizeOutput((cubicMeter * 67628.0454), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((cubicMeter * 202884.136), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID], [conversionD3AndL, conversionC3AndMl, conversionGl, conversionMgL, conversionIN3, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === CUBICDECIMETERANDLITER_ID) {
        conversionC3AndMl = normalizeOutput((cubicDecimeterAndLiter * 1000), decimalPlacesVolume);
        conversionM3 = normalizeOutput((cubicDecimeterAndLiter * 0.001), decimalPlacesVolume);
        conversionGl = normalizeOutput((cubicDecimeterAndLiter * 0.2641720524), decimalPlacesVolume);
        conversionMgL = normalizeOutput((cubicDecimeterAndLiter * 0.000001), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((cubicDecimeterAndLiter * 61.023744095), decimalPlacesVolume);
        conversionTbS = normalizeOutput((cubicDecimeterAndLiter * 66.666666667), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((cubicDecimeterAndLiter * 200), decimalPlacesVolume);
        volumeInLiters = document.getElementById(CUBICDECIMETERANDLITER_ID).value;

        attributeNumberValueArray([CUBICMETER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID], [conversionM3, conversionC3AndMl, conversionGl, conversionMgL, conversionIN3, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === CUBICCENTIMITERANDMILLILITER_ID) {
        conversionD3AndL = normalizeOutput((cubicCentimiterAndMilliliter * 0.001), decimalPlacesVolume);
        conversionM3 = normalizeOutput((cubicCentimiterAndMilliliter * 0.000001), decimalPlacesVolume);
        conversionGl = normalizeOutput((cubicCentimiterAndMilliliter * 0.000264172052), decimalPlacesVolume);
        conversionMgL = normalizeOutput((cubicCentimiterAndMilliliter * 0.000000001), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((cubicCentimiterAndMilliliter * 0.0610237441), decimalPlacesVolume);
        conversionTbS = normalizeOutput((cubicCentimiterAndMilliliter * 0.0676280454), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((cubicCentimiterAndMilliliter * 0.202884136), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID], [conversionM3, conversionD3AndL, conversionGl, conversionMgL, conversionIN3, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === GALLON_ID) {
        conversionM3 = normalizeOutput((gallon * 0.00378541178), decimalPlacesVolume);
        conversionD3AndL = normalizeOutput((gallon * 3.78541178), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((gallon * 3785.41178), decimalPlacesVolume);
        conversionMgL = normalizeOutput((gallon * (3.78541178 * 0.000001)), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((gallon * 231), decimalPlacesVolume);
        conversionTbS = normalizeOutput((gallon * 256), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((gallon * 768), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID], [conversionM3, conversionD3AndL, conversionC3AndMl, conversionMgL, conversionIN3, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === MEGALITER_ID) {
        conversionM3 = normalizeOutput((megaliter * 1000), decimalPlacesVolume);
        conversionD3AndL = normalizeOutput((megaliter * 1000000), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((megaliter * 1000000000), decimalPlacesVolume);
        conversionGl = normalizeOutput((megaliter * 264172.052), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((megaliter * 61023744.1), decimalPlacesVolume);
        conversionTbS = normalizeOutput((megaliter * 67628045.4), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((megaliter * 202884136), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID], [conversionM3, conversionD3AndL, conversionC3AndMl, conversionGl, conversionIN3, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === CUBICINCH_ID) {
        conversionM3 = normalizeOutput((cubicInch * 1.6387064 * 0.00002), decimalPlacesVolume);
        conversionD3AndL = normalizeOutput((cubicInch * 2.58999), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((cubicInch * 0.016387064), decimalPlacesVolume);
        conversionGl = normalizeOutput((cubicInch * 0.00432900433), decimalPlacesVolume);
        conversionMgL = normalizeOutput((cubicInch * 1.6387064 * 0.00000001), decimalPlacesVolume);
        conversionTbS = normalizeOutput((cubicInch * 1.10822511), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((cubicInch * 3.32467532), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, TABLESPOON_ID, TEASPOON_ID], [conversionM3, conversionD3AndL, conversionC3AndMl, conversionGl, conversionMgL, conversionTbS, conversionTeaS]);
    } else if (lastEditedVolume === TABLESPOON_ID) {
        conversionM3 = normalizeOutput((tablespoon * 1.47867648 * 0.00001), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((tablespoon * 0.90234375), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((tablespoon * 14.7867648), decimalPlacesVolume);
        conversionGl = normalizeOutput((tablespoon * 0.00390625), decimalPlacesVolume);
        conversionMgL = normalizeOutput((tablespoon * 1.47867648 * 0.00000001), decimalPlacesVolume);
        conversionD3AndL = normalizeOutput((tablespoon * 0.014786764), decimalPlacesVolume);
        conversionTeaS = normalizeOutput((tablespoon * 3), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TEASPOON_ID], [conversionM3, conversionD3AndL, conversionC3AndMl, conversionGl, conversionMgL, conversionIN3, conversionTeaS]);
    } else if (lastEditedVolume === TEASPOON_ID) {
        conversionM3 = normalizeOutput((teaspoon * 4.92892159 * 0.000001), decimalPlacesVolume);
        conversionIN3 = normalizeOutput((teaspoon * 0.30078125), decimalPlacesVolume);
        conversionC3AndMl = normalizeOutput((teaspoon * 4.92892159), decimalPlacesVolume);
        conversionGl = normalizeOutput((teaspoon * 0.00130208333), decimalPlacesVolume);
        conversionMgL = normalizeOutput((teaspoon * 4.92892159 * 0.000000001), decimalPlacesVolume);
        conversionD3AndL = normalizeOutput((teaspoon * 0.00492892159), decimalPlacesVolume);
        conversionTbS = normalizeOutput((teaspoon * 0.333333333), decimalPlacesVolume);
        volumeInLiters = conversionD3AndL.valueOf();

        attributeNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID], [conversionM3, conversionD3AndL, conversionC3AndMl, conversionGl, conversionMgL, conversionIN3, conversionTbS]);
    }

    //changes image and text

    if (volumeInLiters.valueOf() < 1) {
        document.getElementById("volumeImage").src = "https://media.giphy.com/media/KVFE3yGk7zRETOvNIp/giphy.gif";
        document.getElementById("volumeText").innerHTML = "Can barely fill a bottle."
    }

    if (volumeInLiters.valueOf() >= 1 && volumeInLiters.valueOf() <= 5) {
        document.getElementById("volumeImage").src = "https://media.giphy.com/media/njZbykq6IkRIe24JH6/giphy.gif";
        document.getElementById("volumeText").innerHTML = "Enough to keep you hydrated."
    }

    if (volumeInLiters.valueOf() > 5) {
        document.getElementById("volumeImage").src = "https://media.giphy.com/media/oOBZ58IK8omUywzmd8/giphy.gif";
        document.getElementById("volumeText").innerHTML = "Don't drown!";
    }
}

function convertNumber() {

    // the parseNumbers returns a floating point number if the input is a number, and NaN if it's not.

    var decimal = document.getElementById(DECIMAL_ID).value;
    decimal = parseNumbers(decimal);

    var binary = document.getElementById(BINARY_ID).value;
    binary = parseNumbers(binary);

    var hexadecimal = document.getElementById(HEXADECIMAL_ID).value;
    hexadecimal = parseNumbers(hexadecimal);

    var octal = document.getElementById(OCTAL_ID).value;
    octal = parseNumbers(octal);

    //number values. These will be our "return" value after the method.
    var conversionDc;
    var conversionBn;
    var conversionHx;
    var conversionOc;
    var str;

    if (lastEditedNumber === DECIMAL_ID) {
        str = decimal;
        conversionBn = (+str).toString(2);
        conversionHx = (+str).toString(16);
        conversionOc = (+str).toString(8);

        attributeNumberValueArray([BINARY_ID, HEXADECIMAL_ID, OCTAL_ID], [conversionBn, conversionHx, conversionOc]);
    } else if (lastEditedNumber === BINARY_ID) {
        str = checkIfNumberIsBinary(binary);
        conversionDc = parseInt(+str, 2).toString(10);
        conversionHx = parseInt(+str, 2).toString(16);
        conversionOc = parseInt(+str, 2).toString(8);

        attributeNumberValueArray([DECIMAL_ID, HEXADECIMAL_ID, OCTAL_ID], [conversionDc, conversionHx, conversionOc]);
    } else if (lastEditedNumber === HEXADECIMAL_ID) {
        str = hexadecimal;
        conversionDc = parseInt(+str, 16).toString(10);
        conversionBn = parseInt(+str, 16).toString(2);
        conversionOc = parseInt(+str, 16).toString(8);

        attributeNumberValueArray([DECIMAL_ID, BINARY_ID, OCTAL_ID], [conversionDc, conversionBn, conversionOc]);
    } else if (lastEditedNumber === OCTAL_ID) {
        str = octal;
        conversionDc = parseInt(+str, 8).toString(10);
        conversionBn = parseInt(+str, 8).toString(2);
        conversionHx = parseInt(+str, 8).toString(16);

        attributeNumberValueArray([DECIMAL_ID, BINARY_ID, HEXADECIMAL_ID], [conversionDc, conversionBn, conversionHx]);
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
    resetNumberValueArray([METERS_ID, CENTIMETERS_ID, KILOMETERS_ID, FEET_ID, INCHES_ID, MILES_ID, YARDS_ID])
}

function resetArea() {
    resetNumberValueArray([SQUAREMETERS_ID, SQUARECENTIMETERS_ID, SQUAREKILOMETERS_ID, SQUAREFEET_ID, SQUAREINCHES_ID, SQUAREMILES_ID, SQUAREYARDS_ID, HECTARE_ID])
}

function resetVolume() {
    resetNumberValueArray([CUBICMETER_ID, CUBICDECIMETERANDLITER_ID, CUBICCENTIMITERANDMILLILITER_ID, GALLON_ID, MEGALITER_ID, CUBICINCH_ID, TABLESPOON_ID, TEASPOON_ID])
}

function resetNumber() {
    resetNumberValueArray([DECIMAL_ID, BINARY_ID, HEXADECIMAL_ID, OCTAL_ID])
}

/**
 * Auxiliary Methods to normalize outputs
 */

function normalizeOutput(value, decimalPlaces) {
    value = parseNumbers(value.toFixed(decimalPlaces));

    if (value >= 10000) { //só vai fazer a parte do exponencial se o valor for superior a este, podemos mudar
        value = value.toExponential();
    }
    return value;
}

/**
 * Method works because arrays are the same size and values are ordered in the same position as ids.
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

/** Method to see if a number has only 1s and 0s.
 *
 */
function checkIfNumberIsBinary(number) {
    var numberCopy = number;
    while (numberCopy > 1) {
        if (number < 0 || (numberCopy % 10 != 0 && numberCopy % 10 != 1)) {
            return "a";
        }
        numberCopy = Math.floor(numberCopy / 10);
    }
    return number;
}

/**
 * Method to convert on keypress - enter key
 * @param e
 */
function functionEnter(e) {
    if (e.keyCode === 13) convertf();
}

/**
 * Method to ensure a numeric value has no special characters besides numbers.
 */

function parseNumbers(input) {
    var filter = new RegExp('^[0-9]*$')
    if (input.value = filter){
        return input;
    }
    else return NaN;
}