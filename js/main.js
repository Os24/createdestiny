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

var destinos=[{
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

function destinycreate(){
	for (var i = 0; i < destinos.length; i++) {
		$("#destiny_wrapper").append(

									"<div class=panel panel-default>"+
									"<div class=panel-body>"+

      								"<p>"+destinos[i].id+"</p>"+
      								"<p>"+destinos[i].nombre+"</p>"+
      								"<p>"+destinos[i].destino+"</p>"+
      								"<p>"+destinos[i].precio+"</p>"+
      								 "</div>"+
      								 "</div>"




  									);
}
	}
	


//$("#myButton").on("click",printName);