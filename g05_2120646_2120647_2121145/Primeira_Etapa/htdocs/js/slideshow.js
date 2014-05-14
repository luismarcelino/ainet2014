// <![CDATA[ 
$(document).ready(function() {    
var i = 0;
var t = 0;
var nslide=2;
var timeDelay = 8000;
var fadeVelocity = 3000;
var dirSource = "images/slideshow/";
var imgName = "slide";
var textslides = ["Internamento Privado","Hospital D. Manuel de Aguiar"];
function slide(){
	$("#slide").fadeOut(fadeVelocity,function(){
	$("#slide").attr("src",dirSource+imgName+(i=(i+1)%nslide)+".jpg");		
	$(".title_slide h2").html(textslides[i]);
	}).fadeIn(fadeVelocity);	
	$(".title_slide").fadeToggle(fadeVelocity);	
setInterval(slide(),timeDelay);
}
setInterval(slide(),timeDelay);
	
});

 // ]]>