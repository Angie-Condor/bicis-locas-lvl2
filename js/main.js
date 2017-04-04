function validateForm(){
	var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var requeridos = document.getElementsByClassName('form-control');
  var bicicleta = document.getElementById('bicicleta');
  var twitter = document.getElementById('input-social');
  var letras = /^[a-zA-Zñá-ú+\s]*$/;
  var letra1Mayus = /^[A-Z]{1}/;
  var formatoEmail = /\S+@\S+\.\S+/;
  var regExCant = /^\s+|\s+$/;
  var regExNum = /[0-9]/;
  var msjNombre = document.getElementById("msj-nombre");
  var msjApellido = document.getElementById("msj-apellido");
  var msjEmail = document.getElementById("msj-email");
  var msjPass = document.getElementById("msj-pass");
  var msjTipo = document.getElementById("msj-tipo");
  function mostrarMsj(elemId,msj){
    var span = document.getElementById(elemId);
    span.innerText = msj;
  }

  function ocultar(){
    var span = document.getElementsByTagName("span");
    for (var i = 0; i < span.length; i++){
      span[i].style.display = "none";
    }
  }

  if (requeridos[0].value == "" || requeridos[1].value == "" || requeridos[2].value == "" || requeridos[3].value == "" || bicicleta.value == "0"){
    mostrarMsj("msj-nombre","Este campo es obligatorio");
    mostrarMsj("msj-apellido","Este campo es obligatorio");
    mostrarMsj("msj-email","Este campo es obligatorio");
    mostrarMsj("msj-pass","Este campo es obligatorio");
    mostrarMsj("msj-tipo","Este campo es obligatorio");
    msjNombre.style.display = "block";
    msjApellido.style.display = "block";
    msjEmail.style.display = "block";
    msjPass.style.display = "block";
    msjTipo.style.display = "block";
  }else{
    msjNombre.style.display = "none";
    msjApellido.style.display = "none";
    msjEmail.style.display = "none";
    msjPass.style.display = "none";
    msjTipo.style.display = "none";
  }

  // function validaNombre(){
  //   if(nombre.value)
  // }
  // if(name.value.search(letras) || lastname.value.search(letras)){
  //   console.log("estoy acá");
  //   mostrarMsj("msj-nombre","Este campo debe contener solo letras");
  // } else if(name.value.search(letra1Mayus) || lastname.value.search(letra1Mayus)){
  //     mostrarMsj("msj-nombre","Debe ingresar la primera letra con mayúscula.") ;
  // } else if(email.value.search(formatoEmail)){
  //     alert ("Error:\n Debe ingresar un e-mail válido.") ;
  // } else if (password.value == "password" || password.value == "123456" || password.value == "098754") {
  //     alert("Error:\n No puede usar esa palabra como password.");
  // } else if (password.value.length < 6) {
  //     alert("Error:\n Password debe tener como mínimo 6 caracteres.");
  // } else {
  //     alert("Los datos son correctos. \n Gracias.");
  // }
}
