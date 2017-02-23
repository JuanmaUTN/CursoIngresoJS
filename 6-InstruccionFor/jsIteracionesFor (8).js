function Mostrar()
{
	var contador;
	var numeroRandom;
	var cont1 = 0;
	var cont2 = 0;
	var cont3 = 0;
	var cont4 = 0;
	var cont5 = 0;
	var cont6 = 0;
	var cont7 = 0;
	var cont8 = 0;
	var cont9 = 0;
	var cont10 = 0;
	var prom1;
	var prom2;
	var prom3;
	var prom4;
	var prom5;
	var prom6;
	var prom7;
	var prom8;
	var prom9;
	var prom10;

	for(contador = 0;;)
	{
		contador ++;
		numeroRandom = Math.floor(Math.random() *10) +1;
		numeroRandom = parseInt(numeroRandom);

		switch(numeroRandom)
		{
			case 1:
			cont1 ++;
			break;

			case 2:
			cont2 ++;
			break;

			case 3:
			cont3 ++;
			break;

			case 4:
			cont4 ++;
			break;

			case 5:
			cont5 ++;
			break;

			case 6:
			cont6 ++;
			break;

			case 7:
			cont7 ++;
			break;

			case 8:
			cont8 ++;
			break;

			case 9:
			cont9 ++;
			break;

			case 10:
			cont10 ++;
			break;
		}
				
		if(contador == 100000) //se frena la ejecucion al llegar a la repeticion 100.000
		{
			console.log("Break =)");
			break;
		}
	}

	prom1 = cont1 / 100000;
	prom2 = cont2 / 100000;
	prom3 = cont3 / 100000;
	prom4 = cont4 / 100000;
	prom5 = cont5 / 100000;
	prom6 = cont6 / 100000;
	prom7 = cont7 / 100000;
	prom8 = cont8 / 100000;
	prom9 = cont9 / 100000;
	prom10 = cont10 / 100000;

	console.log("Porcentaje de 1s: "+prom1+"%");
	console.log("Porcentaje de 2s: "+prom2+"%");
	console.log("Porcentaje de 3s: "+prom3+"%");
	console.log("Porcentaje de 4s: "+prom4+"%");
	console.log("Porcentaje de 5s: "+prom5+"%");
	console.log("Porcentaje de 6s: "+prom6+"%");
	console.log("Porcentaje de 7s: "+prom7+"%");
	console.log("Porcentaje de 8s: "+prom8+"%");
	console.log("Porcentaje de 9s: "+prom9+"%");
	console.log("Porcentaje de 10s: "+prom10+"%");

 

}//FIN DE LA FUNCIÓN

/*
al generar nùmeros random del 0 al 10 se debe contar 
la cantidad de cada una de estas cifras, 
repetir la iteracion para lanzar el random
100000 veces e informar:
1) la cantidad de veces que saliò cada numero del 0 al 10
2) el porcentaje de veces que saliò cada nùmero con respecto al total
*/