import validator from "./validator.js";

window.validarTarjeta = function () {
  const numero = document.getElementById("iptTarjeta").value; //traer un valor al html

  /* ------------------- validar cuando el campo esta vacio ------------------- */
  if (numero === "") {
    alert("No se puede enviar un campo vacio");
    return;
  }
  const esValido = validator.isValid(numero);
  const mascara = validator.maskify(numero);
  let franquicia;
  document.getElementById("iptTarjeta").value = mascara; //mandar un valor al htmls
  if (esValido) {
    franquicia = validator.obtenerFranquicia(numero);
    alert("tarjeta valida");
  } else {
    alert("Tarjeta no valida");
  }

  document.getElementById("btnNuevo").style.display = "block"; //muestra el boton
  document.getElementById("btnValidar").style.display = "none"; //oculte
  document.getElementById("iptTarjeta").disabled = true; //habilita el input

  console.log(franquicia);
};

window.validarNuevaTarjeta = function () {
  document.getElementById("btnNuevo").style.display = "none";
  document.getElementById("btnValidar").style.display = "block";
  document.getElementById("iptTarjeta").value = "";
  document.getElementById("iptTarjeta").disabled = false; //habilita el input
  document.getElementById("iptTarjeta").focus(); //coloca el cursor en el input
};
