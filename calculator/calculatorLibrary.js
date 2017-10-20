
var txtInput;
var txtResult;

function initialize() {
	txtInput = document.getElementById('txtInput');
	txtResult = document.getElementById('txtResult');
	clear();
}

function clear() {
	txtInput.value = '0';
	txtResult.value = '0';
}

function numberClick() {
	txtInput.value = txtInput.value =='0' ?
	this.innerText : txtInput.value + this.innerText;
}


