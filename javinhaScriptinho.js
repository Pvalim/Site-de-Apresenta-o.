


	function calcular_IMC(){

var peso = document.imcForm.peso.value;

var altura = document.imcForm.altura.value;


var quadrado = (altura * altura);


var calculo = (peso/quadrado);



if(calculo<18.5){
alert ("Seu indice IMC é de magreza " + calculo.toFixed(2));
}
if(calculo>=18.5 && calculo<24.9){
alert("Seu indice IMC é normal " + calculo.toFixed(2));
}

if(calculo>=25 && calculo<29.9) {
alert("Seu indice IMC é de sobrepeso " + calculo.toFixed(2));
}
if(calculo>=30 && calculo<39.9) {
alert("Seu indice IMC é de obesidade " + calculo.toFixed(2));
}
if (calculo>40)
alert("Seu indice IMC é de obesidade grave " + calculo.toFixed(2));
}

				
			

