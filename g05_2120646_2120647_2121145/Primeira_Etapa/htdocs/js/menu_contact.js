// <![CDATA[ 
function gmaps() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(39.740442,-8.802701),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
$(document).ready(function() { 
 $("#btn_lar").click(function () { 
  $(".contact_santa_casa").hide();
	 $("#btn_scml").show();
       $(".contact_clinica").hide();
       $(".contact_hospital").hide();
       $(".contact_creche").hide();
	   $(".contact_residencial").hide();
  $(".contact_lar").fadeIn("slow");
  
 });
 
 $("#btn_clinica").click(function () { 
   $(".contact_lar").hide();
$("#btn_scml").show();
       $(".contact_hospital").hide();
       $(".contact_creche").hide();
	   $(".contact_residencial").hide();
  $(".contact_santa_casa").hide();
  $(".contact_clinica").fadeIn("slow");
  
 });
  $("#btn_hospital").click(function () { 
   $(".contact_lar").hide();
       $(".contact_clinica").hide();
 $("#btn_scml").show();
       $(".contact_creche").hide();
	   $(".contact_residencial").hide();
  $(".contact_santa_casa").hide();
  $(".contact_hospital").fadeIn("slow");
  
 });
  $("#btn_creche").click(function () { 
   $(".contact_lar").hide();
       $(".contact_clinica").hide();
       $(".contact_hospital").hide();
 $("#btn_scml").show();
	   $(".contact_residencial").hide();
  $(".contact_santa_casa").hide();
  $(".contact_creche").fadeIn("slow");
  
 });
  $("#btn_residencial").click(function () { 
   $(".contact_lar").hide();
    $("#btn_scml").show();
       $(".contact_clinica").hide();
       $(".contact_hospital").hide();
       $(".contact_creche").hide();
  $(".contact_santa_casa").hide();
  $(".contact_residencial").fadeIn("slow");
  
 });
  
 
 $("#btn_scml").click(function () { 
   $(".contact_lar").hide();
    $("#btn_scml").hide();
       $(".contact_clinica").hide();
       $(".contact_hospital").hide();
       $(".contact_creche").hide();
  $(".contact_residencial").hide();	   
  $(".contact_santa_casa").fadeIn("slow");

  
 });
    $("#btn_1").hover(function () { 
 	$("#btn_1 .filter_over").fadeToggle("fast");
 });
 $("#btn_2").hover(function () { 
 	$("#btn_2 .filter_over").fadeToggle("fast");
 });
 $("#btn_3").hover(function () { 
 	$("#btn_3 .filter_over").fadeToggle("fast");
	
 });
 $("#btn_4").hover(function () { 
 	$("#btn_4 .filter_over").fadeToggle("fast");
 });
 $("#btn_5").hover(function () { 
 	$("#btn_5 .filter_over").fadeToggle("fast");
 });
 $("#btn_6").hover(function () { 
 	$("#btn_6 .filter_over").fadeToggle("fast");
 });
 $("#btn_7").hover(function () { 
 	$("#btn_7 .filter_over").fadeToggle("fast");
 });
 $("#btn_8").hover(function () { 
 	$("#btn_8 .filter_over").fadeToggle("fast");
 });

   
   
	 $(".login").click(function () { 
 	$(".div_login").fadeToggle(600);
 });
 $(".div_login").mouseleave(function () { 
 	$(".div_login").hide(10);
 });
  $("#img_search").click(function () { 

 	$(".div_search").fadeToggle(600);
 });
 $(".div_search").mouseleave(function () { 
 	$(".div_search").hide(10);
 });

 $(".link_mapa").click(function () { 
   
  $(".floatDiv").fadeIn("slow");
 gmaps();
  
 });
 $("#close").click(function () { 
   
  $(".floatDiv").fadeOut("fast");
  
 });
});

 // ]]>   