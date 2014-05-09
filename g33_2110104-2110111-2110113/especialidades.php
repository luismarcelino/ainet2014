<?php
	require_once("header.php");
?>
<!--
	CONTENT AREA
-->
<div class="conteudo_fundo shadow_around">
	<div class="conteudo_area">
		<p class="conteudo_titulo_pagina">Especialidades</p>
		<div class="especialidades_content1">
			<div id="esp_0" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=0'">
				<span>Acupuntura</span>
			</div>
			<div id="esp_1" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=1'">
				<span>Cardiologia</span>
			</div>
			<div id="esp_2" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=2'">
				<span>Cirurgia Geral</span>
			</div>
			<div id="esp_3" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=3'">
				<span>Cirurgia Plástica e Reconstrutiva</span>
			</div>
			<div id="esp_4" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=4'">
				<span>Cirurgia Vascular</span>
			</div>
			<div id="esp_5" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=5'">
				<span>Dermatologia</span>
			</div>
			<div id="esp_6" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=6'">
				<span>Diabetes</span>
			</div>
			<div id="esp_7" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=7'">
				<span>Dietista</span>
			</div>
			<div id="esp_8" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=8'">
				<span>Endocrinologia</span>
			</div>
			<div id="esp_9" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=9'">
				<span>Estomatologia</span>
			</div>
			<div id="esp_10" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=10'">
				<span>Gastrentelogia</span>
			</div>
			<div id="esp_11" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=11'">
				<span>Ginecologia</span>
			</div>
			<div id="esp_12" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=12'">
				<span>Medicina Desportiva</span>
			</div>
			<div id="esp_13" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=13'">
				<span>Medicina Física e de Reabilitação</span>
			</div>
			<div id="esp_14" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=14'">
				<span>Mesoterapia</span>
			</div>
			<div id="esp_15" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=15'">
				<span>Neurocirurgia</span>
			</div>
			<div id="esp_16" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=16'">
				<span>Neurologia</span>
			</div>
			<div id="esp_17" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=17'">
				<span>Oftalmologia adulto e infantil</span>
			</div>
			<div id="esp_18" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=18'">
				<span>Ortopedia</span>
			</div>
			<div id="esp_19" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=19'">
				<span>Otorrinolaringologia</span>
			</div>
			<div id="esp_20" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=20'">
				<span>Pneumologia</span>
			</div>
			<div id="esp_21" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=21'">
				<span>Psicologia Clínica</span>
			</div>
			<div id="esp_22" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=22'">
				<span>Psiquiatria</span>
			</div>
			<div id="esp_23" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=23'">
				<span>Reumatologia</span>
			</div>
			<div id="esp_24" class="especialidades_link" onclick="window.location='<?php echo $_SERVER['PHP_SELF']?>?id=24'">
				<span>Urologia</span>
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
							<p class="conteudo_titulo_espec">Acupuntura</p>
							<br>
							<p class="conteudo_noticias_espec">
								A acupuntura (do latim acus - agulha e punctura - colocação1 ) é um ramo da medicina tradicional chinesa e, 
								de acordo com a nova terminologia da OMS - Organização Mundial da Saúde, um método de tratamento complementar. 
								Foi também declarado Patrimônio Cultural Intangível da Humanidade pela United Nations Educational, Scientific and Cultural Organization (Unesco)
								em 19 de novembro de 2010.O tratamento acupunterápico consiste no diagnóstico
								(igualmente baseado em ensinamentos clássicos da Medicina Tradicional Chinesa) e na aplicação de agulhas
								em pontos definidos do corpo, chamados de "Pontos de Acupuntura" ou "Acupontos" 
								que se distribuem principalmente sobre linhas chamadas "meridianos chineses" e "canais",
								para obter diferentes efeitos terapêuticos conforme o caso tratado. Também são utilizadas outras técnicas alternativa
								ou complementarmente, sendo as mais conhecidas a moxabustão (aplicação de calor sobre os acupontos ou meridianos),
								a auriculoterapia e, mais recentemente, a eletroacupuntura.
								<p class="conteudo_titulo2">Acordos</p><br>
								<img class="foto_acordos" src="images/caixa.jpg" alt="imagem">
								<img class="foto_acordos" src="images/medis.png" alt="imagem">
								<img class="foto_acordos" src="images/adse.png" alt="imagem">
							<br><br>
							<p class="conteudo_titulo_corpo">Corpo Clinico</p>
							<br>
							<div class="conteudo_medico">
									<img class="foto_medico" src="images/icon.png">
									<p class="conteudo_info_medico">Dr.João Santos</p>
									<p class="conteudo_info_medico">244400800</p>
									<p class="conteudo_info_medico">Acupuntura</p>
							</div>
							<p class="conteudo_titulo2">Noticias Relacionadas</p>
							<p class="esp_noticias"><a href="corpoclinico.php?id=0">Novo metodo de tratamento com acupuntura</a></p>
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
				}
			?>
		</div>
	</div>
</div>
</div>
<script type="text/javascript">
	menu_pressed(2, 4);
</script>
<?php
	require_once("footer.php");
?>
	