function Mostrar() //iteracion hasta que el usuario quiera. 
{
	//alert("funciona");
	var nota;
	var contador = 0;
	var sumadorNota = 0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masViejo;
	var edadMasViejo;
	var mujeresAprobadas = 0;
	var hombresAprobados25 = 0;
	var mujeresMenores20 = 0;
	var totalHombres = 0;
	var sumadorNotaH = 0;
	var promedioNotaH;
	var totalMujeres = 0;
	var sumadorNotaM = 0;
	var promedioNotaM;
	var mejorNotaM = 0;
	var mejorNotaH = 0;
	var nombreMejorNM;
	var nombreMejorNH;


	while(contador < 3)
	{
		contador ++;
		nota = prompt("Por favor ingrese su nota.");
		nota = parseInt(nota);
		while(nota < 0 || nota > 10)
		{
			nota = prompt("Por favor ingrese su nota. (entre 0 y 10)");
			nota = parseInt(nota);	
		}
		
		sumadorNota = sumadorNota + nota;
		
		edad = prompt("Ingrese su edad.");
		edad = parseInt(edad);
		while(edad < 0 || edad > 100)
		{
			edad = prompt("Ingrese una edad vàlida. (entre 0 y 100)");
			edad = parseInt(edad);
		}
		nombre = prompt("Ingrese su nombre.");

		sexo = prompt("Ingrese su sexo.");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese un sexo valido. ('f' ó 'm')");
		}
		//acà termino la carga y validacion de datos.
		//comenzamos a hacer las operaciones necesarias.
		if(contador == 0)
		{
			masViejo = nombre;
			edadMasViejo = edad;
		}
		else
		{
			if(edad > edadMasViejo)
			{
				masViejo = nombre;
				edadMasViejo = edad;	
			}
		}
		
		//mujeres aprobadas
		if(nota >= 4 && sexo == "f")
		{
			mujeresAprobadas ++;	
		}
		
		//hombres aprobados mayores a 25
		if(nota >= 4 && sexo == "m")
		{
			if(edad > 25)
			{
			hombresAprobados25 ++;
			}
		}
		
		//cantidad de mujeres menores a 20
		if(edad < 20 && sexo == "f")
		{
			mujeresMenores20 ++;	
		}
		
		//nombre de la mujer con la mejor nota
		if(sexo == "f")
		{
			if(nota > mejorNotaM)
			{
				mejorNotaM = nota;
				nombreMejorNM = nombre;
			}
		}

		//nombre del hombre con mejor nota
		if(sexo == "m")
		{
			if(nota > mejorNotaH)
			{
				mejorNotaH = nota;
				nombreMejorNH = nombre;
			}
		}
	
		//promedio nota hombres
		if(sexo == "m")
		{
			totalHombres ++;
			sumadorNotaH = sumadorNotaH + nota;
			promedioNotaH = sumadorNotaH / totalHombres;			
		}

		//promedio nota mujeres
		if(sexo == "f")
		{
			totalMujeres ++;
			sumadorNotaM = sumadorNotaM + nota;
			promedioNotaM = sumadorNotaM / totalMujeres;			
		}

		//porcentaje aprobados vs desaprobados

		
		//sexo y nombre de la 1er persona que saque 10










	}

	promedioNota = sumadorNota / contador;

	console.log("Promedio de notas: "+promedioNota);
	console.log("Mujeres aprobadas: "+mujeresAprobadas);
	console.log("Hombres mayores a 25 aprobados: "+hombresAprobados25);
	console.log("Mujeres menores a 20: "+mujeresMenores20);
	console.log("El promedio de notas de los hombres es de: "+promedioNotaH);
	console.log("El promedio de notas de las mujeres es de: "+promedioNotaM);
	console.log("La mejor nota entre las mujeres la ha obtenido: "+nombreMejorNM+" con un "+mejorNotaM);
	console.log("La mejor nota entre los hombres la ha obtenido: "+nombreMejorNH+" con un "+mejorNotaH);


/*

1) cantidad de mujeres aprobadas.
2) cantidad de hombres mayores a 25 aprobados.
3) cantidad de mujeres menores a 20 años.
4) nombre de la mujer con mejor nota.
5) nombre del hombre con mejor nota.
6) promedio nota de los hombres.
7) promedio de notas de las mujeres.
8) porcentaje de aprobados VS desaprobados.
9) el sexo y el nombre de la primer persona que se saque 10.

*/


}//FIN DE LA FUNCIÒN












/*  var contador=0;
	var numero;
	var sumaNegativo = 0;
	var sumaPositivo = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPar = 0;
	//declarar contadores y variables 
	
	while(contador < 10)
	{
		contador ++;
		numero = prompt("Ingrese un nùmero");
		numero = parseInt(numero);

		if(numero < 0)
		{
			sumaNegativo = sumaNegativo + numero;
			contadorNegativos ++;
		}
		else 
		{
				if(numero > 0)
				{
					sumaPositivo = sumaPositivo + numero;
					contadorPositivos ++;
				}
				else 
				{
					contadorCeros ++;
				}
		}
		if(numero % 2 == 0)
		{
			contadorPar ++;
		}

	}
	var promedioNegativo = sumaNegativo / contadorNegativos;
	var promedioPositivo = sumaPositivo / contadorPositivos;
	var diferencia = sumaPositivo - sumaNegativo;

	document.write("La suma de los negativos es: "+sumaNegativo+"<br>");
	document.write("La suma de los positivos es: "+sumaPositivo+"<br>");
	document.write("La cantidad de positivos es de: "+contadorPositivos+"<br>");
	document.write("La cantidad de negativos es de: "+contadorNegativos+"<br>");
	document.write("La cantidad de 0s es de: "+contadorCeros+"<br>");
	document.write("La cantidad de nùmeros pares es de: "+contadorPar+"<br>");
	document.write("El promedio de nùmeros positivos es de: "+promedioPositivo+"<br>");
	document.write("El promedio de nùmeros negativos es de: "+promedioNegativo+"<br>");
	document.write("La diferencia entre positivos y negativos es de: "+diferencia+"<br>");*/

