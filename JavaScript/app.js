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
const historyContainer = $('historyContainer');
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
let history = [];

root.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "root";
    output.innerHTML = DIsplayOutput()
});
percentage.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "percentage";
    output.innerHTML = DIsplayOutput()
});
division.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "division";
    output.innerHTML = DIsplayOutput()
});
multiply.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "multiply";
    output.innerHTML = DIsplayOutput()
});
subtract.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "subtract";
    output.innerHTML = DIsplayOutput()
});
add.addEventListener('click', function() {
    timeForNum1 = false;
    equation = "add";
    output.innerHTML = DIsplayOutput()
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
    output.innerHTML = DIsplayOutput()
});
num2.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "2";
    }
    else{
        number2 += "2";
    }
    output.innerHTML = DIsplayOutput()
});
num3.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "3";
    }
    else{
        number2 += "3";
    }
    output.innerHTML = DIsplayOutput()
});
num4.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "4";
    }
    else{
        number2 += "4";
    }
    output.innerHTML = DIsplayOutput()
});
num5.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "5";
    }
    else{
        number2 += "5";
    }
    output.innerHTML = DIsplayOutput()
});
num6.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "6";
    }
    else{
        number2 += "6";
    }
    output.innerHTML = DIsplayOutput()
});
num7.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "7";
    }
    else{
        number2 += "7";
    }
    output.innerHTML = DIsplayOutput()
});
num8.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "8";
    }
    else{
        number2 += "8";
    }
    output.innerHTML = DIsplayOutput()
});
num9.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "9";
    }
    else{
        number2 += "9";
    }
    output.innerHTML = DIsplayOutput()
});
num0.addEventListener('click', function() {
    if(timeForNum1){
        number1 += "0";
    }
    else{
        number2 += "0";
    }
    output.innerHTML = DIsplayOutput()
});

AC.addEventListener('click', function() {
    number1 = "";
    result = 0;
    Reset();
    output.innerHTML = "";
});
let number1Int = 0;
let number2Int = 0;

equals.addEventListener('click', function() {
    if(number1 != "" && number2 != ""){
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
        else if(equation === "add"){
            result = (number1Int + number2Int);
            console.log('add');
        }
        console.log('equals failed');
        output.innerHTML = result;
        AddToHistory();
        number1 = result.toString();
        DisplayHistory();
        Reset();
    } else {
        output.innerHTML = "Please enter a number";
    }
});

root.addEventListener('click', function() {
    result = Math.sqrt(number1Int);
});

output.innerHTML = result;

function DIsplayOutput(){
    return `${number1} ${OutputSign()} ${number2}`;
}

function OutputSign(){
    switch (equation) {
        case "root":
            return "√";
            break;
        case "percentage":
            return "%";
            break;
        case "division":
            return "/";
            break;
        case "multiply":
            return "*";
            break;
        case "subtract":
            return "-";
            break;
        case "add":
            return "+";
            break;
        default:
            return "";
            break;
    }
}

function Reset(){
    number2 = "";
    timeForNum1 = true;
    result = 0;
}

function AddToHistory(){
    // Check if the array is in local storage
    let storedHistory = localStorage.getItem('history');
    if (storedHistory) {
        // If the array exists in local storage, update the existing array
        history = JSON.parse(storedHistory);
    } else {
        // If the array does not exist in local storage, set it
        localStorage.setItem('history', JSON.stringify(history));
    }

    // Push the new history entry to the array
    history.unshift(`${number1} ${OutputSign()} ${number2} = ${result}`);

    // Update the local storage with the updated array
    localStorage.setItem('history', JSON.stringify(history));

    console.log(history);
}
window.onload = function() {
    history = JSON.parse(localStorage.getItem('history'));
    DisplayHistory();
};

function DisplayHistory(){
    historyContainer.innerHTML = "";
    history.forEach(element => {
        historyContainer.innerHTML += `<p id="historyOutput">${element}</p>`;
    });
}
