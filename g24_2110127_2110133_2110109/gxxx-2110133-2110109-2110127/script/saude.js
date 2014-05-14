//<![CDATA[
/*base de dados*/
	var elementosNoticias = new Array();
	elementosNoticias[0] = new Array("O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[1] = new Array("conteudo noticia1","images/miolo_4adf2d654a5f2.JPG","noticaArtigo.html");
	elementosNoticias[2] = new Array("conteudo noticia2","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[3] = new Array("conteudo noticia3","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[4] = new Array("conteudo noticia4","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[5] = new Array("conteudo noticia5","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[6] = new Array("conteudo noticia6","images/santa_casa100.png","noticaArtigo.html");
	elementosNoticias[7] = new Array("conteudo noticia7","images/santa_casa100.png","noticaArtigo.html");

	var noticias = new Array();
	noticias[0] = new Array(elementosNoticias[1],elementosNoticias[0],elementosNoticias[7]);
	noticias[1] = new Array(elementosNoticias[3],elementosNoticias[2],elementosNoticias[4],elementosNoticias[5]);
	noticias[2] = new Array(elementosNoticias[0],elementosNoticias[6]);
	noticias[3] = new Array(elementosNoticias[3]);
	noticias[4] = new Array(elementosNoticias[5],elementosNoticias[6],elementosNoticias[7],elementosNoticias[0],elementosNoticias[1]);
	
	var acordos = new Array();
	acordos[0] = new Array("ADSE","http://www.adse.pt/","Caixa geral de depositos","https://www.cgd.pt/Pages/Default.aspx","PT-ACS","#","SNS (só exames)","#");
	acordos[1] = new Array("5555555555555555","#","666666666","#","77777777777","#","88888888888888","#");
	acordos[2] = new Array("999999999999999","#","aaaaaaaaaaa","#","bbbbbbbbbbbbbbb ccccccccccccccccccc","#","dddddddddddd","#");
	acordos[3] = new Array("eeeeeeeeeee","#","fffffffffff","#","ggggggggg","#","hhhhhhhhhhhhhhh","#");
	acordos[4] = new Array("iiiiiiiiiiii","#","cccc","#","ggggggggg","#","llllllll","#");
	
	var profissionais = new Array();
	profissionais[0] = new Array("nome1","images/santa_casa100.png", "especialidade", "area clinica","912412343","email.php");
	profissionais[1] = new Array("nome2","images/santa_casa100.png", "especialidade", "investigacao relevante","962412343","email1.php");
	profissionais[2] = new Array("nome3","images/santa_casa100.png", "especialidade", "investigacao relevante","952412343","email2.php");
	profissionais[3] = new Array("nome4","images/santa_casa100.png", "especialidade", "investigacao relevante","942412343","email3.php");
	profissionais[4] = new Array("nome5","images/santa_casa100.png", "especialidade", "investigacao relevante","932412343","email4.php");
	
	var ListaProfissionais = new Array();
	ListaProfissionais[0] = new Array(profissionais[1],profissionais[3],profissionais[4]);
	ListaProfissionais[1] = new Array(profissionais[0],profissionais[1],profissionais[2]);
	ListaProfissionais[2] = new Array(profissionais[2],profissionais[1],profissionais[3]);
	ListaProfissionais[3] = new Array(profissionais[1],profissionais[3],profissionais[4]);
	ListaProfissionais[4] = new Array(profissionais[1],profissionais[3],profissionais[4]);
	
	var especialidade = new Array();
	especialidade[0] = new Array("<h2>Alergologia e Pneumologia</h2>","A Anestesiologia Médica é uma especialidade multivalente perita em medicina peroperatória, cuidados intensivos, emergência médica, dor aguda e dor cronica. Sendo essencial a anestesia dos actos cirúrgicos, compreende outras técnicas clinicas e cuidados assistenciais tão diversos como a analgesia do trabalho de parto, a consulta de dor, a sedação para exames complementares de diagnóstico ou estratificação do risco pré-operatório, além de actividades clássicas na emergência pré e intra-hospitalar, na dor aguda pós-operatória ou na medicina intensiva.","medio parvo1","bot1",noticias[0],acordos[0], ListaProfissionais[0]);
	especialidade[1] = new Array("titulo2","corpo de texto2","medio parvo2","bot2",noticias[1],acordos[0], ListaProfissionais[1]);
	especialidade[2] = new Array("titulo3","corpo de texto3","medio parvo3","bot3",noticias[2],acordos[1], ListaProfissionais[1]);
	especialidade[3] = new Array("titulo4","corpo de texto4","medio parvo4","bot4",noticias[3],acordos[2], ListaProfissionais[2]);
	especialidade[4] = new Array("titulo5","corpo de texto5","medio parvo5","bot5",noticias[4],acordos[3], ListaProfissionais[3]);
	especialidade[5] = new Array("titulo6","corpo de texto6","medio parvo6","bot6",noticias[0],acordos[4], ListaProfissionais[4]);
	especialidade[6] = new Array("titulo2","corpo de texto2","medio parvo2","bot7",noticias[1],acordos[1], ListaProfissionais[5]);
	especialidade[7] = new Array("titulo3","corpo de texto3","medio parvo3","bot8",noticias[2],acordos[2], ListaProfissionais[0]);
	
	var contactos = new Array();
	contactos[0] = new Array("961547892","olfdf@hotmail.com");
	contactos[1] = new Array("titulo3","mail");
	contactos[2] = new Array("titulo4","corpo de texto4");
	contactos[3] = new Array("titulo5","corpo de texto5");

	
/*variavel para intervalo e para a noticia seleciona actualmente*/
var intervalo;
var noticiaNumero;
/*usado para mostrar toda a informacao da especialidade selecionada*/
function mostrarEspecialidade(esp){
	/*informacao*/
	 divConteudo = document.getElementById("conteudoPrincipal");
	 divConteudo.childNodes[1].innerHTML = especialidade[esp][0];
	 divConteudo.childNodes[3].innerHTML = especialidade[esp][1];
	/*contactos*/
	 divConteudo = document.getElementById("contactos");
	 divConteudo.childNodes[3].innerHTML = '<b>Telefone:</b><br>'+contactos[esp][0];
	 divConteudo.childNodes[5].innerHTML = '<b>Email:</b><br>'+contactos[esp][1];
	/*noticias*/
	 noticiaNumero = 0;
	 slectNoticia(esp, noticiaNumero);
	 criarBtnNoticias(esp);
	/*medicos*/
	divMedicos = document.getElementById("medicos");
	divMedicos.innerHTML ='';
	for(k = 0; k <especialidade[esp][6].length;k++){
		divMedicos.innerHTML +='<div class="medico">'+
			'<div class="foto"><img src="'+especialidade[esp][6][k][1]+'" alt="img"><a href="medico.html" class="butao">Ver Perfil</a></div>'+
			'<div class="nomeClinico"><a href="medico.html">'+especialidade[esp][6][k][0]+'</a></div>'+
			'<div class="emailClinico"><b>E-mail: </b>'+especialidade[esp][6][k][5]+'</div>'+	
			'<div class="telefoneClinico"><b>Telefone: </b>'+especialidade[esp][6][k][4]+'</div>'+	
			'<div class="especialidadeClinico"><b>Especialidades: </b>'+especialidade[esp][6][k][2]+'</div>'+
			'<div class="areaClinica"><b>Investigação Relevante: </b>'+especialidade[esp][6][k][3]+'</div>'+						
			'<div class="marcacao"><a href="marcacaoConsulta.html" class="butao">Marcar Consulta</a></div>'+
			'</div>';
	}
	/*acordos*/
	divAcordos = document.getElementById("listaAcordos");
	divAcordos.innerHTML ='';
	for(y = 0; y < especialidade[esp][5].length; y = y+2){
		divAcordos.innerHTML +='<div class="acordo"><a href="'+especialidade[esp][5][y+1]+'">'+especialidade[esp][5][y]+'</a></div>';
	} 
}
/*cria os botoes para scroll das noticias da especialidade escolhida*/
function criarBtnNoticias(esp){	
	divNoticias = document.getElementById("noticiasEspecialidade");
	divNoticias.childNodes[9].innerHTML = '';
	for(k = 0; k < especialidade[esp][4].length;k++){
		divNoticias.childNodes[9].innerHTML +='<input class="scroll" type="image" src="images/notSelected.png" onmouseover="hover(this);" onmouseout="outHover(this)" onclick="slectNoticia('+esp+','+k+')" width="25" height="25">&nbsp;';
	} 
}
/*seleciona uma notica e chama a funcao para a mostrar*/
function slectNoticia(esp, numero){
	endInterval(intervalo);
	noticiaNumero = numero-1;
	setNoticias(esp);
	intervalo = setInterval(function(){setNoticias(esp)},6000);
}
/*mostra a noticia da especialidade selecionada*/
function setNoticias(sitio){
	divNoticias = document.getElementById("noticiasEspecialidade");
	noticiaNumero ++;
	if(noticiaNumero >= especialidade[sitio][4].length){
		noticiaNumero= 0;
	}
	divNoticias.childNodes[3].innerHTML = especialidade[sitio][4][noticiaNumero][0];
	divNoticias.childNodes[5].style.backgroundImage = "url("+especialidade[sitio][4][noticiaNumero][1]+")";
	divNoticias.childNodes[7].innerHTML = '<a class="noticiaLink" href="'+especialidade[sitio][4][noticiaNumero][2]+'">Ver Notícia</a>';
}
/*init para a pagina saude*/
jQuery(document).ready(function() {
	mostrarEspecialidade(0);
});
//]]>