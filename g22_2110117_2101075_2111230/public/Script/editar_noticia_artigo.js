 var listaEspecialidades = new Array();
    listaEspecialidades[0] = "Cardiologia";
    listaEspecialidades[1] = "Neurologia";
    listaEspecialidades[2] = "Ortopedia";
    listaEspecialidades[3] = "Pediatria";
    listaEspecialidades[4] = "Urologia";
    listaEspecialidades[5] = "Psiquiatria e Psicologia";

    function mostrarValencias() {
         div = document.getElementById("tipoNoticiaArtigo");
         div.innerHTML = '<select class="elementosInputFormularioSelect" name="referente"><option value="residencial">Residencial</option><option value="lar">Lar</option><option value="internamento">Internamento</option><option value="apoioDomiciliario">Apoio domiciliário</option></select>';
    }

    function mostrarEspecialidades() {
         div = document.getElementById("tipoNoticiaArtigo");
         div.innerHTML = '';
         aux = '<select class="elementosInputFormularioSelect" name="referente">';
         for(k = 0; k < listaEspecialidades.length;k++){
            aux += '<option value="'+listaEspecialidades[k]+'">'+listaEspecialidades[k]+'</option>';
        }
        aux += '</select>';
        div.innerHTML = aux;
    }

     var listaErros;
            
        function validaFormulario(){
            var divErro = document.getElementById("mostraErroForm");
            listaErros ="";
            verificaForm = true;
            divErro.innerHTML ='';
            
            var titulo = document.forms["noticiaArtigo"][0].value;
            var textoResumo = document.forms["noticiaArtigo"][1].value;
            var corpoTexto = document.forms["noticiaArtigo"][2].value;
            var foto = document.forms["noticiaArtigo"][3].value;
            var data = document.forms["noticiaArtigo"][4].value;
            var autor = document.forms["noticiaArtigo"][5].value;

            if(titulo == null || titulo.trim()==""){
                listaErros +='Atenção!! Titulo não foi preenchido.<br>';
                verificaForm = false;
            }
            if(textoResumo==null || textoResumo.trim()==""){
                listaErros +='Atenção!! Texto de Resumo não foi preenchido.<br>';
                verificaForm = false;
            }
            if(corpoTexto == null || corpoTexto.trim()==""){
                listaErros +='Atenção!! Corpo de Texto não foi preenchido.<br>';
                verificaForm = false;
            }
            if(foto == null || foto.trim()==""){
                listaErros +='Atenção!! Foto não foi preenchida.<br>';
                verificaForm = false;
            }
            if(data==null || data.trim()==""){
                listaErros +='Atenção!!  Data não foi preenchida.<br>';
                verificaForm = false;
            }
            if(autor == null || autor.trim()==""){
                listaErros +='Atenção!! Autor não foi preenchido.<br>';
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
