//<![CDATA[
/*mostrar morada, caso selecione a opcao morada*/
function mostrarMorada() {
		 divLabel = document.getElementById("contactoLabel");
		 divInput = document.getElementById("contactoInput");
		 divLabel.innerHTML = '<label>Morada*:</label>';
		 divInput.innerHTML = '<input class="elementosInputFormulario" type="text" name="morada"/>';
	}
/*mostrar email, caso selecione a opcao email*/
function mostrarEmail() {
	 divLabel = document.getElementById("contactoLabel");
	 divInput = document.getElementById("contactoInput");
	 divLabel.innerHTML = '<label>Email*:</label>';
	 divInput.innerHTML = '<input class="elementosInputFormulario" type="text" name="email"/>';
}
/*mostrar telefone, caso selecione a opcao telefone*/
function mostrarTelefone() {
	 divLabel = document.getElementById("contactoLabel");
	 divInput = document.getElementById("contactoInput");
	 divLabel.innerHTML = '<label>Telefone*:</label>';
	 divInput.innerHTML = '<input class="elementosInputFormulario" type="text" name="telefone"/>';
}
/*validar o form*/
var listaError;
function validateForm(){
	var errorDiv = document.getElementById("error");
		errorDiv.innerHTML ='';
	listaError ="";
	valido =  true;
	
	var nome = document.forms["contactoForm"][0].value;
	var assunto = document.forms["contactoForm"][3].value;
	var texto = document.forms["contactoForm"][4].value;
	var contacto = document.forms["contactoForm"][8].value;

	if(nome==null || nome.trim()==""){
		listaError +='<div class="error">Nome por preencher.</div>';
		valido = false;
	}
	if(assunto == null || assunto.trim()==""){
		listaError +='<div class="error">Assunto por preencher.</div>';
		valido = false;
	}
	if(texto == null || texto.trim()==""){
		listaError +='<div class="error">Texto por preencher.</div>';
		valido = false;
	}
	if(contacto == null || contacto.trim()==""){
		listaError +='<div class="error">Contacto por preencher.</div>';
		valido = false;
	}
	
	if(valido == false){
		errorDiv.innerHTML = listaError;
		return false;
	}else{
		errorDiv.innerHTML = "enviado com sucesso!";
		return true;
	}
}
/*init para a pagina formularioContacto*/
jQuery(document).ready(function() {
	mostrarEmail();
	document.forms["contactoForm"]["tipoContacto"][0].checked=true;
});

function resetForm(){
		mostrarEmail();
}
//]]>