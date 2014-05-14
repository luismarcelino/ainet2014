// <![CDATA[ 
$(document).ready(function() {    
var i = 0;
var nslide=3;
var timeDelay = 9000;
var fadeVelocity = 5000;
var dirSource = 'images/slideshow/saude/';
var imgName = 'slide';
function slide(){
	$('#slide').fadeOut(fadeVelocity,function(){
	$('#slide').attr('src',dirSource+imgName+(i=(i+1)%nslide)+'.jpg');	
	}).fadeIn(fadeVelocity);			setInterval(slide(),timeDelay);	}		setInterval(slide(),timeDelay);});// ]]>