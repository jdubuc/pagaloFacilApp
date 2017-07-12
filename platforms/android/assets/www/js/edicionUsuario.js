$(document).ready(function() {

  var valid=sessionStorage.getItem("d_s");

  if(valid){
    console.log("sesion iniciada");
    cargarDatosUsuario();
    }
  else{
    console.log("NO login");    
  }
  

});

function cargarDatosUsuario(){
  $.ajax({

    url: "https://pagalofacil.com/services/ServicioUsuario.php",
    type: "POST",
    data: {accion: "buscarDatosUsuario"/*, id_cliente:sessionStorage.getItem("id_cliente")*/},
    dataType: 'json',
    success: function(data){  

       console.log(data);

      if(data.success)
      {   
        console.log("entra success login");
        $("#nombre").val(data.nombre);
        $("#nombre").focusin();
        $("#apellido").val(data.apellido);
        $("#apellido").focusin();
        $("#cedula").val(data.cedula);
        $("#cedula").focusin();
        $("#telefono").val(data.telefono);
        $("#telefono").focusin();
        $("#direccion").val(data.direccion);
        $("#direccion").focusin();
        $("#correo").val(data.correo);
        $("#correo").focusin();
        $("#rol").val(data.rol);
        $("#rol").focusin();
        $("#username").val(data.username);
        $("#username").focusin();
        //$("#password").val(data.contrasena);
        
      }
      else
      {

        Materialize.toast(data.message, 4000);  

        //sessionStorage.setItem("d_s", false);

      }

    }

  });
}


var password = document.getElementById("password"), confirm_password = document.getElementById("password_confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


$('#btnSubmitUser').on('click', function(e) {  

  var telefono = $("#telefono").val();
  var direccion = $("#direccion").val();
  var correo = $("#correo").val();
  var password = $("#password").val();
  var password_confirm = $("#password_confirm").val();

  datosIncompletos = false;
  
  if(telefono == "" || correo == "" || password == "" || password_confirm == "")
  {
    datosIncompletos = true;
    Materialize.toast('Debe llenar los campos solicitados', 4000);
  }

  $(".invalid").each(function()
  { 
    datosIncompletos = true;
  })

  if(datosIncompletos)
  {
    e.preventDefault();
    Materialize.toast('Debe corregir los errores del formulario', 4000);
  }
  else
  {
    $.ajax({
      url: "https://pagalofacil.com/services/ServicioUsuario.php",
      type: "POST",
      data: {accion: "actualizarPerfil", telefono: telefono, direccion: direccion, correo: correo, contrasena: password/*, id_cliente:sessionStorage.getItem("id_cliente")*/},
      dataType: 'json',
      success: function(data){  
         
         console.log(data);
         Materialize.toast(data.message, 4000); 

        if(data.success)
        {   
          console.log("perfil actualizado");

          window.location="https://pagalofacil.com";
        }
        else
        {
          //Materialize.toast(data.message, 4000); 
          e.preventDefault();
        }

      }

    });
  }
}); 