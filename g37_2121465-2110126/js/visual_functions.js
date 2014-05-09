function headerAnimation(){
   $(window).scroll(function(){
    	if($(document).scrollTop() === 0){
    		$('#header').addClass('fixed');
        $('#header').animate({height: '75'}, 500);
        
        $('#header_text').animate({'left':'22%'}, 500);
        $('#header_text').animate({'font-size':'30px'}, 500);
      }

      else if($(document).scrollTop() > 0){
      	$('#header').animate({height: '50'}, 500);

      	$('#header_text').animate({'font-size':'20px'}, 500);
      	$('#header_text').animate({'left':'40%'}, 500);
      }
    })
}

function changeCoverImages(){
   var images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg']; 
	var random = Math.round(Math.random() * 4);
$('#mainImage').css('background', 'url(' + images[random] + ')');
}