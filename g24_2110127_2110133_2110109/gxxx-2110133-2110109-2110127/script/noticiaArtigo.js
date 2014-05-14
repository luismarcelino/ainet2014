//<![CDATA[
/*bd*/
var noticiaArtigo = new Array();
noticiaArtigo[0] = "Titulo";
noticiaArtigo[1] = '"Agora o HDMA promove a abertura do seu renovado serviço de Imagiologia, onde poderá efectuar exames da mais variada ordem, em excelentes instalações, com acesso a tecnologia digital moderna e um atendimento humanizado e diferenciado. O serviço de Imagiologia do HDMA resulta da parceria entre a Santa Casa da Misericórdia de Leiria e o Grupo OGS – Organizações em Gestão de Equipamentos de Saúde, Lda.";'
noticiaArtigo[2] = '"Agora o HDMA promove a abertura do seu renovado serviço de Imagiologia, onde poderá efectuar exames da mais variada ordem, em excelentes instalações, com acesso a tecnologia digital moderna e um atendimento humanizado e diferenciado. O serviço de Imagiologia do HDMA resulta da parceria entre a Santa Casa da Misericórdia de Leiria e o Grupo OGS – Organizações em Gestão de Equipamentos de Saúde, Lda., colocando ao seu dispor uma gama variada de oferta e nível de exames radiológicos tais como: Ressonância Magnética (1,5T), Tomografia Computorizada (TAC), Raios-x, Mamografia, Osteodensitometria, Ecografia geral e Eco-Doppler. Neste novo centro de Imagiologia Geral, poderá também usufruir dos diversos acordos vigentes com as respectivas entidades, nomeadamente: ARS, Seguros e outros ainda a designar. Centrado no atendimento dedicado e humanizado, o Serviço de Imagiologia do HDMA pretende assim destacar-se pela positiva, proporcionando excelência no diagnóstico e diferenciação na prestação global de cuidados de saúde. ";'
noticiaArtigo[3] = "21/07/2013";
noticiaArtigo[4] = "Jose Manuel";
noticiaArtigo[5] = "Lar";
noticiaArtigo[6] = "documentos_apoio/Nova imagem1.JPG";
/*preencher dados de uma noticia*/
function preencherCampos(){
	 div1 = document.getElementById("titulo");
	 div1.innerHTML = '<div class="noticiaArtigoTitulo"><p><h3>'+noticiaArtigo[0]+'</h3></p></div>';
	 
	 div1 = document.getElementById("textoResumo");
	 div1.innerHTML = '<div class="noticiaArtigoTexto"><p>'+noticiaArtigo[1]+'</p></div>';
			 
	 div3 = document.getElementById("texto");
	 div3.innerHTML = '<div class="noticiaArtigoTexto"><p>'+noticiaArtigo[2]+'</p></div>';
	 
	 div4 = document.getElementById("data");
	 div4.innerHTML = '<div class="noticiaArtigoTexto"><p><b>Publicado em:</b> '+noticiaArtigo[3]+'</p></div>';
	 
	 div5 = document.getElementById("autor");
	 div5.innerHTML = '<div class="noticiaArtigoTexto"><p><b>Escrito por:</b> '+noticiaArtigo[4]+'</p></div>';
	
	div6 = document.getElementById("tipo");
	div6.innerHTML = '<div class="noticiaArtigoTexto"><p><b>Valência:</b> '+noticiaArtigo[5]+'</p></div>';
	
	img = document.getElementById("image");
	img.src = noticiaArtigo[6];
}
/*init para a pagina noticiaArtigo*/	
jQuery(document).ready(function() {
	preencherCampos();
});
//]]>