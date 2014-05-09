function slide() {
    // img = new Array();
    // img[0] = document.getElementById("img1");
    // img[1] = document.getElementById("img2");
    // for (var i = 0; i < img.length; i++) {
        // if (img[i].style.zIndex = img.length + 3) {
            // img[i].style.zIndex = 4;
        // } else {
            // img[i].style.zIndex = img[i].style.zIndex + ;
        // }
    // }
	
	if (state == 0) {
		$("#img1").fadeOut("slow");
		$("#img2").fadeIn("slow");
		state = 1;
	} else {
		$("#img1").fadeIn("slow");
		$("#img2").fadeOut("slow");
		state = 0;
	}
}

// function slide() {
    // img = new Array();
    // img[0] = document.getElementById("img1");
    // img[1] = document.getElementById("img2");
    // for (var i = 0; i < img.length; i++) {
        // if (img[i].style.zIndex = img.length + 3) {
            // img[i].style.zIndex = 4;
        // } else {
            // img[i].style.zIndex = img[i].style.zIndex + ;
        // }
    // }
// }

function start() {
	state = 0;
    setInterval(function () {
        slide()
    }, 2000);

}