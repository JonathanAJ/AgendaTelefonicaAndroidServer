$(document).ready(function(){
	var url = new Firebase("https://minhagendatelefonica.firebaseio.com/");

	url.child("Contatos").on("value", function(snapshot) {
		$('#listarContatos').empty();
		snapshot.forEach(function(childSnapshot){
		var contato = childSnapshot.val();
		var component = "<div class='ui card'>"+
						   "<a class='small image' href='#'>"+
						      "<img class='ui tiny circular image' src='data:image/png;base64," + contato.imagem + "'>"+
						    "</a>"+
						    "<div class='content'>"+
						      "<span class='header'>" + contato.nome + "</span>"+
						      "<div class='meta'>"+
						        "<span class='date'> Tel:" + contato.telefone + "</span>"+
						      "</div>"+
						    "</div>"+
						  "</div>";
		$("#listarContatos").append(component);
		});
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

});