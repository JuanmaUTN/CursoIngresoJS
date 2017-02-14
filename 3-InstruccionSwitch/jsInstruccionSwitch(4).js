function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Este mes tiene 31 dìas.");
		break;

		case "Febrero":
		alert("Este mes tiene 28 dìas.");
		break;

		default:
		alert("Este mes tiene 30 dìas.");
		break;
	}	
	



}//FIN DE LA FUNCIÓN