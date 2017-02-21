function Mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
			{
			if(contador == 0)
				{
					max = numero;
					min = numero;
				}
			else 	
				{
					if(numero > max)
						{
							max = numero;
						}
					if(numero < min)
						{
							min = numero;
						}
				}
		
			}
	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;
}//FIN DE LA FUNCIÓN