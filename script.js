function add (x,y) {
    return x+y
}


function subtract (x,y) {
	return x-y;	
}


function multiply (x,y) {
	return x*y;
}
function divide (x,y){
    return x/y;
}



function operate (){
    if(operations.length==1){
        currentOperator = operations[0];
        operations.pop();
        arr.push(parseInt(document.getElementById("answer").value)); 
        num2=arr[0];
        arr.pop();
    } else {
        currentOperator=operations[0];
        operations.shift();
        num2=arr[0];
        arr.pop();
    }
    if (currentOperator=="+"){
        let sum = add(num1,num2);
        document.getElementById("answer").value = sum;
    } else if (currentOperator=="-"){
        let difference = subtract(num1,num2);
        document.getElementById("answer").value = difference;
    } else if (currentOperator=="*"){
        let product = multiply(num1,num2);
        document.getElementById("answer").value = product;
    } else if (currentOperator=="/"){
        let quotient = divide(num1,num2);
        document.getElementById("answer").value = quotient;
    }
   arr.push(parseInt(document.getElementById("answer").value))
}

//You’ll need to store the first number that is input into the calculator 
//when a user presses an operator, and also save which operation has been 
//chosen and then operate() on them when the user presses the “=” key.

//numbers and operators stored in arrays
let operations = [];
let currentOperator;
let arr = [];
let num1;
let num2;

//add to display 
function displayNumber (currentVal){
    //clears old number from display and stores it
    if(arr.length>0){
        num1=arr[0];
        arr.pop();
        document.getElementById("answer").value = "";
    }
    document.getElementById("answer").value = document.getElementById("answer").value + currentVal;
}

function clearMe() {
    document.getElementById("answer").value = "";
    arr=[];
    operations=[];
}

//when clicked the number will show and be stored in numbers function
function clickMe (clicked) {
    let num = clicked.value;
    console.log(arr);
    displayNumber (num);
}


//function to store operators and previous number
function operator(clicked) {
    //store number in array
    arr.push(parseInt(document.getElementById("answer").value)); 
    console.log(arr);
    //store operator
    operations.push(clicked.value);
    console.log(operations);
    //if operator pressed again, operate with the first two values and then delete the last operator using pop 
    if (operations.length>1){
        
        operate();  
    }
}

