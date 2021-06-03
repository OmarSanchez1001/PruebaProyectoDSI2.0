let p1 = document.getElementById('P1');
let p2 = document.getElementById('P2');

function Agregar(num){
	p1.innerHTML += num
	Calcular();
}

function Calcular(){
	p2.innerHTML = eval(p1.innerHTML);
}

function Borrar(){
	p1.innerHTML = "";
	p2.innerHTML = "";
}

function Resultado(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = "";
}

function Light(){
	calculadora.classList.remove('Dark');
	calculadora.classList.add('Light');
	let boton = document.querySelectorAll('.boton');

	let t = boton.length;
	for(i = t - 1; i >= 0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('#B_A').classList.add('activo');
	document.querySelector('#B_B').classList.remove('activo');
	document.querySelector('body').classList.remove('Light');
	document.querySelector('body').classList.add('Dark');
}

function Dark(){
	calculadora.classList.remove('Light');
	calculadora.classList.add('Dark');
	let boton = document.querySelectorAll('.boton');

	let t = boton.length;
	for(i = t - 1; i >= 0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('#B_A').classList.add('activo');
	document.querySelector('#B_B').classList.remove('activo');
	document.querySelector('body').classList.remove('Light');
	document.querySelector('body').classList.add('Dark');
}