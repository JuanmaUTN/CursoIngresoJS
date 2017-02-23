/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
function comenzar()
{
	var numeroUno;
	var numeroDos;
	var operacion;

	numeroUno = Math.floor(Math.random() *10) +1;
	numeroUno = parseInt(numeroUno);
	numeroDos = Math.floor(Math.random() *10) +1;
	numeroDos = parseInt(numeroDos);

	document.getElementById('PrimerNumero').value = numeroUno;
	document.getElementById('SegundoNumero').value = numeroDos;

	operacion = Math.floor(Math.random() *4) +1;
	operacion = parseInt(operacion);

	switch(operacion)
		{
			case 1:
			document.getElementById('Operador').value = "Suma (+)";
			break;

			case 2:
			document.getElementById('Operador').value = "Resta (-)";
			break;

			case 3:
			document.getElementById('Operador').value = "Multiplicación (x)"
			break;

			case 4:
			document.getElementById('Operador').value = "División (/)"
			break;
		}

	if(operacion == 1)	
		{
			resultado = numeroUno + numeroDos;
		}
	else
		{
			if(operacion == 2)
				{
					resultado = numeroUno - numeroDos;
				}
			else
				{
					if (operacion == 3) 
						{
							resultado = numeroUno * numeroDos;
						}
					else
						{
							resultado = numeroUno / numeroDos;
						}
				}
		}
	console.log(resultado);

}//FIN DE LA FUNCIÓN
function Responder()
{
	var respuesta;
	var operacion;
	var resultado;

	respuesta = document.getElementById('Respuesta').value;
	respuesta = parseInt(respuesta);
	resultado = parseInt(resultado);
	
	if(respuesta == resultado)
		{
			alert("Muy bien!");
		}
	else 
		{
			alert("Incorrecto.");
		}


}//FIN DE LA FUNCIÓN
