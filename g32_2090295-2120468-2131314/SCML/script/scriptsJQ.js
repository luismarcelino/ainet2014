	// <![CDATA[
		$(document).ready(function(){
			$(".sede").click(function(){
				var title = $(this).attr('id');
				$(this).next(title).slideToggle("slow");
			});
		});
	
		$(document).ready(function () {
			$('#nav > li > a').click(function(){
				if ($(this).attr('class') != 'active'){
					$('#nav li ul').slideUp();
					$(this).next().slideToggle();
					$('#nav li a').removeClass('active');
					$(this).addClass('active');
				}
			});
		});
	
	// ]]>