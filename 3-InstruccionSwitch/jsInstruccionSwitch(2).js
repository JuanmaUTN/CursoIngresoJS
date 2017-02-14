function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
		{
			case "Enero":
			case "Febrero":
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
			alert("El invierno aùn no llega.");
			break;
		
			case "Julio":
			case "Agosto":
			alert("Ya es invierno.");
			break;
		
			case "Septiembre": 
			case "Octubre": 
			case "Noviembre": 
			case "Diciembre":
			alert("Ya pasò el invierno.");
			break;		
		}



}//FIN DE LA FUNCIÓN