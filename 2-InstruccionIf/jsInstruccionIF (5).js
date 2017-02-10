function Mostrar()
{
//tomo la edad
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad < 13 && edad > 18) 
		{
			alert("Usted no es un adolescente.");
		}
}//FIN DE LA FUNCIÓN