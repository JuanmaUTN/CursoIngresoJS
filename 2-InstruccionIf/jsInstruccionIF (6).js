function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad > 18) {
		alert("Usted es mayor de edad");
	}
	else {
		if(edad < 13) {
			alert("Usted es menor de edad");
		} 
		else {
			alert("Usted es un adolescente");
		}
	}
	/*if (edad > 18) {
		alert("Usted es mayor de edad.");
	}
	if (edad < 13) {
		alert("Usted es menor de edad.");
	}
	if (edad < 17 && edad > 12) {
		alert("Usted es un adolescente.");
	}*/



}//FIN DE LA FUNCIÓN