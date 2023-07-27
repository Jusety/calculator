const userInp = document.getElementById("userInp");
let expression = "";

function press(num) {
	expression += num;
	userInp.value = expression;
}

function equal() {
	userInp.value = eval(expression);
	expression = "";
	
}

function cls() {
	expression = "";
	userInp.value = expression;
}