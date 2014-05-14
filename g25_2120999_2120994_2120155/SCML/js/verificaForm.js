    //validação do formulário
        function trim(str){
         return str.replace(/^\s+/gi, '').replace(/\s+$/gi, '');
         }
         
         function validateForm(evt){
         
         var form = evt.target;
         
         var name = trim(form.name.value) || "";
         if(name.length == 0){
         alert("Tem de introduzir um nome válido.");
         form.name.focus();
         $('#nome').css('border-color', 'red');
         return false;
         
         }else{
         $('#nome').css('border-color', 'green');
         }
         
         var name = trim(form.apelido.value) || "";
         if(name.length == 0){
         alert("Tem de introduzir um apelido válido.");
         form.apelido.focus();
         $('#apelido').css('border-color', 'red');
         return false;
         }else{
         $('#apelido').css('border-color', 'green');
         }
         
         var age = form.age.value || "";
         if(!age.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
         alert("Insira uma data de nascimento válida");
         form.age.focus();
         $('#datepicker').css('border-color', 'red');
         return false;
         }else{
         $('#datepicker').css('border-color', 'green');
         }
             
        var data = form.data.value || "";
         if(!data.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
         alert("Insira uma data marcação válida");
         form.data.focus();
         $('#datepicker1').css('border-color', 'red');
         return false;
         }else{
         $('#datepicker1').css('border-color', 'green');
         }
         
        
         var phone = form.phone.value || "";
         if(!phone.match(/^\d{9}$/)){
         alert("O número de telefone tem de ser válido(ex:912345678)");
         form.phone.focus();
         $('#phone').css('border-color', 'red');
         return false;
         }else{
         $('#phone').css('border-color', 'green');
         }
         
         

         var email = trim(form.email.value) || "";
         if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
         alert("Email inválido. Tem de estar na forma: xxxxxxxxx@xxxx.xxx");
         form.email.focus();
         $('#email').css('border-color', 'red');
         return false;
         }else{
         $('#email').css('border-color', 'green');
         }     
         return true; 
         }

                 // Mini calendário
                 $(function() {
                   $( "#datepicker , #datepicker1" ).datepicker({
                    dateFormat: 'dd/mm/yy',
                    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
                    dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
                    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
                    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                    nextText: 'Próximo',
                    prevText: 'Anterior'

                 });
                });


                 $(document).ready(function(){
                  $("#formulario").submit(validateForm);
               });