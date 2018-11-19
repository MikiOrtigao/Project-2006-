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

function ConvertToMeter(){
    var inputValue = document.getElementById(/Inserir caminho do input do formulário/);
    var meterValue
    if (/se estiver no espaço dos cm/){
        meterValue = inputValue/100;
    }
    if(/se estiver no espaço do feet/){
        meterValue = inputValue*0.3048;
    }
    if(/se estiver em inches/){
        meterValue = intputValue*0.0254
    }
    if(/se estiver em milhas/){
        meterValue = intputValue*1609.344
    }
    if(/se estiver em kilometros/){
        meterValue = intputValue*1000
    }
    if(/se estiver em yards/){
        meterValue = intputValue*0.9144
    }
    document.getElementById("demo").innerHTML = meterValue + " m";
}

function ConvertToCentimeter(){
    var inputValue = document.getElementById(/Inserir caminho do input do formulário/);
    var centimeterValue
    if (/se estiver no espaço dos metros/){
        centimeterValue = inputValue*100;
    }
    if(/se estiver no espaço do feet/){
        centimeterValue = inputValue*30.48;
    }
    if(/se estiver em inches/){
        centimeterValue = intputValue*2.54
    }
    if(/se estiver em milhas/){
        centimeterValue = intputValue*160934.4
    }
    if(/se estiver em kilometros/){
        centimeterValue = intputValue*100000
    }
    if(/se estiver em yards/){
        centimeterValue = intputValue*91.44
    }
    document.getElementById("demo").innerHTML = centimeterValue + " cm";
}

function ConvertTofeet(){
    var inputValue = document.getElementById(/Inserir caminho do input do formulário/);
    var feetValue
    if (/se estiver no espaço dos metros/){
        feetValue = inputValue*3.280839895;
    }
    if(/se estiver no espaço do cm/){
        feetValue = inputValue*0.032808399;
    }
    if(/se estiver em inches/){
        feetValue = intputValue*0.0833333333
    }
    if(/se estiver em milhas/){
        feetValue = intputValue*5280
    }
    if(/se estiver em kilometros/){
        feetValue = intputValue*3280.839895
    }
    if(/se estiver em yards/){
        feetValue = intputValue*3
    }
    document.getElementById("demo").innerHTML = feetValue + " cm";
}

function ConvertToInches(){
    var inputValue = document.getElementById(/Inserir caminho do input do formulário/);
    var inchesValue
    if (/se estiver no espaço dos metros/){
        inchesValue = inputValue*39.37007874;
    }
    if(/se estiver no espaço do cm/){
        inchesValue = inputValue*0.3937007874;
    }
    if(/se estiver em feet/){
        inchesValue = intputValue*12
    }
    if(/se estiver em milhas/){
        inchesValue = intputValue*63360
    }
    if(/se estiver em kilometros/){
        inchesValue = intputValue*39370.07874
    }
    if(/se estiver em yards/){
        inchesValue = intputValue*36
    }
    document.getElementById("demo").innerHTML = inchesValue + " cm";
}
//falta milhas, kilometros e yards





//a fazer: área