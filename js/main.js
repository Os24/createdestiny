$(document).ready(function(){

})


function printName() {
	var name = $("#user-name").val();
	console.log(name);
	$("#name-receiver").text(name);

}
function styleName(referencia){
var parentDiv = $(referencia).closest("#myForm");
$(parentDiv).css({
	"background":"lightblue"
})


}

var destinos=[{// creacion de  un arreglo de 4 objetos con cuatro elementos cada 1
	"id":0,
	"nombre":"Shocker",
	"destino":"Germany",
	"precio":199
}
,{
	"id":1,
	"nombre":"Stallone",
	"destino":"Mmexico",
	"precio":200
}
,{
	"id":2,
	"nombre":"Vandamme",
	"destino":"morelos",
	"precio":200
}
,{
	"id":3,
	"nombre":"Trump",
	"destino":"Teques",
	"precio":200
}];

function destinycreate(){ //funcion que se va a llamar cuando se presione el boton style
	for (var i = 0; i < destinos.length; i++) { //ciclo que va a iterar hasta que haya recorrido todos los objetos del arreglo
		$("#destiny_wrapper").append(//sintaxis jquery que recibe un identificador para saber a donde imprimirá los elementos de cada objeto del arreglo
                                     //append es un metodo de jquery para manipular el dom, 
                                     //en este caso se uso para imprimir 
                                     //elementos html en un identificador especifico
									"<div class=panel panel-default>"+ //jquery recibe html mediante strings por lo que se utiliza el +
																		//para concatenar
									"<div class=panel-body>"+

      								"<p>"+destinos[i].id+"</p>"+// se concatena cada elemento del objeto para que se imprima cadq uno
      															//de forma independiente 
      								"<p>"+destinos[i].nombre+"</p>"+
      								"<p>"+destinos[i].destino+"</p>"+
      								"<p>"+destinos[i].precio+"</p>"+
      								 "</div>"+
      								 "</div>"




  									);//termina el metodo append
}//se cierra el for
	}//se cierra la funcion 
	


//$("#myButton").on("click",printName);