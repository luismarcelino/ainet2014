
//Função para realizar o drop down do side menu
function dropdown(height,id, id_link){
	document.getElementById(id).style.height = ""+height+"px";
	document.getElementById(id).style.opacity = "1";
	document.getElementById(id).style.filter = "alpha(opacity=100)";
	//document.getElementById(id).style.display = "block";
	document.getElementById(id).style.pointerEvents = "auto";
	var selected = document.getElementById("submenu_content").getAttribute("data-selected");
	var selected_link = document.getElementById("submenu_content").getAttribute("data-selected_link");
	if(selected!="0"){
		document.getElementById(""+selected_link).className = "submenu_title";
		document.getElementById(""+selected).style.height = "0px";
		document.getElementById(""+selected).style.opacity = "0";
		document.getElementById(""+selected).style.filter = "alpha(opacity=0)";
		//document.getElementById(""+selected).style.display = "none";
		document.getElementById(""+selected).style.pointerEvents = "none";
	}
	document.getElementById(id_link).className = "submenu_title selected";
	document.getElementById("submenu_content").setAttribute("data-selected", id);
	document.getElementById("submenu_content").setAttribute("data-selected_link", id_link);
}

//Função para quando o utilizador sai do search bar
function search_bar_reset(){
	var search_bar = document.getElementById("search_bar").value;
	if(search_bar==''){
		document.getElementById("search_bar").value = 'Pesquisar';
	}
}

//Função para quando o utilizador pressiona a search bar
function search_bar_select(){
	var search_bar = document.getElementById("search_bar").value;
	if(search_bar == 'Pesquisar'){
		document.getElementById("search_bar").value = '';
	}
}

function menu_pressed(page_number, max_links){
	for(var i=0; i<max_links; i++){
		if(i!=page_number){
			document.getElementById('link_'+i).className = "menu_link_box";
		}else{
			document.getElementById('link_'+page_number).className = "menu_link_box menu_link_pressed";
		}
	}
}

function link(page_number){
	switch(page_number){
		case 0: window.location='index.php';break;
		case 1: window.location='noticias.php';break;
		case 2: window.location='contactos.php';break;
		case 3: window.location='newsletter.php';break;
		case 4: window.location='especialidades.php';break;
		case 5: window.location='corpoclinico.php';break;
		case 6: window.location='artigos.php';break;
		case 7: window.location='consultas.php';break;
		case 8: window.location='residencial.php';break;
		case 9: window.location='lar.php';break;
		case 10: window.location='internamento.php';break;
		case 11: window.location='apoio.php';break;
		case 12: window.location='creche.php';break;
		case 13: window.location='irmandade.php';break;
		case 14: window.location='login.php';break;
		default: break;
	}
}

function esp_link_press(id){
	var cont=0;
	while(document.getElementById("esp_"+cont)){
		if(cont!=id){
			document.getElementById("esp_"+cont).className = "especialidades_link ";
		}else{
			document.getElementById("esp_"+id).className = "especialidades_link_pressed";
		}
		cont++;
	}
}
