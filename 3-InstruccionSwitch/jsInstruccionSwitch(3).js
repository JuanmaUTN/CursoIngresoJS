function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
	{
		case "Febrero":
		alert("Este mes no tiene màs de 29 dìas.");
		break;

		default:
		alert("Este mes tiene 30 o màs dìas.");
		break;
	}
	


}//FIN DE LA FUNCIÓN