<?php
	require_once("header.php");
?>
<!--
	CONTENT AREA
-->
<div class="conteudo_fundo shadow_around">
	<div class="conteudo_area">
		<p class="conteudo_titulo_pagina">Formulário de Contacto</p>
		<form>
			<p>Nome Completo: <input type="text" name="nome"/></p>
			<p>Contacto: <input type="text" name="telef"/></p>
			<p>E-mail: <input type="text" name="email"/></p>
			<p>Observações:<br>
			<textarea rows="10" cols="50" style="resize: none;">
			Insira aqui o motivo de contacto...
			</textarea></p>
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
	