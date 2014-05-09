$(document).ready(function(){

	$("#login-box").hide();

	var flag = 0;

	$("#welcome_message").click(function(){
		if(flag==0){
			$("#login-box").show();
			flag = 1;
		}else{
			$("#login-box").hide();
			flag = 0;
		}
	});

	$(window).load(function(){
		var height1 = $("#noticia1").height();
		var height2 = $("#noticia2").height();

		if(height1 > height2){
			$("#noticia2").css("height", height1+"px");
		}else{
			$("#noticia1").css("height", height2+"px");
		}
	});
	
});