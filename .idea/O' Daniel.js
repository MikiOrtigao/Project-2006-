//length - metro, cm, feet, inches, milhas, kilometros, yards
/**
 * initializes de lastEdited flag to anything that the user inputs.
 * The default type is chosen by the programmer.
 */
var lastEditedLength = "meters";

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;


/**
 * Certifies when and where the input field is changed to, then it sets de lastEdited flad to whatever it is.
 */
document.getElementById("meters").onchange = function () {lastEditedTemp = "meters";};
document.getElementById("kilometers").onchange = function () {lastEditedTemp = "kilometers";};
document.getElementById("centimeters").onchange = function () {lastEditedTemp = "centimeters";};
document.getElementById("feet").onchange = function () {lastEditedTemp = "feet";};
document.getElementById("inches").onchange = function () {lastEditedTemp = "inches";};
document.getElementById("miles").onchange = function () {lastEditedTemp = "miles";};
document.getElementById("yards").onchange = function () {lastEditedTemp = "yards";};

/**
 * Converts Length - Unit values used: Meters, Kilometers, Centimeters, Feet, Inches, Miles, Yards
 */


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
    lse if (lastEditedLength === "yards") {
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

function reset() {
    resetLength();
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


//a fazer: área