function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	while(contador < 5)
	{
		contador ++;
		numero = prompt("Ingrese un nùmero.");
		numero = parseInt(numero);
		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		if(numero < 0)
		{
			negativo = negativo * numero;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN