function mudar(novo, btn){
    document.getElementById("ativo").style.backgroundColor = "#3E8CD2";
    document.getElementById("ativo").id = "naoativo";
    $('.mostrar').toggle();
    $('.mostrar').removeClass('mostrar');
    $(novo).addClass('mostrar');
    $('.mostrar').toggle();
    btn.id = "ativo";
    btn.style.backgroundColor = "#333333";
}
