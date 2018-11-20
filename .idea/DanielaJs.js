// TEMPERATURA

/**
 * @type {string} - initializes de lastEdited flag to any of the input fields, by  default I choosed one of the unit types for each diferent unit..
 */
var lastEditedTemp = "celsius";  // initialize the lastEdited flag to any of the input fields.
var lastEditedWeight = "kilos";

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

/**
 * reset function for the reset button - will reset all current values by calling specific reset functions
 */
function reset() {
    resetTemp();
    resetWeight();
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