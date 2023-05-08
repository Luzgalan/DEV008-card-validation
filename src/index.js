import validator from "./validator.js";

//Prevenir que la pagina recarge 
const form = document.getElementById("formTarjeta");
form.addEventListener('submit', handleForm)

function handleForm(event) { event.preventDefault(); } 

window.validarTarjeta = function () {
  const numero = document.getElementById("iptTarjeta").value; //traer un valor al html
  if(numero === ''){
    return;
  }
  const esValido = validator.isValid(numero);

  let franquicia;
  if (esValido) {
    franquicia = validator.obtenerFranquicia(numero);

    switch (franquicia) {
    case "Visa":
      document.getElementById("tipoTarjeta").classList.add("visa");
      break;
    case "Mastercard":
      document.getElementById("tipoTarjeta").classList.add("mastercard");
      break;
    default:
      break;
    }
    const mascara = validator.maskify(numero);
    document.getElementById("numeroTarjeta").innerHTML = mascara;
    document.getElementById("tipoTarjeta").style.display = "block"; //muestra el tipo de tarjeta
    document.getElementById("iptTarjeta").value = mascara; //mandar un valor al htmls
    document.getElementById("btnValidar").style.display = "none"; //oculte
    document.getElementById("iptTarjeta").disabled = true; //habilita el input
    document.getElementById("btnNuevo").style.display = "block"; //muestra el boton
    document.getElementById("tarjetaDefault").style.display = "none"; //oculta la tarjeta
    // alert("tarjeta valida");
  } else {
    alert("Tarjeta no valida");
  }
};

window.validarNuevaTarjeta = function () {
  document.getElementById("btnNuevo").style.display = "none";
  document.getElementById("btnValidar").style.display = "block";
  document.getElementById("iptTarjeta").value = "";
  document.getElementById("iptTarjeta").disabled = false; //habilita el input
  document.getElementById("iptTarjeta").focus(); //coloca el cursor en el input
  document.getElementById("tipoTarjeta").style.display = "none";
  document.getElementById("tarjetaDefault").style.display = "block"; //mostrar la tarjeta
};
