// <![CDATA[ 
$(document).ready(function() {    
var i = 0;
var nslide=2;
var timeDelay = 8000;
var fadeVelocity = 3000;
var dirSource = "images/creche/slideshow/";
var imgName = "slide";

function slide(){
	$("#slide").fadeOut(fadeVelocity,function(){
	$("#slide").attr("src",dirSource+imgName+(i=(i+1)%nslide)+".png");		
	}).fadeIn(fadeVelocity);	
	
setInterval(slide(),timeDelay);
}
setInterval(slide(),timeDelay);
	
});

 // ]]>