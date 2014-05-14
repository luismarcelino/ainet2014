var scml = new Object();
scml.form = new Object();
scml.lang = new Object();

/* FORM VALIDATION ERROR MESSAGES */
scml.lang.form = {
	_all					: "Preencha este campo!",
	name					: "Introduza o seu nome!",
	email					: "Introduza um email válido!",
	password				: "Introduza a password!",
	date					: "Introduza uma data para a consulta!",
	birthDate				: "Introduza a sua data de nascimento!",
	zipCode					: "Introduza um codigo postal valido!",
	telefone				: "Introduza um numero de telefone!",
	message					: "Introduza uma mensagem!",
	address					: "Introduza uma morada!",
	town					: "Introduza uma localidade!",
	country					: "Seleccione um país!",
	repeatPassowrd			: "Introduza novamente a sua password!",
	medicalName				: "Seleccione o clinico!",
	photo					: "Selecione uma foto!",
	scheduleAppointment		: "Introduza um horário para as consultas",
	hour					: "Introduza a hora",
	specialty				: "Escolha uma especialidade!",
	healthSystem			: "Escolha o seu sistema/seguro de saúde!",
	sex						: "Seleccione o seu sexo!"
};

/* REGEX RULES FOR FORM VALIDATION */
scml.form.rules = {
	_all		: "[^\s]",
	email		: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
};

/* FORM VALIDATION */
scml.form.validate = function(evt) {
	var form = evt.target;
	var fields = jQuery(form).serializeArray();
	var focus = valid = true;
	var errors = 0;

	/* DELETE OLD ERRORS */
	jQuery(form).find('.msg_error').remove();

	/* CHECK FORM FIELDS */
	jQuery.each(fields, function(i, field){
		var f = jQuery(form[field.name]);

		if(f.hasClass("check")) {
			if(f.is('select')) {
				if (f.val() == "") {
					errors++;
					scml.form.show_error(f, field.name);
				}
			} else {
				var exp = (field.name in scml.form.rules) ? scml.form.rules[field.name] : scml.form.rules['_all'];

				if(!new RegExp(exp).test(field.value)) {
					errors++;
					scml.form.show_error(f, field.name);
				}
			}
		}

		/* FOCUS FIRST FIELD WITH ERROR */
		if(errors == 1 && focus == true) {
			focus = valid = false;
			f.focus();
		}
	});

	return valid;
};
scml.form.show_error = function(f, name) {
	var msg = (name in scml.lang.form) ? scml.lang.form[name] : scml.lang.form['_all'];
	f.after('<span class="msg_error">' + msg + '</span>');
};


/* JQUERY DOCUMENT READY */
jQuery(document).ready(function() {
	/* TOPBAR LOGIN */
	jQuery('#login_button').click(function() {
		jQuery('#topbar_login').slideToggle('400', function() {
			jQuery('#login').trigger("reset");
			jQuery(this).find('.msg_error').remove();
		});
	});


	/* BIND VALIDATION TO ALL FORMS THAT REQUIRE VALIDATION */
	jQuery('form.validate').submit(scml.form.validate);


	/* GOOGLE API FOOTER */
	var coordinates = new google.maps.LatLng('39.744026', '-8.804657');
	var opt = {
		center : coordinates,
		disableDefaultUI : true,
		disableDoubleClickZoom: true,
		draggable: false,
		scrollwheel: false,
		zoom : 16
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), opt);
	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		animation: google.maps.Animation.DROP,
		title: '39.744026, -8.804657'
	});
    
    $(".botao").click(function(event) {
        var conteudoBotao = jQuery(this).attr("data-id");
            jQuery(".container div").hide();
            jQuery("."+ conteudoBotao).show();
            jQuery("."+ conteudoBotao + " div").show();
            });
});
