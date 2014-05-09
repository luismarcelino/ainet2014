/**
* Este objecto det�m todos as nossas fun��es
* e vars globais de forma limpa e contida
*/
window.SCMLApp = new Object();

/** Indica se a HistoryAPI est� disponivel ou n�o neste cliente */
// SCMLApp.hasHistoryAPI = !!(window.history && history.pushState); // por agora usamos links estaticos
SCMLApp.hasHistoryAPI = false;

/** Devolve o tamanho base actual da font do site */
SCMLApp.getFontSize = function(){
	var css = $("body").css("font-size");
	return css.substring(0, css.length - 2);
};

/** O tamanho base minimo da font do site */
SCMLApp.minFontSize = 14;

/** O tamanho base maximo da font do site */
SCMLApp.maxFontSize = 28;

/** O factor pelo qual o tamanho base da font do site � aumentado ou reduzido */
SCMLApp.fontFactor = 1.15;

/**
* Usado para definir um novo tamanho base para a font do site,
* dentro dos limites pre-definidos
*/
SCMLApp.setFontSize = function(size){
	size = Math.round(size);
	if(size < SCMLApp.minFontSize){
		size = SCMLApp.minFontSize;
	}else if(size > SCMLApp.maxFontSize){
		size = SCMLApp.maxFontSize;
	}
	$("body").css("font-size", size + "px");
};

/** Aumenta o tamanho base da font do site exponencialmente */
SCMLApp.enlargeFont = function(){
	SCMLApp.setFontSize(SCMLApp.getFontSize() * SCMLApp.fontFactor);
};

/** Reduz o tamanho base da font do site exponencialmente */
SCMLApp.shrinkFont = function(){
	SCMLApp.setFontSize(SCMLApp.getFontSize() / SCMLApp.fontFactor);
};

/** Volta a colocar o tamanho base da fonte para o valor por defini��o */
SCMLApp.resetFont = function(){
	SCMLApp.setFontSize(SCMLApp.minFontSize);
};

/**
* Usado para carregar um novo m�dulo por AJAX e
* inject�-lo na �rea central do site
*/
SCMLApp.load = function(file){
	$.get(file + "&__AJAX__").done(function(data){
		if(SCMLApp.hasHistoryAPI){
			history.pushState({doPopState: true}, null, file);
		}
		$("#content").html(data);
	}).fail(function(xhr, status, error){
		console.log("AJAX Request Failed: " + status + ": { " + error + "} ");
	});
};

/** Usado para voltar � p�gina inicial */
SCMLApp.goHome = function(){
	$("#scml").click();
	$("#home-link").click();
};