// TEMPERATURA

function ConvertFahrenheit()
{
    t = document.calcform.f.value;
    if( t=='' ) return;
    t = parseFloat(t);
    if( t<-459.67 ) {
        document.calcform.f.style.backgroundColor = "#ffdddd";
        return;
    }
    creset();
    document.calcform.f.value   = roundnum(t,              4);
    document.calcform.cel.value = roundnum((t-32)*5/9,     4);
    document.calcform.k.value   = roundnum((t+459.67)*5/9, 4);
}

function ConvertCelsius()
{
    t = document.calcform.cel.value;
    if( t=='' ) return;
    t = parseFloat(t);
    if( t<-273.15 ) {
        document.calcform.cel.style.backgroundColor = "#ffdddd";
        return;
    }
    creset();
    document.calcform.f.value   = roundnum((t*9/5+32),     4);
    document.calcform.cel.value = roundnum(t,              4);
    document.calcform.k.value   = roundnum((t+273.15),     4);
}

function ConvertKelvin()
{
    t = document.calcform.k.value;
    if( t=='' ) return;
    t = parseFloat(t);
    if( t<0 ) {
        document.calcform.k.style.backgroundColor = "#ffdddd";
        return;
    }
    creset();
    document.calcform.f.value   = roundnum((t*9/5-459.67), 4);
    document.calcform.cel.value = roundnum((t-273.15),     4);
    document.calcform.k.value   = roundnum(t,              4);
}