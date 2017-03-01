function Mostrar()
{
	var numero;
	var numerosPares = 0;
	var promedioTotalNumeros;
	var acumuladorNumerosIngr = 0;
	var numeroMaximo = 0;
	var numeroMinimo = 0;
	var contador = 0;
	

	while(contador < 10)
	{
		contador ++;
		numero = prompt("Ingrese un nùmero.");
		numero = parseInt(numero);

		while(numero < 0)
		{
			numero = prompt("Ingrese un nùmero positivo.");
			numero = parseInt(numero);
		}
		//validaciòn de que el nùmero sea positivo.
		acumuladorNumerosIngr = acumuladorNumerosIngr + numero;
		
		if(contador == 1)
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
		}

		if(numero > numeroMaximo)//numero maximo
		{
			numeroMaximo = numero;
		}

		if(numero < numeroMinimo)//numero minimo
		{
			numeroMinimo = numero;
		}

		if(numero % 2 == 0)//numeros pares
		{
			numerosPares ++;
		}


	}

	
	document.write("Suma de todos los nùmeros: "+acumuladorNumerosIngr+"<br>");


//	a) la cantidad de números pares.

	
	document.write("Nùmeros pares hallados: "+numerosPares+"<br>");

//	b) el promedio de todos los números ingresados.

	promedioTotalNumeros = acumuladorNumerosIngr / 10;
	document.write("Promedio total: "+promedioTotalNumeros+"<br>");

//	d) numero maximo y minimo.

	document.write("El nùmero màximo es: "+numeroMaximo+"<br>");
	document.write("El nùmero mìnimo es: "+numeroMinimo+"<br>");


	



	




/*	8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.
*/




}//FIN DE LA FUNCIÓN