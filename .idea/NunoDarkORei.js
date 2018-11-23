/**
 * initializes de lastEdited flag to anything that the user inputs.
 * The default type is chosen by the programmer.
 */
var lastEditedArea = "cubicmetre";
/*
var lastEditedWeight = "kilos";
 */

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

/**
 * Certifies when and where the input field is changed to, then it sets de lastEdited flad to whatever it is.
 */
//Volume
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
//Numeros
document.getElementById("decimal").onchange = function () {
    lastEditedWeight = "decimal";
};
document.getElementById("binary").onchange = function () {
    lastEditedWeight = "binary";
};
document.getElementById("hexadecimal").onchange = function () {
    lastEditedWeight = "hexadecimal";
};
document.getElementById("octal").onchange = function () {
    lastEditedWeight = "octal";
};

/**
 * Converts Volume - Unit values used: Cubic Meters, Cubic Decimetre/Litre, Cubic Centimeters, Millilitre, Megalitre,
 * Cubic Inch, Tablespoon, Teaspoon.
 */
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
    }
    else if (lastEditedArea === "cubicInch") {
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
    else if (lastEditedArea === "cubicDecimeterAndLiter") {
        conversionM3 = cubicDecimeterAndLiter * 0.001;
        conversionIN3 = cubicDecimeterAndLiter * 61.0237441;
        conversionC3AndMl = cubicDecimeterAndLiter * 1000;
        conversionGl = cubicDecimeterAndLiter * 0.264172052;
        conversionMgL = cubicDecimeterAndLiter * 0.000001;
        conversionTbS = cubicDecimeterAndLiter * 67.6280454;
        conversionTeaS = cubicDecimeterAndLiter * 202.884136;

        document.getElementById("cubicMeter").value = conversionM3;
        document.getElementById("cubicInch").value = conversionIN3;
        document.getElementById("cubicCentimeterAndMilliliter").value = conversionC3AndMl;
        document.getElementById("gallon").value = conversionGl;
        document.getElementById("megaliter").value = conversionMgL;
        document.getElementById("tablespoon").value = conversionTbS;
        document.getElementById("teaspoon").value = conversionTeaS;
    }
    else if (lastEditedArea === "tablespoon") {
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
    else if (lastEditedArea === "teaspoon") {
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
    document.getElementById("tablespoon").innerHTML = conversionTbS;
    document.getElementById("megaliter").innerHTML = conversionMgL;
    document.getElementById("gallon").innerHTML = conversionGl;
    document.getElementById("teaspoon").value = conversionTeaS;
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

//Pessoal, não faço ideia se isto está funcionando
    //Formulas funcionam todas à base desta função javascript "parseInt(num, baseFrom).toString(baseTo)"
    //Sendo que a baseFrom e To é o TIPO de numero, sendo:
    //binario = 2
    //octal = 8
    //decimal = 10
    //hexadecimal = 16
    if (lastEditedTemp === "decimal") {
        str = "decimal";
        conversionBn = (+str).toString(2);
        conversionHx = (+str).toString(16);
        conversionOc = (+str).toString(8);
    }
//Idem idem aspas aspas
    else if (lastEditedTemp === "binary") {
        str = "binary";
        conversionDc = parseInt(+str, 2).toString(10);
        conversionHx = parseInt(+str, 2).toString(16);
        conversionOc = parseInt(+str, 2).toString(8);
    }
    else if (lastEditedTemp === "hexadecimal") {
        str = "hexadecimal";
        conversionDc = parseInt(+str, 16).toString(10);
        conversionBn = parseInt(+str, 16).toString(2);
        conversionOc = parseInt(+str, 16).toString(8);
    }
    else if (lastEditedTemp === "octal") {
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

function reset() {
    resetArea();
}

function resetVolume() {
    document.getElementById("cubicMeter").value = 0;
    document.getElementById("cubicDecimeterAndLiter").value = 0;
    document.getElementById("cubicCentimeter").value = 0;
    document.getElementById("milliliter").value = 0;
    document.getElementById("megaliter").value = 0;
    document.getElementById("cubicInch").value = 0;
    document.getElementById("tablespoon").value = 0;
    document.getElementById("teaspoon").value = 0
}

function resetNumber() {
    document.getElementById("decimal").value = 0;
    document.getElementById("binary").value = 0;
    document.getElementById("octal").value = 0;
    document.getElementById("hexadecimal").value = 0;
}