//<![CDATA[
/*bd*/
var listaEspecialidades = new Array();
listaEspecialidades[0] = "Cardiologia";
listaEspecialidades[1] = "Neurologia";
listaEspecialidades[2] = "Ortopedia";
listaEspecialidades[3] = "Pediatria";
listaEspecialidades[4] = "Urologia";
listaEspecialidades[5] = "Psiquiatria e Psicologia";
/*combobox com a lista de valencias*/
function mostrarValencias() {
	 div = document.getElementById("tipoNoticiaArtigo");
	 div.innerHTML = '<select class="elementosInputFormularioSelect" name="referente"><option value="residencial">Residencial</option><option value="lar">Lar</option><option value="internamento">Internamento</option><option value="apoioDomiciliario">Apoio domiciliário</option></select>';
}
/*combobox com a lista de especialidades*/
function mostrarEspecialidades() {
	 div = document.getElementById("tipoNoticiaArtigo");
	 div.innerHTML = '';
	 aux = '<select class="elementosInputFormularioSelect" name="referente">';
	 for(k = 0; k < listaEspecialidades.length;k++){
		aux += '<option value="'+listaEspecialidades[k]+'">'+listaEspecialidades[k]+'</option>';
	}
	aux += '</select>';
	div.innerHTML = aux;
}
/*expressao regular e validacao do formulario*/
var listaError;
var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
function validateForm(){
	var errorDiv = document.getElementById("error");
		errorDiv.innerHTML ='';
	listaError ="";
	valido =  true;

	var titulo = document.forms["noticiaArtigo"][0].value;
	var textoResumo = document.forms["noticiaArtigo"][1].value;
	var texto = document.forms["noticiaArtigo"][2].value;
	var file = document.forms["noticiaArtigo"][3].value;
	var data = document.forms["noticiaArtigo"][4].value;
	var autor = document.forms["noticiaArtigo"][5].value;
	var referente = document.forms["noticiaArtigo"][6].value;		

	if(titulo==null || titulo.trim()==""){
		listaError +='<div class="error">Titulo por preencher.</div>';
		valido = false;
	}
	if(textoResumo == null || textoResumo.trim()==""){
		listaError +='<div class="error">Resumo do texto por preencher.</div>';
		valido = false;
	}
	if(file == null || file.trim()==""){
		listaError +='<div class="error">File por preencher.</div>';
		valido = false;
	}
	if(autor == null || autor.trim()==""){
		listaError +='<div class="error">Autor por preencher.</div>';
		valido = false;
	}
	
	if(!(date_regex.test(data))){
		listaError +='<div class="error">Data invalida.</div>';
		valido = false;
	}
	if(referente == null || referente.trim()==""){
		listaError +='<div class="error">Tem que escolher a que esta acossiado esta noticia/artigo.</div>';
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
/*init da pagina addNoticiaArtigo*/
jQuery(document).ready(function() {
	mostrarValencias();
	document.forms["noticiaArtigo"]["tipo"][0].checked=true;
});
//]]>