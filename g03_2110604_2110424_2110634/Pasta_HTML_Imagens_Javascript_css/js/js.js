/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//**************************Editor de Texto tinyMce**************************************************************************************
$(document).ready(function() {
    tinymce.init({
        selector: "textarea#editor",
        theme: "modern",
        width: 800,
        height: 100,
        /*setup: function(evt) {
         evt.onKeyPress.add(function(evt, e) { // evento para apagar a msg de erro - nao está a funcionar
         //console.debug('Key press event: ' + e.keyCode);
         $("#msgErroEditor").html("");
         });
         },*/
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "save table contextmenu directionality emoticons template paste textcolor"
        ],
        content_css: "css/content.css",
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
        style_formats: [
            {title: 'Bold text', inline: 'b'},
            {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
            {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
            {title: 'Example 1', inline: 'span', classes: 'example1'},
            {title: 'Example 2', inline: 'span', classes: 'example2'},
            {title: 'Table styles'},
            {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ]
    });
});

//**************************************Popup Editar Dados do Medico*****************************************************************
$(document).ready(function() {
    $("#botaoDados").click(function() {
        $("#popNome").val($("#nomeDoc").html());
        //$("#popEsp").val($("#espDoc").html());
        encontrarEspecialidade($("#espDoc").html());
        $("#popTelefone").val($("#telDoc").html());
        $("#popEmail").val($("#mailDoc").html());
        $("#popConsultas").val($("#periodosDoc").html());
        $("#dialogDados").dialog({
            resizable: false,
            width: 500,
            height: 490,
            modal: true,
            buttons: {
                Guardar: function() {
                    if (validarDadosMedico()) {
                        $("#nomeDoc").html($("#popNome").val());
                        $("#espDoc").html($("#popEsp option:selected").text());
                        $("#telDoc").html($("#popTelefone").val());
                        $("#mailDoc").html($("#popEmail").val());
                        $("#periodosDoc").html($("#popConsultas").val());
                        $(this).dialog("close");
                        $("#msgErro").html("");
                    }
                },
                Cancelar: function() {
                    $(this).dialog("close");
                    $("#msgErro").html("");
                }
            }
        });
    });
});
function validarDadosMedico() {
    var regexMail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var regexPhone = /^\d{3}-?\d{3}-?\d{3}$/g;
    if ($("#popNome").val() === "") {
        $("#msgErroPopup").html("Nome Inválido!");
        $("#popNome").focus();
        return false;
    }
    if ($("#popEsp option:selected").text() === "--- Seleccione ---" || $("#popEsp option:selected").text() === "") {
        $("#msgErroPopup").html("Especialidade Inválida!");
        $("#popEsp").focus();
        return false;
    }
    if (!(regexPhone.test($("#popTelefone").val()))) {
        $("#msgErroPopup").html("Telefone Inválido!");
        $("#popTelefone").focus();
        return false;
    }
    if (!(regexMail.test($("#popEmail").val()))) {
        $("#msgErroPopup").html("Email Inválido!");
        $("#popEmail").focus();
        return false;
    }
    if ($("#popConsultas").val() === "") {
        $("#msgErroPopup").html("Peridos de Consulta Inválidos!");
        $("#popConsultas").focus();
        return false;
    }
    return true;
}
function encontrarEspecialidade(text) {

    $("#popEsp").find('option').each(function(i, opt) {
        if (opt.value === text) {
            $(opt).attr('selected', 'selected');
        }
    });
}
$(document).ready(function() { //eventos para apagar a mensagem de erro
    $("#formPopup").keypress(function() {
        $("#msgErroPopup").html("");
    });
    $("#popEsp").click(function() {
        $("#msgErroPopup").html("");
    });
    //$("#tinyMce").keypress(function() {
    //$("#msgErroEditor").html("");
    //});
});
//**************************************DatePicker alternativo ao input type="date" do HTML5**************************************************************
$(document).ready(function() {
    if (!Modernizr.inputtypes.date) {
        $(".datePicker").datepicker();
    } else {
        $(".datePicker").attr("type", "date");
    }
});
//**************************************Submit do tinyMce*****************************************************************

function validarDadosTiny(evt) {
    var assunto = evt.target.assunto.value; // validado com o atributo required
    var texto = tinymce.get('editor').getContent(); // só para saber como se vai buscar o texto do editor
    if (texto === "") {
        $("#msgErroEditor").html("O texto está vazio!");
        window.setTimeout(apagarMsgErro,5000);
    } else {
        var d = new Date();
        var s = [];
        s.push(getDia(d));
        s.push(getMes(d));
        s.push(d.getFullYear());
        $('<tr class="linhas"><td>' + s.join("/") + '</td><td>' + assunto + '</td></tr>').insertBefore("#tabelaArtigos > tbody"); // insero no inicio da tabela
        //$("#tabelaArtigos > tbody").append('<tr class="linhas"><td>' + s.join("/") + '</td><td>' + assunto + '</td></tr>'); // insere no fim da tabela
    }
    return false; //apenas para o submit nao ser feito
}

function apagarMsgErro(){
    
    $("#msgErroEditor").html("");
}

function getMes(date) {
    var mes = date.getMonth() + 1; // +1 porque em janeiro devolve 0 e em Dezembro 11
    return mes < 10 ? '0' + mes : mes;
}
function getDia(date) {
    var dia = date.getDate();
    return dia < 10 ? '0' + dia : dia;
}
$(document).ready(function() {
    $("#formTiny").submit(validarDadosTiny);
});
//************************************** Funções da página EncontrarMédico *****************************************************************
function pesquisarMedicoPorNome() {
    alert("ainda não pesquisa por nome");
}

function pesquisarMedicoPorEspecialidade() {
    alert("ainda não pesquisa por especialidade");
}


//************************************** Funções do cabeçalho *****************************************************************
function pesquisaPortal() {
    alert("funcionalidade não implementada");
}
//**************************************Popup Login *****************************************************************
function acederAreaReservada() {
    $("#dialogLogin").dialog({
        resizable: false,
        width: 450,
        height: 310,
        modal: true,
        buttons: {
            Guardar: function() {
                if (validarDadosLogin()) {
                    $("#nomeDoc").html($("#popNome").val());
                    $("#mailDoc").html($("#popEmail").val());
                    $(this).dialog("close");
                    $("#msgErro").html("");
                }
            },
            Cancelar: function() {
                $(this).dialog("close");
                $("#msgErro").html("");
            }
        }
    });
}

function validarDadosLogin() {
    var passwordReal = "admin";
    var regexMail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    if ((!(regexMail.test($("#popUsername").val()))) || ($("#popPass").val !== passwordReal)) {
        $("#msgErroPopupLogin").html("Username ou Password inválidos!");
        return false;
    }
    if ($("#popPass").val() === "") {
        $("#msgErroPopupLogin").html("Tem de inserir a password!");
        $("#popPass").focus();
        return false;
    }

    return true;
}

$(document).ready(function() {
    $("#btnAreaReservada").click(acederAreaReservada);
});
//**************************************Carrossel Home page *****************************************************************
$(document).ready(function() {
//based on Kevin Liew @ http://www.queness.com/post/923/create-a-simple-infinite-carousel-with-jquery
//rotation speed and timer
    var speed = 5000;
    var run = setInterval('rotate()', speed);
    //grab the width and calculate left value
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);
    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));
    //set the default item to the correct position 
    $('#slides ul').css({'left': left_value});
    //if user clicked on prev button
    $('#prev').click(function() {
//get the right position            
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
        //slide the item            
        $('#slides ul').animate({'left': left_indent}, 200, function() {

//move the last item and put it as first item            	
            $('#slides li:first').before($('#slides li:last'));
            //set the default item to correct position
            $('#slides ul').css({'left': left_value});
        });
        //cancel the link behavior            
        return false;
    });
    //if user clicked on next button
    $('#next').click(function() {

//get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;
        //slide the item
        $('#slides ul').animate({'left': left_indent}, 200, function() {
//move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));
            //set the default item to correct position
            $('#slides ul').css({'left': left_value});
        });
        //cancel the link behavior
        return false;
    });
    //if mouse hover, pause the auto rotation, otherwise rotate it
    $('#slides').hover(
            function() {
                clearInterval(run);
            },
            function() {
                run = setInterval('rotate()', speed);
            }
    );
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin :)  
function rotate() {
    $('#next').click();
}
//**************************************Página Especialidades *****************************************************************
$(document).ready(function() {
    var celulaAnterior = null;
    var count = 0;
    $(".colunaEsq").click(function(evt) {
        var titulo = this.innerHTML;
        var divEle = document.getElementById("t_especialidades");
        var h2s = divEle.getElementsByTagName("h2");
        h2s[0].innerHTML = titulo;
        if (count !== 0) {
            this.style.backgroundColor = "#CC9900";
            document.getElementById(celulaAnterior).style.backgroundColor = "rgb(64, 140, 210)";
            celulaAnterior = this.getAttribute("id");
        } else {
            this.style.backgroundColor = "#CC9900";
            celulaAnterior = this.getAttribute("id");
            count = 1;
        }


    });
});
//**************************************Página Encontrar medico *****************************************************************
function marcarConsulta() {
    open("formularioConsulta.html", "_self");
}