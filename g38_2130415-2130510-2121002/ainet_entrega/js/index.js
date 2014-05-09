$(document).ready(function(){
	$(".menu-tab").click(function(event){
		$(".menu-tab.active").removeClass("active");
		var tab = $(event.target);
		tab.addClass("active");
		$(".sub-menu-nav").hide();
		$("#sub-" + tab.attr("id")).show();
	}).append("<div class=\"menu-tab-border-override\"></div>").css("display", "inline-block");
	
	$("#logo").click(function(){
		SCMLApp.goHome();
	}).css("cursor", "pointer").attr("title", "Voltar à página inicial");
	
	$("#enlargeFont").click(function(){ SCMLApp.enlargeFont(); });
	$("#shrinkFont").click(function(){  SCMLApp.shrinkFont();  });
	$("#resetFont").click(function(){   SCMLApp.resetFont();   });
	
	$(".noscript").remove();
	$("#font-control").css("display", "block"); // Actualmente estraga partes do layout, activar sob propria conta e risco...
	$(".sub-menu-nav").css("border-bottom", "none").hide();
	
	
	// Se a HistoryAPI não estiver disponível, os links ficam com o seu comportamento
	// normal, para não afectar a usabilidade do histórico e dos botões back e forward.
	if(SCMLApp.hasHistoryAPI){
		$("a.sub-menu-link").click(function(event){
			event.preventDefault();
			$("a.sub-menu-link.active").removeClass("active");
			var link = $(this);
			var href = link.attr("href");
			link.addClass("active");
			SCMLApp.load(href);
		});
		
		window.onpopstate = function(event){
			if(event.state && event.state.doPopState){
				SCMLApp.load(document.location);
			}
		};
	}
});