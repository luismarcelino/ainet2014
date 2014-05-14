// Todo o javascript presente nas páginas está contido neste documento


/* Limpar o form de search ao clicar */

	// <![CDATA[
		$(function() {
			$("#editbox_search").click(function() {
				if ($("#editbox_search").val() == "Procure no website"){
					$("#editbox_search").val(""); 
				}
			});
		});
	// ]]> 

	
/* Configuração do calendário no formulário */

	// <![CDATA[

			$(function() {
				$("#data_nascimento").datepicker({
					dateFormat: 'yy-mm-dd',
					dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
					dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
					dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
					monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
					monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
					nextText: 'Próximo',
					prevText: 'Anterior'
				});
				
				$("#data_pretendida").datepicker({
					dateFormat: 'yy-mm-dd',
					dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
					dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
					dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
					monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
					monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
					nextText: 'Próximo',
					prevText: 'Anterior'
				});
		});
	// ]]> 
	
/* Validar formulários consultas */	

	// <![CDATA[
	function validarFormConsultas()
	{

		// Validar Nome
		var nome = $("#nome").val();
		if (nome=="" || nome==null) { } else {
			alert("Por favor insira apenas caracteres alfanuméricos!");
		}

		// Validate Email
		var email = $("#email").val();
		if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
			alert("Por favor insira um email válido!");
		}
		return false;
	  
		// Validar Telefone
		var telefone = $("#telefone").val();
		if (  isNaN(   form.telefone.value  )   ) {    
			   alert("Digite apenas números!");    
			   form.telefone.select();   
		} 
		return false;  
		} 
	}
	// ]]> 
	
/* Validar formulários noticias */	

	// <![CDATA[
	function validarFormNoticias()
	{
	
		
		
	}
	// ]]> 	