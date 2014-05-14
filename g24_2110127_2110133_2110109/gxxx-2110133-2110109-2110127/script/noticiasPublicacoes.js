//<![CDATA[
/*init da pagina index*/
jQuery(document).ready(function() {
	init();
});

function init(){
	criarBtnPublicacao();
	slectPublicacao(0);
	iniciarNoticias();
}

/*base de dados*/
var elementos = new Array();
elementos[0] = new Array("O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.","images/santa_casa100.png","noticaArtigo.html");
elementos[1] = new Array("conteudo noticia1","images/miolo_4adf2d654a5f2.JPG","noticaArtigo.html");
elementos[2] = new Array("conteudo noticia2","images/santa_casa100.png","noticaArtigo.html");
elementos[3]= new Array("conteudo noticia3","images/santa_casa100.png","noticaArtigo.html");

elementos[4] = new Array("conteudo noticia4","images/santa_casa100.png","noticaArtigo.html");
elementos[5] = new Array("conteudo noticia5","images/santa_casa100.png","noticaArtigo.html");
elementos[6] = new Array("conteudo noticia6","images/santa_casa100.png","noticaArtigo.html");
elementos[7]= new Array("conteudo noticia7","images/santa_casa100.png","noticaArtigo.html");

elementos[8] = new Array("conteudo noticia8","images/santa_casa100.png","noticaArtigo.html");
elementos[9] = new Array("conteudo noticia9","images/santa_casa100.png","noticaArtigo.html");
elementos[10] = new Array("conteudo noticia10","images/santa_casa100.png","noticaArtigo.html");
elementos[11]= new Array("conteudo noticia11","images/santa_casa100.png","noticaArtigo.html");

elementos[12] = new Array("conteudo noticia12","images/santa_casa100.png","noticaArtigo.html");
elementos[13] = new Array("conteudo noticia13","images/santa_casa100.png","noticaArtigo.html");
elementos[14] = new Array("conteudo noticia14","images/santa_casa100.png","noticaArtigo.html");
elementos[15] = new Array("conteudo noticia15","images/santa_casa100.png","noticaArtigo.html");

var noticia= new Array();
noticia[0] = new Array(elementos[0],elementos[1],elementos[2],elementos[3]);
noticia[1] = new Array(elementos[4],elementos[5],elementos[6],elementos[7]);
noticia[2] = new Array(elementos[8],elementos[9],elementos[10],elementos[11]);
noticia[3]= new Array(elementos[12],elementos[13],elementos[14],elementos[15]);

/*noticia seleciona actualmente e intervalo que gere a mudanca de noticia*/
var noticiaNumero = new Array(0,0,0,0);
var intervalos = new Array();

/*muda uma determinada notica de um elemento enviado por parametro*/
function setNoticias(tipo){
	switch(tipo){
		case 0:
			 divNoticias = document.getElementById("noticiasCreche");
			 break;
		case 1:
			 divNoticias = document.getElementById("noticiasIrmandade");
			 break;
		case 2:
			 divNoticias = document.getElementById("noticiasLar");
			 break;
		case 3:
			 divNoticias = document.getElementById("noticiasResidencial");
			 break;
	}
	noticiaNumero[tipo] ++;
	if(noticiaNumero[tipo] >= noticia[tipo].length){
		noticiaNumero[tipo] = 0;
	}
	divNoticias.childNodes[3].innerHTML = noticia[tipo][noticiaNumero[tipo]][0];
	divNoticias.childNodes[5].style.backgroundImage = "url("+noticia[tipo][noticiaNumero[tipo]][1]+")";
	divNoticias.childNodes[7].innerHTML = '<a class="noticiaLink" href="'+noticia[tipo][noticiaNumero[tipo]][2]+'">Ver Notícia</a>';
}
/*Seleciona uma noticia de um determinado tipo*/
function slectNoticia(numero, tipo){
	endInterval(intervalos[tipo]);
	noticiaNumero[tipo] = numero-1;
	setNoticias(tipo);
	intervalos[tipo] = setInterval(function(){setNoticias(tipo)},6000);
}
/*chamada para o inicio das noticias e criacao dos botoes*/
function iniciarNoticias(){
	for(i = 0;i<4;i++){
		slectNoticia(0, i);
		criarBtnNoticias(i);
	}
}
/*Criacao dos botoes para um tipo especificado*/
function criarBtnNoticias(j){	
		switch(j){
			case 0:
				 divNoticias = document.getElementById("noticiasCreche");
				 break;
			case 1:
				 divNoticias = document.getElementById("noticiasIrmandade");
				 break;
			case 2:
				 divNoticias = document.getElementById("noticiasLar");
				 break;
			case 3:
				 divNoticias = document.getElementById("noticiasResidencial");
				 break;
		}			
		for(k = 0; k < noticia[j].length;k++){
			divNoticias.childNodes[9].innerHTML +='<input class="scroll" type="image" src="images/notSelected.png" onmouseover="hover(this);" onmouseout="outHover(this);" onclick="slectNoticia('+k+','+j+')">&nbsp;';
		} 
}
/*----------------------------------------------------------Publicacoes--------------------------------------------*/
/*bd e publicidade que ta actualmente visivel e o intervado de mudanca de publicacao*/
/*base de dados*/
var elementosPublicacao = new Array();
elementosPublicacao[0] = new Array("joao","O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.","images/santa_casa100.png","21/1/2013");
elementosPublicacao[1] = new Array("nome1","conteudo1","images/miolo_4adf2d654a5f2.JPG","data1");
elementosPublicacao[2] = new Array("nome2","conteudo2","images/santa_casa100.png","data2");


var publicacao = new Array(elementosPublicacao[0],elementosPublicacao[1],elementosPublicacao[2]);

var publicacaoNumero = 0;
var intervaloPublicacoes;
/*Seleciona uma publicidade*/
function publicacoes(){
	divPublicacoes = document.getElementById("publicacoes");
	publicacaoNumero ++;
	if(publicacaoNumero >= publicacao.length){
		publicacaoNumero = 0;
	}
	divPublicacoes.childNodes[1].innerHTML = publicacao[publicacaoNumero][1];
	divPublicacoes.childNodes[3].style.backgroundImage = "url("+publicacao[publicacaoNumero][2]+")";
	divPublicacoes.childNodes[5].innerHTML = '<b>Autor:</b> '+publicacao[publicacaoNumero][0];
	divPublicacoes.childNodes[7].innerHTML = '<b>Data de publicação:</b> '+publicacao[publicacaoNumero][3];
}
/*Gere o intervalo e chama a noticia pretendida seleciona uma publicidade*/
function slectPublicacao(numero){
	endInterval(intervaloPublicacoes);
	publicacaoNumero = numero-1;
	publicacoes();
	intervaloPublicacoes = setInterval(function(){publicacoes()},6000);
}
/*Crias os botoes para trocar de publicacao*/
function criarBtnPublicacao(){	
	divScrollPublicacoes = document.getElementById("scrollPublicacoes");			
	for(i =0; i < publicacao.length;i++){
		divScrollPublicacoes.innerHTML +='<input class="scroll" type="image" src="images/notSelected.png" onmouseover="hover(this);" onmouseout="outHover(this)" onclick="slectPublicacao('+i+');">&nbsp;';
	} 
}
//]]>