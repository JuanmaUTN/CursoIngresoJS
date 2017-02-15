function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var negativo = 1;

	while(contador < 5)
		{
			contador ++;
			numero = prompt("Ingrese número");
			numero = parseInt(numero);
			while(numero < -10 || numero > 10)
				{
					numero = prompt("Reingrese número.");
					numero = parseInt(numero);
				}
			if(numero < 0)
				{
					negativo = negativo * numero;
				}
			else
				{
					acumulador = acumulador + numero;
				}
		}
	promedio = acumulador / 5;




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN