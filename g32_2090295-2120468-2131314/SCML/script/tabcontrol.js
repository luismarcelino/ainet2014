$(document).ready(function (){
	$(".nTab").click(function () {
		var index = $(this).text();
		
		$(".news").each(function () {
			if (!$(this).hasClass("hiden")) {
				$(this).addClass("hiden");
			};
		});

		$(".np").each(function () {
			if (!$(this).hasClass("hiden")) {
				$(this).addClass("hiden");
			};
		});

		$("#news"+index).toggleClass("hiden");
		$("#np"+index).toggleClass("hiden");

		$(".nTab").removeClass("selTab");
		$(this).addClass("selTab");
	});

	$(".aTab").click(function () {
		var index = $(this).text();
		
		$(".art").each(function () {
			if (!$(this).hasClass("hiden")) {
				$(this).addClass("hiden");
			};
		});

		$("#art"+index).toggleClass("hiden");

		$(".aTab").removeClass("selTab");
		$(this).addClass("selTab");
	});
});