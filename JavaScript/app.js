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
const equals = $('equals');
const output = $('returnOutput');
const num1 = $('num1');
const num2= $('num2');
const num3= $('num3');
const num4= $('num4');
const num5= $('num5');
const num6= $('num6');
const num7= $('num7');
const num8= $('num8');
const num9= $('num9');
const num0= $('zero');
//#endregion
let timeForNum1 = true;
let equation = "";
let result = 0;

root.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "root";
    console.log(timeForNum1);
});
percentage.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "percentage";
    console.log(timeForNum1);
});
division.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "division";
    console.log(timeForNum1);
});
multiply.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "multiply";
    console.log(timeForNum1);
});
subtract.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "subtract";
    console.log(timeForNum1);
});
add.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "add";
    console.log(equation);
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
num0.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "0";
    }
    else{
        number2 += "0";
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

equals.addEventListener('click', function() {
    console.log(`equals click`);
    number1Int = parseInt(number1);
    number2Int = parseInt(number2);
    if(equation == "percentage"){
        result = (number1Int / 100);
        console.log('percentage');
    }
    else if(equation == "division"){
        result = (number1Int / number2Int);
        console.log('division');
    }
    else if(equation == "multiply"){
        result = (number1Int * number2Int);
        console.log('multiply');
    }
    else if(equation == "subtract"){
        result = (number1Int - number2Int);
        console.log('subtract');
    }
    else if(equation == "add"){
        result = (number1Int + number2Int);
        console.log('add');
    }
    console.log(result);
});

root.addEventListener('click', function() {
    result = Math.sqrt(number1Int);
});

output.innerHTML = result;