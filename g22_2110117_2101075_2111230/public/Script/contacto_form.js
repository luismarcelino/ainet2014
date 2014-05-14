	var listaErros;
            
        function validaFormulario(){
            var divErro = document.getElementById("mostraErroForm");
            listaErros ="";
            verificaForm = true;
            divErro.innerHTML ='';
            
            var nome = document.forms["contactoForm"][0].value;
            var email = document.forms["contactoForm"][1].value;
            var contacto = document.forms["contactoForm"][2].value;
            var mensagem = document.forms["contactoForm"][3].value;

            if(nome == null || nome.trim()==""){
                listaErros +='Atenção!! Nome não foi preenchido.<br>';
                verificaForm = false;
            }
            if(email==null || email.trim()==""){
                listaErros +='Atenção!! Email não foi preenchido.<br>';
                verificaForm = false;
            }
            if(contacto == null || contacto.trim()==""){
                listaErros +='Atenção!! Contacto não foi preenchido.<br>';
                verificaForm = false;
            }
            if(mensagem == null || mensagem.trim()==""){
                listaErros +='Atenção!! Mensagem não foi preenchida.<br>';
                verificaForm = false;
            }

            
            if(verificaForm == false){
                divErro.innerHTML = listaErros;
                return false;
            }else{
                errorDiv.innerHTML = "Pedido enviado com sucesso!";
                return true;
            }
        }
