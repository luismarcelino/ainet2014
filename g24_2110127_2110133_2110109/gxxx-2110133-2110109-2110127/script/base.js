//<![CDATA[
jQuery.noConflict();
/*div login*/
function login(){
	btn = document.getElementById("btnLogin");
	div = document.getElementById("divLogin");
	if(div.style.display == "none"){
		div.style.display = "block";
		btn.value = "Fechar";
	}else{
		div.style.display = "none";
		btn.value = "Login";
	}
}	
/*terminar um intervalo*/
function endInterval(intervalo){
	clearTimeout(intervalo);
}
/*hover scroll noticias/artigos e publicidades*/
function hover(element) {
		element.setAttribute('src', 'images/selected.png');	
}
/*outhover scroll noticias/artigos e/ou publicidades*/
function outHover(element) {
	element.setAttribute('src', 'images/notSelected.png');
}
/*selecionar um determinado noticia/artigo e/ou publicidade*/
function setSelected(element) {
    element.setAttribute('src', 'images/selected.png');
}
/*abrir um ficheiro*/
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("image");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
	imgtag.src = event.target.result;
  };
  reader.readAsDataURL(selectedFile);
}
//]]>