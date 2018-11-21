/**
 * initializes de lastEdited flag to anything that the user inputs.
 * The default type is chosen by the programmer.
 */
var lastEditedArea = "cubicmetre";

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

/**
 * Certifies when and where the input field is changed to, then it sets de lastEdited flad to whatever it is.
 */
document.getElementById("cubicMeter").onchange = function () {
    lastEditedArea = "meter";
};
document.getElementById("cubicDecimeterAndLiter").onchange = function () {
    lastEditedArea = "decimeterAndLiter";
};
document.getElementById("cubicCentimeterAndMilliliter").onchange = function () {
    lastEditedArea = "centimeterAndMilliliter";
};
document.getElementById("gallon").onchange = function () {
    lastEditedArea = "gallon";
};
document.getElementById("megaliter").onchange = function () {
    lastEditedArea = "megaliter";
};
document.getElementById("cubicInch").onchange = function () {
    lastEditedArea = "inch";
};
document.getElementById("tablespoon").onchange = function () {
    lastEditedArea = "tablespoon";
};
document.getElementById("teaspoon").onchange = function () {
    lastEditedArea = "teaspoon";
};

/**
 * Converts Volume - Unit values used: Cubic Meters, Cubic Decimetre/Litre, Cubic Centimeters, Millilitre, Megalitre,
 * Cubic Inch, Tablespoon, Teaspoon.
 */
function ConvertVolume() {

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

    if (lastEditedArea === "cubicMeter") {
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
    else if (lastEditedArea === "cubicCentimeterAndMilliliter") {
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
    else if (lastEditedArea === "gallon") {
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
    else if (lastEditedArea === "megaliter") {
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
    } //VOU AQUI CARALHO. PARA BAIXO AINDA É TUDO COPIADO CARALHO
    else if (lastEditedArea === "cubicInch") {
        conversionM3 = cubicInch * 2589990;
        conversionD3AndL = cubicInch * 2.58999;
        conversionC3AndMl = cubicInch * 25899900000;
        conversionGl = cubicInch * 27878420.34;
        conversionMgL = cubicInch * 4014492529;
        conversionTbS = cubicInch * 3097602.26;
        conversionTeaS = cubicInch * 258.999;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedArea === "cubicDecimeterAndLiter") {
        conversionM3 = cubicDecimeterAndLiter * 1000000;
        conversionIN3 = cubicDecimeterAndLiter * 0.3861018768;
        conversionC3AndMl = cubicDecimeterAndLiter * 10000000000;
        conversionGl = cubicDecimeterAndLiter * 10763910.417;
        conversionMgL = cubicDecimeterAndLiter * 1550003100;
        conversionTbS = cubicDecimeterAndLiter * 1195990.0463;
        conversionTeaS = cubicDecimeterAndLiter * 100;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedArea === "tablespoon") {
        conversionM3 = tablespoon * 0.83612736;
        conversionIN3 = tablespoon * 0.0000003228303429;
        conversionC3AndMl = tablespoon * 8361.2736;
        conversionGl = tablespoon * 9;
        conversionMgL = tablespoon * 1296;
        conversionD3AndL = tablespoon * 0.00000083612736;
        conversionTeaS = tablespoon * 0.0000836127;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("cubicDecimeterAndLiter").value = conversionD3AndL;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedArea === "teaspoon") {
        conversionM3 = teaspoon * 10000;
        conversionIN3 = teaspoon * 0.0038610188;
        conversionC3AndMl = teaspoon * 100000000;
        conversionGl = teaspoon * 107639.10417;
        conversionMgL = teaspoon * 15500031;
        conversionD3AndL = teaspoon * 0.01;
        conversionTbS = teaspoon * 11959.900463;

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
    document.getElementById("tablespoon").innerHTML = conversionTbS;
    document.getElementById("megaliter").innerHTML = conversionMgL;
    document.getElementById("gallon").innerHTML = conversionGl;
    document.getElementById("teaspoon").value = conversionTeaS;
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
