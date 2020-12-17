// Questão 1

function quest1(){
	var num1 = document.getElementById("entrada1").value;
	var num2 = document.getElementById("entrada2").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	var resul = soma(num1, num2);
	alert("Resultado da adição: " + resul);
}

function soma(num1, num2){
	return num1 + num2;
}

// Questão 2

function quest2(){
	var num1 = document.getElementById("entrada3").value;
	var num2 = document.getElementById("entrada4").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	var resul = maior(num1, num2);
	alert("Maior número: " + resul);
}

function maior(num1, num2){
	if (num1>num2) {
		return num1;
	} else {
		return num2;
	}
}

// Questão 3

function quest3(num){
	var num = document.getElementById("entrada5").value;
	var result = 0;
	num = parseInt(num);
	for (x = 1; x <= num; x++){
    	if (num % x == 0){
    		result++;
    	}
	}
	if (result == 2){
    	alert("É número primo");
 	} else {
		alert("Não é número primo");
 	}
}

// Questão 4

function quest4(){
	var cat1 = document.getElementById("entrada6").value;
	var cat2 = document.getElementById("entrada7").value;

	cat1 = parseInt(cat1);
	cat2 = parseInt(cat2);
	var resul = hipotenusa(cat1, cat2);
	alert("Hipotenusa: " + Math.sqrt(resul));
}

function hipotenusa(cat1, cat2){
	return (cat1**2)+(cat2**2);
}

// Questão 5

function quest5(){
	var sal = document.getElementById("entrada8").value;
	var porc = document.getElementById("entrada9").value;

	sal = parseInt(sal);
	porc = parseFloat(porc);
	var novoval = dissidio(sal, porc);
	alert("Novo valor de salário: " + novoval);
}

function dissidio(sal, porc){
	return (sal+(sal*porc)/100);
}

// Questão 6

function quest6(){
	var custo = document.getElementById("entrada10").value;
	custo = parseFloat(custo);
	var distribuidor = ((custo*28)/100);
	var impostos = ((custo*45)/100);
	alert("Custo final do carro: " + (custo+distribuidor+impostos));
}

// Questão 7

function quest7(){
	var carros = document.getElementById("entrada11").value;
	var total = document.getElementById("entrada12").value;
	var salfixo = document.getElementById("entrada13").value;
	var comiss = document.getElementById("entrada14").value;

	carros = parseInt(carros);
	total = parseFloat(total);
	salfixo = parseFloat(salfixo);
	comiss = parseFloat(comiss);
	alert("Salário final: " + ((carros*comiss)+((total*5)/100)+salfixo));
}

// Questão 8

function quest8(){
	var F = document.getElementById("entrada15").value;
	F = parseFloat(F);
	alert("Temperatura em Celcius: " + ((F-32)*5/9));
}

// Questão 9

function quest9(){
	var n1 = document.getElementById("entrada16").value;
	var n2 = document.getElementById("entrada17").value;
	var n3 = document.getElementById("entrada18").value;

	n1 = parseFloat(n1);
	n2 = parseFloat(n2);
	n3 = parseFloat(n3);
	alert("Média final: " + ((n1*2+n2*3+n3*5)/10));
}

// Questão 10

function quest10(){
	var macas = document.getElementById("entrada19").value;
	macas = parseInt(macas);
	if (macas<12){
		alert("Custo total: R$" + (macas*1.30));
	} else {
		alert("Custo total: R$" + (macas*1.00));
	}
}