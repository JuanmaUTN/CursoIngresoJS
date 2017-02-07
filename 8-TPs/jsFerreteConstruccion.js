/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroTerreno;
	var alambreNecesario;

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	perimetroTerreno = (largoTerreno + anchoTerreno)*2;
	perimetroTerreno = parseInt(perimetroTerreno);

	alambreNecesario = perimetroTerreno * 3;

	alert("Se necesitarán comprar "+alambreNecesario+" metros de alambre.");


}
function Circulo () 
{
	var radioTerreno;
	var perimetroTerreno;
	var alambreNecesario;

	radioTerreno = document.getElementById('Radio').value;
	radioTerreno = parseInt(radioTerreno);

	perimetroTerreno = (2 * 3.14)*radioTerreno;
	alambreNecesario = perimetroTerreno * 3;

	alert("Se necesitarán comprar "+alambreNecesario+" metros de alambre.");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var bolsasCemento;
	var bolsasCal;
	var bolCemNecesarias;
	var bolCalNecesarias;
	var superficie;

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;
	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	bolsasCemento = 2;
	bolsasCal = 3;

	superficie = largoTerreno * anchoTerreno;
	superficie = parseInt(superficie);

	bolCemNecesarias = superficie * bolsasCemento;
	bolCalNecesarias = superficie * bolsasCal;

	alert("Serán necesarias "+bolCemNecesarias+" bolsas de cemento y "+bolCalNecesarias+" bolsas de cal.");
}