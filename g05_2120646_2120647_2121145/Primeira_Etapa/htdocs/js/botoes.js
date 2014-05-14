// <![CDATA[ 

$(document).ready(function() {	

//chama o primeiro botao li automaticamente	

btnPress($('#especialidades li'),$('#li0'));	


	
$('#especialidades li').click(function() {
	
	btnPress($('#especialidades li'),$(this));
	
	});
	
	//evento dos botoes marcar consulta dentro da informacao dos medicos
$('#info button').click(function() {
	
	window.location = 'hospital_marcacao_consulta.html';
	
	});
	
	//efeito crescente ao clicar em um botao
function btnPress($var1, $var2){
	
	if($var2.width() == '270'){
		$var1.css('width','270px');
		$var1.css('background-image','');
		$var1.css('background-color','#6eaee9');
		$var1.css('color','#FFFFFF');
		$var2.css('color','#1D198D');
		$var2.css('background-image', 'linear-gradient(260deg,rgba(255,255,255,1.00) 0%,rgba(62,140,210,1.00) 100%)');
		$var2.animate({width:"312px"},125);
		
		selectInfoDiv($var2);
		}
	}
	
	function selectInfoDiv($var) {
		
		$('#acupunctura').hide();
		$('#cardiologia').hide();
		
		if($var.text() == 'Acupunctura') {
			
			$('#acupunctura').show();
			}
		
		if($var.text() == 'Cardiologia') {
			
			$('#cardiologia').show();
			}
		}
		
});

// ]]> 