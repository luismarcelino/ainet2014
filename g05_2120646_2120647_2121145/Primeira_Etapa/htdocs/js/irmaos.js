// <![CDATA[ 

$(document).ready(function() { 



 $("#btn2").click(function () { 

  $("#read2").slideToggle(500);

  $(this).text(function(i, text){

          return text === "Ler mais" ? "Esconder" : "Ler mais";

		   });

 });

 $("#btn3").click(function () { 

  $("#read3").slideToggle(500);

  $(this).text(function(i, text){

          return text === "Ler mais" ? "Esconder" : "Ler mais";

		   });

 });


 $("#btn4").click(function () { 

  $("#read4").slideToggle(500);

  $(this).text(function(i, text){

          return text === "Ler mais" ? "Esconder" : "Ler mais";

		   });

 });

});



 // ]]>   