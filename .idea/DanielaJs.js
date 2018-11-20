// TEMPERATURA

/**
 * @type {string} - initializes de lastEdited flag to any of the input fields, by  default I choosed one of the unit types for each diferent unit..
 */
var lastEditedTemp = "celsius";  // initialize the lastEdited flag to any of the input fields.
var lastEditedWeight = "kilos";
var lastEditedLength = "meters";

/**
 * Button listeners - what will happen when the user clicks on page buttons
 * @type {convert} it will send the input to get the converted results on mouse click
 * @type {reset} it will reset the input and results on mouse click
 */
document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

//picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
document.getElementById("celsius").onchange = function () {
    lastEditedTemp = "celsius";
};
document.getElementById("fahrenheit").onchange = function () {
    lastEditedTemp = "fahrenheit";
};
document.getElementById("kelvin").onchange = function () {
    lastEditedTemp = "kelvin";
};
document.getElementById("kilos").onchange = function () {
    lastEditedWeight = "kilos";
};
document.getElementById("grams").onchange = function () {
    lastEditedWeight = "grams";
};
document.getElementById("pounds").onchange = function () {
    lastEditedWeight = "pounds";
};
document.getElementById("ounces").onchange = function () {
    lastEditedWeight = "ounces";
};
document.getElementById("stones").onchange = function () {
    lastEditedWeight = "stones";
};
document.getElementById("meters").onchange = function () {lastEditedLength = "meters";};
document.getElementById("kilometers").onchange = function () {lastEditedLength = "kilometers";};
document.getElementById("centimeters").onchange = function () {lastEditedLength = "centimeters";};
document.getElementById("feet").onchange = function () {lastEditedLength = "feet";};
document.getElementById("inches").onchange = function () {lastEditedLength = "inches";};
document.getElementById("miles").onchange = function () {lastEditedLength = "miles";};
document.getElementById("yards").onchange = function () {lastEditedLength = "yards";};

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
        document.getElementById("Pounds").value = Math.round(conversionPounds);
        document.getElementById("Ounces").value = Math.round(conversionOunces);
        document.getElementById("Stones").value = Math.round(conversionOunces);
    }
//if the grams field changes, convert the kilos, pounds, ouces and stone values;
    else if (lastEditedWeight === "grams") {
        conversionKilos = grams / 1000;
        conversionPounds = grams / 453.59237;
        conversionOunces = grams / 28.34952;
        conversionStones = grams * 0.00015747;
        //round the converted weight values
        document.getElementById("kilos").value = Math.round(conversionKilos);
        document.getElementById("Pounds").value = Math.round(conversionPounds);
        document.getElementById("Ounces").value = Math.round(conversionOunces);
        document.getElementById("Stones").value = Math.round(conversionOunces);
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
        document.getElementById("Ounces").value = Math.round(conversionOunces);
        document.getElementById("Stones").value = Math.round(conversionOunces);
    }
//if the ounces field changes, convert the kilos, grams, pounds and stone values;
    else if (lastEditedWeight === "ounces") {
        conversionKilos = ounces * 0.02834952;
        conversionGrams = ounces * 28.34952;
        conversionPounds = ounces / 16;
        conversionStones = ounces* 0.0044643;
        //round the converted weight values
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

function ConvertLength() {

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

/**
 * reset function for the reset button - will reset all current values by calling specific reset functions
 */
function reset() {
    resetTemp();
    resetWeight();
    resetLength();
}

/*
 se o botao reset for comum a todas as unidades chamo a funcao reset. Se o botao for especifico de cada unidade,
 chamo a funcao especifica e posso apagar a funcao reset acima (geral).
 */

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
