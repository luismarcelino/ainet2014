//<![CDATA[
/*bd*/
var consulta = new Array();
consulta[0] = "consulta";
consulta[1] = "consulta1";
consulta[2] = "consulta2";
consulta[3] = "consulta3";

var exame = new Array();
exame[0] = "exame";
exame[1] = "exame1";
exame[2] = "exame2";
exame[3] = "exame3";
/*mostrar combobox das consultas*/
function mostrarConsulta() {
	 divInput = document.getElementById("tipoConsulta");
	 listaConsultas = '<select class="elementosInputFormularioSelect">';
	 for(k=0;k<consulta.length;k++){
		listaConsultas += '<option value="'+consulta[k]+'">'+consulta[k]+'</option>';
	 }
	 listaConsultas += '</select>';
	 divInput.innerHTML = listaConsultas;
}
/*mostrar combobox dos exames*/	
function mostrarExame() {
	 divInput = document.getElementById("tipoConsulta");
	 listaConsultas = '<select class="elementosInputFormularioSelect">';
	 for(k=0;k<exame.length;k++){
		listaConsultas += '<option value="'+exame[k]+'">'+exame[k]+'</option>';
	 }
	 listaConsultas += '</select>';
	 divInput.innerHTML = listaConsultas;
}
/*Validar formulario*/
var listaError;

function validateForm(){
	var errorDiv = document.getElementById("error");
		errorDiv.innerHTML ='';
	listaError ="";
	valido = true;
	
	var nome = document.forms["marcacaoConsultaForm"][0].value;
	var dataNasc = document.forms["marcacaoConsultaForm"][2].value;
	var telefone = document.forms["marcacaoConsultaForm"][4].value;
	var dataPretendida = document.forms["marcacaoConsultaForm"][9].value;
	var horaPretendida = document.forms["marcacaoConsultaForm"][10].value;

	if(nome==null || nome.trim()==""){
		listaError +='<div class="error">Nome por preencher.</div>';
		valido = false;
	}
	if(dataNasc == null || dataNasc.trim()==""){
		listaError +='<div class="error">Data de nascimento por preencher.</div>';
		valido = false;
	}
	if(telefone == null || telefone.trim()==""){
		listaError +='<div class="error">Telefone por preencher.</div>';
		valido = false;
	}
	if(dataPretendida == null || dataPretendida.trim()==""){
		listaError +='<div class="error">Data pretendida por preencher.</div>';
		valido = false;
	}
	if(horaPretendida == null || horaPretendida.trim()==""){
		listaError +='<div class="error">Hora pretendida por preencher.</div>';
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
/*init para a pagina marcarConsulta*/
jQuery(document).ready(function() {
	mostrarConsulta();
	document.forms["marcacaoConsultaForm"]["tipo"][0].checked=true;
});

function resetForm(){
		mostrarConsulta();
}
//]]>