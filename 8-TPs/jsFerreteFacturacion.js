/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultadoSuma;

	numero1 = document.getElementById('PrecioUno').value;
	numero2 = document.getElementById('PrecioDos').value;
	numero3 = document.getElementById('PrecioTres').value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);

	resultadoSuma = numero1 + numero2 + numero3;
	alert("El resultado de la suma es: "+resultadoSuma);

}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultado;
	var promedio;

	numero1 = document.getElementById('PrecioUno').value;
	numero2 = document.getElementById('PrecioDos').value;
	numero3 = document.getElementById('PrecioTres').value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);

	resultado = numero1 + numero2 + numero3;
	promedio = resultado / 3;
	alert("El promedio de los 3 precios es de: "+promedio);
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultadoSuma;
	var ivaValor;
	var calculoIva;
	var resultadoFinal; //variables declaradas.

	numero1 = document.getElementById('PrecioUno').value; 
	numero2 = document.getElementById('PrecioDos').value;
	numero3 = document.getElementById('PrecioTres').value; //hasta aca lo que se escribe en las cajas.

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);

	ivaValor = 21;
	resultadoSuma = numero1 + numero2 + numero3;
	calculoIva = (resultadoSuma * ivaValor)/100;
	resultadoSuma = parseInt(resultadoSuma);
	calculoIva = parseInt(calculoIva);
	resultadoFinal = resultadoSuma + calculoIva; //esta parte costo bastante, este bien o mal hecho igual funciona.

	alert("El precio final con IVA (21%) es de: $"+resultadoFinal);

}