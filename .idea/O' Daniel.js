/**
 * initializes de lastEdited flag to anything that the user inputs.
 * The default type is chosen by the programmer.
 */
var lastEditedArea = "squaremeters";

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;


/**
 * Certifies when and where the input field is changed to, then it sets de lastEdited flad to whatever it is.
 */
document.getElementById("squaremeters").onchange = function () {lastEditedArea = "meters";};
document.getElementById("squarekilometers").onchange = function () {lastEditedArea = "kilometers";};
document.getElementById("squarecentimeters").onchange = function () {lastEditedArea = "centimeters";};
document.getElementById("squarefeet").onchange = function () {lastEditedArea = "feet";};
document.getElementById("squareinches").onchange = function () {lastEditedArea = "inches";};
document.getElementById("squaremiles").onchange = function () {lastEditedArea = "miles";};
document.getElementById("squareyards").onchange = function () {lastEditedArea = "yards";};
document.getElementById("hectare").onchange = function () {lastEditedArea = "hectare";};

/**
 * Converts Length - Unit values used: Meters, Kilometers, Centimeters, Feet, Inches, Miles, Yards
 */


function ConvertArea() {

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
    document.getElementById("hectare").value = conversionH;
}

function reset() {
    resetArea();
}

function resetArea() {
    document.getElementById("squaremeters").value = 0;
    document.getElementById("squarekilometers").value = 0;
    document.getElementById("squarecentimeters").value = 0;
    document.getElementById("squaremiles").value = 0;
    document.getElementById("squareyards").value = 0;
    document.getElementById("squareinches").value = 0;
    document.getElementById("squarefeet").value = 0;
    document.getElementById("hectare").value = 0
}
