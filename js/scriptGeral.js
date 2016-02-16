$(document).ready(function(){
	/*
	 * Variaveis
	 */
	var id_contato;
	var img_contato;
	var nom_contato;
	var tel_contato;
	/*
	 * Abre uma modal para criar
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
	 * Ao clicar em editar/salvar
	 */
	 var btAcao = $("#bt-action");
	 btAcao.click(function(){
	 	if(btAcao.hasClass("bt-editar")){
	 		pegarValores();
	 		// BancoDeDados.js
	 		editarContato(id_contato, nom_contato, tel_contato, img_contato);
			/*
			 * Fecha a Modal
			 */
			var modal_element = $('.ui.modal.editar-contato');
			modal_element.modal({
			    blurring: true
			  }).modal('hide');

	 	}else if(btAcao.hasClass("bt-salvar")){
	 		// BancoDeDados.js
	 		salvarContato();
			/*
			 * Fecha a Modal
			 */
			var modal_element = $('.ui.modal.novo-contato');
			modal_element.modal({
			    blurring: true
			  }).modal('hide');
	 	}
	 });

	function pegarValores(){
		var modal_element = $('.ui.modal.editar-contato');
		nom_contato = modal_element.find('input[name=nome]').val();
		tel_contato = modal_element.find('input[name=telefone]').val();
		img_contato = modal_element.find('img').attr('src');
	}
});