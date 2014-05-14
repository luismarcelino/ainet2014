  var exame = new Array();
        exame[0] = "Anatomia Patológica";
        exame[1] = "Análises Clínicas";
        exame[2] = "Audiometria";
        exame[3] = "Cardiologia";
        exame[4] = "Colonoscopia";
        exame[5] = "Dermatologia";
        exame[6] = "Doppler a cores, transesofágico";
        exame[7] = "Eco-Doppler";
        exame[8] = "Ecocardiografia Modo M, 2D";
        exame[9] = "Ecografia";
        exame[10] = "Ecografia Geral e Vascular";
        exame[11] = "Electrocardiograma com prova de esforço em tapete rolante";
        exame[12] = "Electrocardiograma simples";
        exame[13] = "Endoscopia alta";
        exame[14] = "Gastrenterologia";
        exame[15] = "Ginecologia";
        exame[16] = "Imagiologia";
        exame[17] = "Impedânciometria";
        exame[18] = "Mamografia Digital";
        exame[19] = "MAPA (medição ambulatória da pressão arterial)";
        exame[20] = "Neurologia";
        exame[21] = "Oftalmologia";
        exame[22] = "Osteodensitometria";
        exame[23] = "Otorrinolaringologia";
        exame[24] = "Pneumologia";
        exame[25] = "Posturografia dinâmica e computorizada";
        exame[26] = "Provas funcionais respiratórias";
        exame[27] = "Rectosigmoidoscopia";
        exame[28] = "Reumatologia";
        exame[29] = "Rx-Digital";
        exame[30] = "TAC";
        exame[31] = "Timpanometria";
        exame[32] = "Urologia";
        exame[33] = "Videonistagmografia";

        var consulta = new Array();
        consulta[0] = "Acupunctura";
        consulta[1] = "Cardiologia";
        consulta[2] = "Cirurgia Geral";
        consulta[3] = "Cirurgia Plástica e Reconstrutiva";
        consulta[4] = "Cirurgia Vascular";
        consulta[5] = "Dermatologia";
        consulta[6] = "Diabetes";
        consulta[7] = "Dietista";
        consulta[8] = "Endocrinologia";
        consulta[9] = "Estomatologia";
        consulta[10] = "Gastrenterologia";
        consulta[11] = "Ginecologia";
        consulta[12] = "Medicina Desportiva";
        consulta[13] = "Medicina Física e de Reabilitação";
        consulta[14] = "Mesoterapia";
        consulta[15] = "Neurocirurgia";
        consulta[16] = "Neurologia";
        consulta[17] = "Oftalmologia adulto e infantil";
        consulta[18] = "Ortopedia";
        consulta[19] = "Otorrinolaringologia";
        consulta[20] = "Pneumologia";
        consulta[21] = "Psicologia Clínica";
        consulta[22] = "Psiquiatria";
        consulta[23] = "Reumatologia";
        consulta[24] = "Urologia";

       

        function mostraExame() {
             divInput = document.getElementById("opcoesRadio");
             listaConsultas = '<select class="opcoesInputForm">';
             for(k=0;k<exame.length;k++){
                listaConsultas += '<option value="'+exame[k]+'">'+exame[k]+'</option>';
             }
             listaConsultas += '</select>';
             divInput.innerHTML = listaConsultas;
        }
                
        function mostraConsulta() {
             divInput = document.getElementById("opcoesRadio");
             listaConsultas = '<select class="opcoesInputForm">';
             for(k=0;k<consulta.length;k++){
                listaConsultas += '<option value="'+consulta[k]+'">'+consulta[k]+'</option>';
             }
             listaConsultas += '</select>';
             divInput.innerHTML = listaConsultas;
        }


        var listaErros;

         function validaFormulario(){
            var divErro = document.getElementById("mostraErroForm");
            listaErros ="";
            verificaForm = true;
            divErro.innerHTML ='';
            
            var nome = document.forms["formularioMarcacaoConsulta"][0].value;
            var data = document.forms["formularioMarcacaoConsulta"][2].value;
            var telefone = document.forms["formularioMarcacaoConsulta"][3].value;
    

            if(nome == null || nome.trim()==""){
                listaErros +='Atenção!! Nome não foi preenchido.<br>';
                verificaForm = false;
            }
            if(data==null || data.trim()==""){
                listaErros +='Atenção!! Data não foi preenchida.<br>';
                verificaForm = false;
            }
            if(telefone == null || telefone.trim()==""){
                listaErros +='Atenção!! Telefone não foi preenchido.<br>';
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
