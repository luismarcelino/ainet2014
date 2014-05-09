<?php
	require_once("header.php");
?>
<!--
	CONTENT AREA
-->
<div class="conteudo_fundo shadow_around">
	<div class="conteudo_area">
		<p class="conteudo_titulo_pagina">Corpo Clínico</p>
		<div class="especialidades_content1">
			<div id="esp_0" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=0'">
				<span>A</span>
			</div>
			<div id="esp_1" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=1'">
				<span>B</span>
			</div>
			<div id="esp_2" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=2'">
				<span>C</span>
			</div>
			<div id="esp_3" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=3'">
				<span>D</span>
			</div>
			<div id="esp_4" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=4'">
				<span>E</span>
			</div>
			<div id="esp_5" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=5'">
				<span>F</span>
			</div>
			<div id="esp_6" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=6'">
				<span>G</span>
			</div>
			<div id="esp_7" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=7'">
				<span>H</span>
			</div>
			<div id="esp_8" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=8'">
				<span>I</span>
			</div>
			<div id="esp_9" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=9'">
				<span>J</span>
			</div>
			<div id="esp_10" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=10'">
				<span>K</span>
			</div>
			<div id="esp_11" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=11'">
				<span>L</span>
			</div>
			<div id="esp_12" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=12'">
				<span>M</span>
			</div>
			<div id="esp_13" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=13'">
				<span>N</span>
			</div>
			<div id="esp_14" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=14'">
				<span>O</span>
			</div>
			<div id="esp_15" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=15'">
				<span>P</span>
			</div>
			<div id="esp_16" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=16'">
				<span>Q</span>
			</div>
			<div id="esp_17" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=17'">
				<span>R</span>
			</div>
			<div id="esp_18" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=18'">
				<span>S</span>
			</div>
			<div id="esp_19" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=19'">
				<span>T</span>
			</div>
			<div id="esp_20" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=20'">
				<span>U</span>
			</div>
			<div id="esp_21" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=21'">
				<span>V</span>
			</div>
			<div id="esp_22" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=22'">
				<span>W</span>
			</div>
			<div id="esp_23" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=23'">
				<span>X</span>
			</div>
			<div id="esp_24" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=24'">
				<span>Y</span>
			</div>
			<div id="esp_25" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=25'">
				<span>Z</span>
			</div>
		</div>
		<div class="especialidades_content2">
			<?php
				if(isset($_GET["id"])){
					//ISTO ALTERA A FORMA DO BOTÃO. NAO MEXER
					echo "<script>";
					echo "esp_link_press(".$_GET["id"].");";
					echo "</script>";
					
					//O QUE APARECE PARA CADA BOTAO
					if($_GET["id"]==0){
						?>
						<div class="cc_main">
							<img class="cc_foto_medico" src="images/icon.png" alt="imagem">
							<p class="cc_texto"><span class="texto_bold">Nome:</span> Dr. Abílio Toledo</p>
							<p class="cc_texto"><span class="texto_bold">Especialidades:</span> <a href="especialidades.php?id=0">Acupuntura</a>, <a href="especialidades.php">Neurologia</a></p>
							<p class="cc_texto"><span class="texto_bold">Contacto:</span> 917772939</p>
							<a href="consultas.php"><img class="cc_imagem_mc" src="images/marcar_consulta.png" alt="imagem"></a>
						</div>
						<p class="cc_noticias">Noticias</p>
						<p style="margin-left:10px">
						<p class="titulo_noticia">Novo método de tratamento com acupuntura</p>
						<div class="cc_main">
							<img class="foto_noticia" src="images/exemplo1.jpg" alt="imagem">
							<p class="texto_noticia">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi lectus. Integer id felis eleifend, iaculis sem vitae, lobortis leo. Suspendisse potenti. Suspendisse viverra justo eu ultrices volutpat. Nulla semper et nibh vulputate varius. Donec non velit quis elit consectetur sagittis. Duis a metus placerat, rutrum lorem scelerisque, ullamcorper urna. Quisque cursus pellentesque mauris, non consectetur turpis adipiscing vehicula. Nam convallis nulla eu metus elementum, et commodo magna viverra. Nulla dignissim, metus eu tempus pulvinar, ipsum enim pretium nulla, vitae tempor odio quam in augue. Nulla ac posuere arcu, sit amet consectetur tortor. Duis eu augue consectetur, viverra nisi nec, ornare justo. Aenean eleifend auctor risus, eget ornare mauris laoreet sit amet.
							 Nunc dictum urna sed orci porta, vel dictum tortor ullamcorper. Nam est metus, euismod nec gravida sed, lacinia et quam. Pellentesque tempor sapien vel sem ornare fermentum.
							</p>
						</div>
						<?php
					}
					if($_GET["id"]==1){
						
					}
					if($_GET["id"]==2){
						
					}
					if($_GET["id"]==3){
						
					}
					if($_GET["id"]==4){
						
					}
					if($_GET["id"]==5){
						
					}
					if($_GET["id"]==6){
						
					}
					if($_GET["id"]==7){
						
					}
					if($_GET["id"]==8){
						
					}
					if($_GET["id"]==9){
						
					}
					if($_GET["id"]==10){
						
					}
					if($_GET["id"]==11){
						
					}
					if($_GET["id"]==12){
						
					}
					if($_GET["id"]==13){
						
					}
					if($_GET["id"]==14){
						
					}
					if($_GET["id"]==15){
						
					}
					if($_GET["id"]==16){
						
					}
					if($_GET["id"]==17){
						
					}
					if($_GET["id"]==18){
						
					}
					if($_GET["id"]==19){
						
					}
					if($_GET["id"]==20){
						
					}
					if($_GET["id"]==21){
						
					}
					if($_GET["id"]==22){
						
					}
					if($_GET["id"]==23){
						
					}
					if($_GET["id"]==24){
						
					}
					if($_GET["id"]==25){
						
					}
					
				}
			?>
		</div>
	</div>
</div>
</div>
<script type="text/javascript">
	menu_pressed(0, 4);
</script>
<?php
	require_once("footer.php");
?>
	