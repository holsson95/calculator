function add (x,y) {
	return x+y;
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

function power(x,y) {
	return Math.pow(x,y);
}

function operate (x,operator,y){
    if (operator=="+"){
        add(x,y);
    } else if (operator =="-"){
        subtract(x,y);
    } else if (operator=="*"){
        multiply(x,y);
    } else if (operator=="/"){
        divide (x,y);
    } else {
        return "ERROR"
    }
}