/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function mudarnoticia1() {
    var img=document.getElementById("notImg");
    img.setAttribute("src","assets/images/1.jpg" );
    var text=document.getElementById("texto");
    text.firstChild.nodeValue = "O antigo hospital de Leiria localizado no centro da cidade, desactivado há largos anos, sofreu extensas obras de remodelação e modernização. Tendo reiniciado funções em Março passado com a abertura da unidade de cuidados continuados, integrada na rede nacional de cuidados continuados.";
}


function mudarnoticia2() {
    var img=document.getElementById("notImg");
    img.setAttribute("src","assets/images/2.jpg" );
    var text=document.getElementById("texto");
    text.firstChild.nodeValue = "Já se encontra em funcionamento, sob a alçada da Santa Casa da Misericórdia de Leiria, a Residencial Assistida XXI. ";
}

function mudarnoticia3() {
    var img=document.getElementById("notImg");
    img.setAttribute("src","assets/images/3.jpg" );
     var text=document.getElementById("texto");
    text.firstChild.nodeValue = "O velho edifício onde outrora funcionou o Hospital Distrital de Leiria está de novo activo e a acolher doentes. Não foi fácil à Santa Casa da Misericórdia de Leiria ressuscitar o ‘gigante adormecido’, mas a verdade é que já está a funcionar, no segundo piso do edifício, a Unidade de Cuidados Continuados Integrados, que se destina a pessoas que necessitam de apoio médico em meio hospitalar.";
}
function mudarnoticia4() {
    var img=document.getElementById("notImg");
    img.setAttribute("src","assets/images/3.jpg" );
    var text=document.getElementById("texto");
    text.firstChild.nodeValue = "Já se encontra em funcionamento, sob a alçada da Santa Casa da Misericórdia de Leiria, a Residencial Assistida XXI. ";
}

//
//function mudarnoticia1livro() {
//    
    $('#cena').click( function(){    
    $('#pages').html('<section><div><h2>History</h2><p>Canvas was initially introduced by Apple for use inside their own Mac OS X WebKit component, powering applications like Dashboard widgets and the Safari browser. Later, it was adopted by Gecko browsers and Opera and standardized by the WHATWG on new proposed specifications for next generation web technologies.</p></div></section>');
});
//    var pages=document.getElementById("pages");  
//    $('pages').prepend('<section><div><h2>History</h2><p>Canvas was initially introduced by Apple for use inside their own Mac OS X WebKit component, powering applications like Dashboard widgets and the Safari browser. Later, it was adopted by Gecko browsers and Opera and standardized by the WHATWG on new proposed specifications for next generation web technologies.</p></div></section>');
//    }


function mudarnoticia2livro() {
    var img=document.getElementById("notImg");
    img.setAttribute("src","assets/images/2.jpg" );
    var text=document.getElementById("texto");
   text.firstChild.nodeValue = "Já se encontra em funcionamento, sob a alçada da Santa Casa da Misericórdia de Leiria, a Residencial Assistida XXI. ";
}


function showContent() {
    var destino = document.getElementById('containerEspecialidades');
    destino.innerHTML = "teste";
}

$(document).ready(function() {
    $("#acupunctura").click(function() {
        $("div[id*=about]").hide();
        $("#about-acupunctura").show();
    });
});

$(document).ready(function() {
    $("#audiologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-audiologia").show();
    });
});

$(document).ready(function() {
    $("#cardiologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-cardiologia").show();
    });
});

$(document).ready(function() {
    $("#cirurgiaGeral").click(function() {
        $("div[id*=about]").hide();
        $("#about-cirurgiaGeral").show();
    });
});

$(document).ready(function() {
    $("#cirurgiaPlastica").click(function() {
        $("div[id*=about]").hide();
        $("#about-cirurgiaPlastica").show();
    });
});

$(document).ready(function() {
    $("#cirurgiaVascular").click(function() {
        $("div[id*=about]").hide();
        $("#about-cirurgiaVascular").show();
    });
});

$(document).ready(function() {
    $("#clinicaGeral").click(function() {
        $("div[id*=about]").hide();
        $("#about-clinicaGeral").show();
    });
});

$(document).ready(function() {
    $("#dermatologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-dermatologia").show();
    });
});

$(document).ready(function() {
    $("#doencasVenosas").click(function() {
        $("div[id*=about]").hide();
        $("#about-doencasVenosas").show();
    });
});

$(document).ready(function() {
    $("#eletromiografia").click(function() {
        $("div[id*=about]").hide();
        $("#about-eletromiografia").show();
    });
});

$(document).ready(function() {
    $("#endocrinologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-endocrinologia").show();
    });
});

$(document).ready(function() {
    $("#estomatologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-estomatologia").show();
    });
});

$(document).ready(function() {
    $("#fisiatria").click(function() {
        $("div[id*=about]").hide();
        $("#about-fisiatria").show();
    });
});

$(document).ready(function() {
    $("#gastrenterologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-gastrenterologia").show();
    });
});

$(document).ready(function() {
    $("#ginecologiaObstreticia").click(function() {
        $("div[id*=about]").hide();
        $("#about-ginecologiaObstreticia").show();
    });
});

$(document).ready(function() {
    $("#medicinaDentaria").click(function() {
        $("div[id*=about]").hide();
        $("#about-medicinaDentaria").show();
    });
});

$(document).ready(function() {
    $("#medicinaDesportiva").click(function() {
        $("div[id*=about]").hide();
        $("#about-medicinaDesportiva").show();
    });
});

$(document).ready(function() {
    $("#medicinaInterna").click(function() {
        $("div[id*=about]").hide();
        $("#about-medicinaInterna").show();
    });
});

$(document).ready(function() {
    $("#mesoterapia").click(function() {
        $("div[id*=about]").hide();
        $("#about-mesoterapia").show();
    });
});

$(document).ready(function() {
    $("#neurocirurgia").click(function() {
        $("div[id*=about]").hide();
        $("#about-neurocirurgia").show();
    });
});

$(document).ready(function() {
    $("#neurologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-neurologia").show();
    });
});

$(document).ready(function() {
    $("#nutricao").click(function() {
        $("div[id*=about]").hide();
        $("#about-nutricao").show();
    });
});

$(document).ready(function() {
    $("#oftalmologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-oftalmologia").show();
    });
});

$(document).ready(function() {
    $("#ortopedia").click(function() {
        $("div[id*=about]").hide();
        $("#about-ortopedia").show();
    });
});

$(document).ready(function() {
    $("#otorrinolaringologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-otorrinolaringologia").show();
    });
});

$(document).ready(function() {
    $("#pneumologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-pneumologia").show();
    });
});

$(document).ready(function() {
    $("#psicologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-psicologia").show();
    });
});

$(document).ready(function() {
    $("#psiquiatria").click(function() {
        $("div[id*=about]").hide();
        $("#about-psiquiatria").show();
    });
});

$(document).ready(function() {
    $("#reumatologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-reumatologia").show();
    });
});

$(document).ready(function() {
    $("#urologia").click(function() {
        $("div[id*=about]").hide();
        $("#about-urologia").show();
    });
});

