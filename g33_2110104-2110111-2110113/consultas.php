<?php
	require_once("header.php");
?>
<!--
	CONTENT AREA
-->
<div class="conteudo_fundo shadow_around">
	<div class="conteudo_area">
		<p class="conteudo_titulo_pagina">Marca��o de consultas</p>
			<form>
			Nome Completo: <input type="text" name="nome"><br><br>
			G�nero: M<input type="radio" name="sex" value="masculino">
					F<input type="radio" name="sex" value="feminino"><br><br>
				Data Nascimento: <input type="datetime-local" name="dataNasc"><br><br>
			Numero Seg.Social: <input type="text" name="numeroSegSocial"><br><br>
			Sistemas/Seguro de sa�de: 
			<select name="sistemasSaude">
				<option value="ADSE">ADSE</option>
				<option value="Medis">Medis</option>
				<option value="Multicare">Multicare</option>
			</select>
			<input type="text" name="numeroSeguro"><br><br>
			Numero Fiscal: <input type="text" name="numeroFiscal"><br><br>
			Contacto Telefonico: <input type="text" name="Contacto"><br><br>
			Morada
			Rua: <input type="text" name="rua"><br>
			Localidade: <input type="text" name="localidade"><br>
			Cod.Postal: <input type="text" name="codPostal"><input type="text" name="postal">
			Pa�s: <input type="text" name="pais"><br><br>
			Numero Irm�o: <input type="text" name="numIrmao"><br><br>
			E-mail: <input type="text" name="email"><br><br>
			Password: <input type="password" name="password"><br><br>
			
			Especialidade: 
			<select name="especialidades">
				<option value="ACUMPUNTURA">Acupuntura</option>
				<option value="AUDIOLOGIA">Cardiologia</option>
				<option value="CARDIOLOGIA">Cirurgia Geral</option>
				<option value="CIRURGIA GERAL">Cirurgia Pl�stica e Reconstrutiva</option>
				<option value="DOEN�AS VENOSAS">Cirurgia Vascular</option>
				<option value="CIRURGIA PL�STICA">Dermatologia</option>
				<option value="CIRURGIA VASCULAR">Diabetes</option>
				<option value="CL�NICA GERAL">Dietista</option>
				<option value="DERMATOLOGIA">Endocrinologia</option>
				<option value="ENDOCRINOLOGIA">Estomatologia</option>
				<option value="MEDICINA DENT�RIA">Gastrentelogia</option>
				<option value="FISIATRIA">Ginecologia</option>
				<option value="GASTRENTEROLOGIA">Medicina Desportiva</option>
				<option value="GINECOLOGIA / OBSTETRICIA">Medicina F�sica e de Reabilita��o</option>
				<option value="MEDICINA INTERNA">Mesoterapia</option>
				<option value="MEDICINA DESPORTIVA">Neurocirurgia</option>
				<option value="NEUROCIRURGIA">Neurologia</option>
				<option value="NEUROLOGIA">Oftalmologia adulto e infantil</option>
				<option value="NUTRI��O">Ortopedia</option>
				<option value="OFTALMOLOGIA">Otorrinolaringologia</option>
				<option value="OTORRINOLARINGOLOGIA">Pneumologia</option>
				<option value="ORTOPEDIA">Psicologia Cl�nica</option>
				<option value="PNEUMOLOGIA">Psiquiatria</option>
				<option value="PSICOLOGIA">Reumatologia</option>
				<option value="PSIQUIATRIA">Urologia</option>
			</select>
			<br><br>
			Nome Medico: <input type="text" name="nomeMedico"><br><br>
				Data Consulta: <input type="datetime-local" name="dataConsulta"><br><br>
				<input type="submit" value="Enviar">	
			</form>
	</div>
</div>
</div>
<script type="text/javascript">
	menu_pressed(0, 4);
</script>
<?php
	require_once("footer.php");
?>
	