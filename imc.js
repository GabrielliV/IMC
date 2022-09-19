function init() {
	var imc = document.querySelector('#imc');
    imc.addEventListener('click', calcular_imc);
}

function calcular_imc() {
	var p = document.querySelector('#p').value;
	var a = document.querySelector('#a').value;
	var r = parseFloat(p / Math.pow(a, 2).toFixed(2));
	
	if (r < 17) {
		alert("Muito abaixo do peso. IMC: " + r); 
	} else if (r >= 17 && r < 18.5) {
		alert("Abaixo do peso.");
	} else if (r >= 18.5 && r < 25) {
		alert("Peso normal.");
	} else if (r >= 25 && r < 30) {
		alert("Acima do peso.");
	} else if (r >= 30 && r < 35) { 
		alert("Obesidade I.");
	} else if (r >= 35 && r < 40) {
		alert("Obesidade II (severa).");
	} else if (r >= 40) {
		alert("Obesidade III (mórbida).");
	} else {
		alert("Informe apenas números.");
	}
}
init();
