function $(id){
    return document.getElementById(id);
}

//#region Doms
const AC = $('numAC');
const root = $('numRoot');
const percentage = $('numPercentage');
const division = $('numDivision');
const multiply = $('numMultiply')
const subtract = $('numSubtraction');
const add = $('numAddition');
const num1 = $('num1');
const num2= $('num2');
const num3= $('num3');
const num4= $('num4');
const num5= $('num5');
const num6= $('num6');
const num7= $('num7');
const num8= $('num8');
const num9= $('num9');
//#endregion
let timeForNum1 = true;

root.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});
percentage.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});
division.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});
multiply.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});
subtract.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});
add.addEventListener('click', function() {
    timeForNum1 = false;
    console.log(timeForNum1);
});

let number1 = "";
let number2 = "";

num1.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "1";
    }
    else{
        number2 += "1";
    }
});
num2.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "2";
        console.log(number1);
    }
    else{
        number2 += "2";
        console.log(`number2: ${number2}`);
    }
});
num3.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "3";
    }
    else{
        number2 += "3";
    }
});
num4.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "4";
    }
    else{
        number2 += "4";
    }
});
num5.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "5";
    }
    else{
        number2 += "5";
    }
});
num6.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "6";
    }
    else{
        number2 += "6";
    }
});
num7.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "7";
    }
    else{
        number2 += "7";
    }
});
num8.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "8";
    }
    else{
        number2 += "8";
    }
});
num9.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "9";
    }
    else{
        number2 += "9";
    }
});

AC.addEventListener('click', function() {
    number1 = "";
    number2 = "";
    timeForNum1 = true;
    console.log(timeForNum1);
});
let number1Int = 0;
let number2Int = 0;

equal
