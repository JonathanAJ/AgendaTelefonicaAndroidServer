var url = new Firebase("https://minhagendatelefonica.firebaseio.com/");

$(document).ready(function(){
	url.child("Contatos").on("value", function(snapshot) {
		$('#listarContatos').empty();
		$('#load').remove();
		snapshot.forEach(function(childSnapshot){
		var contato = childSnapshot.val();
		var component = "<div class='ui card modal-edit'>"+
							"<input class='id-contato' type='hidden' value='"+ childSnapshot.key() +"'/>"+
							"<a class='small image' href='#'>"+
						      "<img class='ui tiny circular image img-contato' src='data:image/png;base64,"+ contato.imagem + "'>"+
						    "</a>"+
						    "<div class='content'>"+
						      "<span class='header nom-contato'>"+ contato.nome + "</span>"+
						      "<div class='meta'>"+
							      "<div class='ui label'>"+
							      	"<i class='phone icon'></i>"+
							      "</div>"+
						          "<span class='date tel-contato'>"+ contato.telefone + "</span>"+
						      "</div>"+
						    "</div>"+
						"</div>";
		$("#listarContatos").append(component);
		});
	}, function (errorObject){
	  console.log("The read failed: " + errorObject.code);
	});

});

function editarContato(id, nome, telefone, imagem){
	url.child("Contatos").child(id).update({
			"nome" : nome,
			"telefone" : telefone
		});
}