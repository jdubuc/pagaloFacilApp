$('#btnAceptar').on('click', function(e) { 

  var user = $("#user").val();
    //var pssw = CryptoJS.SHA1($("#password").val());
  var pssw = $("#password").val();

  
  if (user === "" || pssw==="") {
      Materialize.toast("Ingrese un Usuario y contraseña", 4000);
  }
  else{
    
      $.ajax({
        url: "https://www.pagalofacil.com/services/ServicioUsuarioApp.php",
        type: "POST",
        data: {accion: "iniciarSesion", user: user, pssw: pssw},
        dataType: 'json',

        success: function(data){ 

          console.log(data);

          if(data.success)
          {  
            if(data.flag){

              sessionStorage.setItem("d_s", true);
              sessionStorage.setItem("user", data.user);
              sessionStorage.setItem("id_cliente", data.id_cliente);

              var id_factura = getParameterByName('i');
              if(id_factura == -1)
              {
                window.location="../index.html";
              }
              else
              {
                window.location="../orden-pago.html?i="+id_factura;
              }
            }
            else
            {
              Materialize.toast(data.message, 4000);
              sessionStorage.setItem("d_s", false);
            }
          
          }
          else
          {
            Materialize.toast(data.message, 4000);
            sessionStorage.setItem("d_s", false);
          }

        }       
      });       
  }


//document.getElementById("form_id").submit(); 
 

}); 

$('#btnRecordar').on('click', function(e) {  

  var mail = $("#correo").val();
if (mail === "") {
    Materialize.toast("Ingrese su correo por favor", 4000);
}
else{
  if (grecaptcha.getResponse() === "") {
    Materialize.toast("Verifique que ud no es un robot", 4000);
    }else{
   $.ajax({

    url: "https://pagalofacil.com/services/ServicioUsuario.php",

    type: "POST",

    data: {accion: "olvidecontraseña", mail: mail,
    recaptcha:grecaptcha.getResponse()},

    dataType: 'json',

    success: function(data){  

       console.log(data);

       //e.preventDefault();

      if(data.success)
      {   console.log("entra success login");
        Materialize.toast(data.message, 4000);

      }
      else
      {

        Materialize.toast(data.message, 4000);

       // e.preventDefault();

      }

    }

  });
}
}


//document.getElementById("form_id").submit(); 
 

}); 