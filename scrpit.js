const celcius = document.querySelector("#celsius >input");
const fahrenheit = document.querySelector("#fahrenheit >input");
const kelvin = document.querySelector("#kelvin >input");
function roundtonum(num) {
    return Math.round(num*100)/100;
}
function celsiustofahrenheitandkelvin(){
    const ctemp= parseFloat(celcius.value);
    const ftemp= (ctemp*(9/5))+32;
    const ktemp= ctemp+273.15;
    fahrenheit.value=roundtonum(ftemp);
    kelvin.value=roundtonum(ktemp);
}
function fahrenheittocelsiusandkelvin() {
    const ftemp= parseFloat(fahrenheit.value);
    const ctemp=(ftemp-32)*(5/9);
    const ktemp=(ftemp+459.67)*(5/9);
    celcius.value=roundtonum(ctemp);
    kelvin.value=roundtonum(ktemp);
}
function kelvintofahrenheitandcelsius() {
    const ktemp= parseFloat(kelvin.value);
    const ctemp=(ktemp)-273.15;
    const ftemp=(9/5)*(ktemp-273)+32;
    celcius.value=roundtonum(ctemp);
    fahrenheit.value=roundtonum(ftemp);
}
celcius.addEventListener("input",celsiustofahrenheitandkelvin);
fahrenheit.addEventListener("input",fahrenheittocelsiusandkelvin);
kelvin.addEventListener("input",kelvintofahrenheitandcelsius);
