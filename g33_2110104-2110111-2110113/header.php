<!DOCTYPE html>
<?php
	//require_once("functions.php");
?>
<html>
<head>
<title>Santa Casa da Misericórdia</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="scripts.js"></script>
</head>
<body>
	<!--
			TOP MENU
	-->
	<div class="menu_fundo shadow_down">
		<div class="menu_content">
			<div class="search_bar">
				<!-- POR FAZER-->
				<form action="" method="GET">
					<input id="search_bar" class="search_bar_form" type="text" size="20" value="Pesquisar" onfocus="search_bar_select()" onblur="search_bar_reset()" />
				</form>
			</div>
			<div id="link_4" class="menu_link_box" onclick="link(14)">
				<span>Login</span>
			</div>
			<div id="link_3" class="menu_link_box" onclick="link(3)">
				<span>Newsletter</span>
			</div>
			<div id="link_2" class="menu_link_box" onclick="link(2)">
				<span>Contactos</span>
			</div>
			<div id="link_1" class="menu_link_box" onclick="link(1)">
				<span>Notícias</span>
			</div>
			<div id="link_0" class="menu_link_box" onclick="link(0)">
				<span>Início</span>
			</div>			
		</div>
	</div>
	<div class="principal">
		<!--
			SIDE MENU
		-->
		<div class="submenu_fundo shadow_around">
			<div class="logo">
				<img src="images/santa_casa1000.png" width="151" height="151" onclick="window.location='index.php'" alt="logo">
			</div>
			<div id="submenu_content" class="submenu_content" data-selected="0" data-selected_link="0">
				<div id="link_saude" class="submenu_title" onclick="dropdown(65, 'saude_submenu', 'link_saude')">
					<span>Saúde</span>
				</div>
				<div class="submenu_line">
				</div>
				<div id="saude_submenu" class="submenu_submenu dropdown_transition">
					<span onclick="link(4)">Especialidades</span>
					<span id="link_5" onclick="link(5)">Corpo Clínico</span>
					<span id="link_6" onclick="link(6)">Artigos/Notícias</span>
					<span id="link_7" onclick="link(7)">Marcação de Consultas</span>
					<div class="submenu_line">
					</div>
				</div>
				<div id="link_cuidados" class="submenu_title" onclick="dropdown(65, 'cuidados_submenu', 'link_cuidados')">
					<span>Cuidados Geriátricos</span>
				</div>
				<div class="submenu_line">
				</div>
				<div id="cuidados_submenu" class="submenu_submenu dropdown_transition">
					<span id="link_8" onclick="link(8)">Residencial</span>
					<span id="link_9" onclick="link(9)">Lar</span>
					<span id="link_10" onclick="link(10)">Internamento</span>
					<span id="link_11" onclick="link(11)">Apoio Domiciliário</span>
					<div class="submenu_line">
					</div>
				</div>
				<div class="submenu_title" id="link_12" onclick="link(12)">
					<span>Creche</span>
				</div>
				<div class="submenu_line">
				</div>
				<div class="submenu_title" id="link_13" onclick="link(13)">
					<span>Irmandade</span>
				</div>
				<div class="submenu_line">
				</div>
			</div>
		</div>