$(document).ready(function() {

	iniciarSistema();
});

function iniciarSistema(){

	var valid=sessionStorage.getItem("d_s");

	if(valid == "true"){

		console.log("sesion iniciada: "+valid);

		$("#banner-oper").show();
		$("#banner-cobro").show();
		$("#banner-registro").hide();
		$("#banner-reclamo").hide();
		$(".link-registro").hide();
		$(".link-login").hide();

		$(".link-cobro").show();
		$(".link-operaciones").show();
		$(".link-reclamo").show();
		$(".link-perfil").show();
		$(".link-logout").show();
		$('#selectTDC').show();

	}

	else{

		console.log("NO login");

		$("#banner-oper").hide();
		$("#banner-cobro").hide();
		$("#banner-registro").show();
		$("#banner-reclamo").show();
		$(".link-registro").show();
		$(".link-login").show();

		$(".link-cobro").hide();
		$(".link-operaciones").hide();
		$(".link-reclamo").hide();
		$(".link-perfil").hide();
		$(".link-logout").hide();
		$('#selectTDC').hide();
	}

}