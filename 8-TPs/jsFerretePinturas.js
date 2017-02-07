/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempCentigrados;
	var tempFahrenheit;

	tempFahrenheit = document.getElementById('Temperatura').value;
	tempFahrenheit = parseInt(tempFahrenheit);

	tempCentigrados = (((tempFahrenheit - 32) *5) /9);
	tempCentigrados = parseInt(tempCentigrados);

	alert(+tempFahrenheit+" grados Fahrenheit son "+tempCentigrados+" grados centígrados.");
}

function CentigradosFahrenheit () 
{
	var tempFahrenheit;
	var tempCentigrados;

	tempCentigrados = document.getElementById('Temperatura').value;
	tempCentigrados = parseInt(tempCentigrados);

	tempFahrenheit = (((tempCentigrados *9) /5) +32);
	tempFahrenheit = parseInt(tempFahrenheit);

	alert(+tempCentigrados+" grados centígrados son "+tempFahrenheit+" grados Fahrenheit");
}
