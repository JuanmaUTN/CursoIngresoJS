function Mostrar()
{
	var contador = 0;
	var numero;
	var minimo = 0;
	var maximo = 0;

	while(contador < 5)
	{
		contador ++;
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(numero > maximo)
		{
			maximo = numero;
		}
	}
	
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN