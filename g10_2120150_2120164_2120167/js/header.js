function changeImage(a, atual) {

    document.getElementById("imagem-header").src="css/imgs/header-image"+a+".png";
    document.getElementById("seleccionado").src = "css/imgs/bolinhanaoselected.png";
    document.getElementById("seleccionado").id = "naoseleccionado";

    atual.src = "css/imgs/bolinhaselected.png";
    atual.id = "seleccionado";
}

function aparecer(){
    document.getElementById("arealogin").style.display = "block";
}

function desaparecer(){
    document.getElementById("arealogin").style.display = "none";
}


function login() {
    document.getElementById("ferr").style.display = "inline-block";
}


