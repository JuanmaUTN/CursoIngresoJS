function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() *10) +1;

	if(numeroRandom >= 9) 
		{
			alert(+numeroRandom+": Excelente");
		}
	else
		{
			if(numeroRandom <= 4)
				{
					alert(+numeroRandom+": Vamos, la proxima se puede.");
				}
			else
				{
					alert(+numeroRandom+": Aprobo");
				}
		}
	/*
	if(numeroRandom < 5)
		{
			alert("Vamos, la pròxima se puede.");
		}
	if(numeroRandom > 8)
		{
			alert("Excelente.");
		}
	if(numeroRandom > 4 && numeroRandom < 9)
		{
			alert("Aprobò.");
		}*/

}//FIN DE LA FUNCIÓN