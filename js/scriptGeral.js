$(document).ready(function(){
	/*
	 * Variaveis
	 */
	var id_contato;
	var img_contato;
	var nom_contato;
	var tel_contato;
	/*
	 * Abre a modal para criar contato
	 */
	$('#bt-add').click(function(){
		var modal_element = $('.ui.modal.novo-contato');
		/*
		 * Abre a Modal
		 */
		modal_element.modal({
		    blurring: true
		  }).modal('show');

	});
	/*
	 * Retorna os dados para a modal editar
	 */
	$('#listarContatos').on("click", ".modal-edit", function(){
		var modal_element = $('.ui.modal.editar-contato');

		var element = $(this);
		id_contato = element.find('.id-contato').val();
		img_contato = element.find('.img-contato').attr('src');
		nom_contato = element.find('.nom-contato').text();
		tel_contato = element.find('.tel-contato').text();
		/*
		 * Setando valores
		 */
		modal_element.find('input[name=nome]').val(nom_contato);
		modal_element.find('input[name=telefone]').val(tel_contato);
		modal_element.find('img').attr('src', img_contato);
		/*
		 * Abre a Modal
		 */
		modal_element.modal({
		    blurring: true
		  }).modal('show');

	});
	/*
	 * Ao clicar em editar/salvar da modal
	 */
	var btAcao = $(".bt-action");
	btAcao.click(function(){
	 	if($(this).hasClass("bt-editar")){
	 		pegarValores("editar");
	 		// BancoDeDados.js
	 		editarContato(id_contato, nom_contato, tel_contato, img_contato);
			/*
			 * Fecha a Modal
			 */
			var modal_element = $('.ui.modal.editar-contato');
			modal_element.modal({
			    blurring: true
			  }).modal('hide');

	 	}else if($(this).hasClass("bt-salvar")){
	 		pegarValores("salvar");
	 		// BancoDeDados.js
	 		salvarContato(nom_contato, tel_contato, img_contato);
			/*
			 * Fecha a Modal
			 */
			var modal_element = $('.ui.modal.novo-contato');
			modal_element.modal({
			    blurring: true
			  }).modal('hide');
	 	}else if($(this).hasClass("bt-remover")){
	 		// BancoDeDados.js
	 		removerContato(id_contato);
			/*
			 * Fecha a Modal
			 */
			var modal_element = $('.ui.modal.editar-contato');
			modal_element.modal({
			    blurring: true
			  }).modal('hide');
	 	}
	});
	 /*
	  * Pega os valores digitados nos campos da modal
	  */
	function pegarValores(acao){
		var modal_element;
		if(acao=="salvar"){
			modal_element = $('.ui.modal.novo-contato');
		}else if(acao=="editar"){
			modal_element = $('.ui.modal.editar-contato');
		}
		nom_contato = modal_element.find('input[name=nome]').val();
		tel_contato = modal_element.find('input[name=telefone]').val();
		img_contato = modal_element.find('img').attr('src');
	}
});