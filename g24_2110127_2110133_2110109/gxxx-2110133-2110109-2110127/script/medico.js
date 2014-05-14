//<![CDATA[
/*init da pagina medico*/
jQuery(document).ready(function() {
	setEspecialidades();
	setSistemasSaude();
	iniciarNoticias();
});
function iniciarNoticias(){
	slectNoticia(0);
	criarBtnNoticias();
}
/*bd*/
var sistemasSaude = new Array();
sistemasSaude[0] = "ADSE";
sistemasSaude[1] = "Medis";
sistemasSaude[2] = "MultiCare";

var especialidades = new Array();
especialidades[0] = "Pediatra";
especialidades[1] = "Cardiologista";
especialidades[2] = "Dermatologista";
/*lista de especialidades que o medico tem*/
function setEspecialidades(){
	divEspecialidades = document.getElementById("especialidades");
	variavelEspecialidades = "<ul>";
	for(p = 0; p < especialidades.length; p++){
		variavelEspecialidades += '<li>'+especialidades[p]+'</li>' 
	}
	variavelEspecialidades += "</ul>";
	divEspecialidades.innerHTML = variavelEspecialidades;
}
/*lista de sistemas de saude que o medico tem*/
function setSistemasSaude(){
	divSistemasSaude = document.getElementById("sistemasSaude");
	variavelSistemasSaude = "<ul>";
	for(k = 0; k < sistemasSaude.length; k++){
		variavelSistemasSaude += '<li>'+sistemasSaude[k]+'</li>' 
	}
	variavelSistemasSaude += "</ul>";
	divSistemasSaude.innerHTML = variavelSistemasSaude;
}

/*base de dados*/
var elementos = new Array();
elementos[0] = new Array("O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.","images/santa_casa100.png","noticaArtigo.html");
elementos[1] = new Array("O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.","images/miolo_4adf2d654a5f2.JPG","noticaArtigo.html");
elementos[2] = new Array("conteudo noticia2","images/santa_casa100.png","noticaArtigo.html");
elementos[3]= new Array("conteudo noticia3","images/santa_casa100.png","noticaArtigo.html");

var noticia = new Array(elementos[0],elementos[1],elementos[2],elementos[3]);
/*intervalo e noticia selecionada*/
var noticiaNumero = 0;
var intervalos;
/*muda para a noticia que o contador aponta*/
function setNoticias(){
	divNoticias = document.getElementById("noticiasMedico");
	noticiaNumero ++;
	if(noticiaNumero >= noticia.length){
		noticiaNumero = 0;
	}
	divNoticias.childNodes[3].innerHTML = noticia[noticiaNumero][0];
	divNoticias.childNodes[5].style.backgroundImage = "url("+noticia[noticiaNumero][1]+")";
	divNoticias.childNodes[7].innerHTML = '<a class="noticiaLink" href="'+noticia[noticiaNumero][2]+'">Ver Notícia</a>';
}
/*muda o contador para uma noticia especifica e chama a funcao de mostrar a noticia*/
function slectNoticia(numero){
	endInterval(intervalos);
	noticiaNumero = numero-1;
	setNoticias();
	intervalos = setInterval(function(){setNoticias()},6000);
}
/*cria os botoes de scroll para mudar de noticia*/
function criarBtnNoticias(){	
	divNoticias = document.getElementById("noticiasMedico");
	for(k = 0; k < noticia.length;k++){
		divNoticias.childNodes[9].innerHTML +='<input class="scroll" type="image" src="images/notSelected.png" onmouseover="hover(this);" onmouseout="outHover(this);" onclick="slectNoticia('+k+')">&nbsp;';
	} 
}
//]]>