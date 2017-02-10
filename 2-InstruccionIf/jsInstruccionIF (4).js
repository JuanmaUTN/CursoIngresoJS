function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad > 12)
		{
			if(edad < 18)
				{
					alert("Usted es un adolescente");
				}
		}
}//FIN DE LA FUNCIÓN