import validator from "./validator.js";

//Agregar el evento submit a form
document.getElementById("formTarjeta").addEventListener('submit', validarTarjeta)

function validarTarjeta(event){
  event.preventDefault();//Previene el evento predeterminado del submit
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
      document.getElementById("tarjetaDinamica").classList.add("visa");
      break;
    case "Mastercard":
      document.getElementById("tarjetaDinamica").classList.add("mastercard");
      break;
    case "Discover":
      document.getElementById("tarjetaDinamica").classList.add("discover");
      break;
    default:
      break;
    }
    
    const mascara = validator.maskify(numero);

    document.getElementById("numeroTarjeta").innerHTML = mascara; //escribe la mascara en la tarjeta dinamica
    document.getElementById("iptTarjeta").value = mascara; //mandar un valor al htmls
    document.getElementById("iptTarjeta").disabled = true; //deshabilita el input

    document.getElementById("tarjetaDinamica").style.display = "block"; //muestra el tipo de tarjeta
    document.getElementById("btnNuevo").style.display = "block"; //muestra el boton

    document.getElementById("btnValidar").style.display = "none"; //oculte boton validar
    document.getElementById("tarjetaDefault").style.display = "none"; //oculta la tarjeta

   
    
  } else {
    alert("Tarjeta no valida");
  }
}
//manupulacion del don

window.validarNuevaTarjeta = function () {
  document.getElementById("iptTarjeta").value = ""; 
  document.getElementById("iptTarjeta").disabled = false; //habilita el input
  document.getElementById("iptTarjeta").focus(); //coloca el cursor en el input

  document.getElementById("btnNuevo").style.display = "none";//oculta el boton
  document.getElementById("tarjetaDinamica").style.display = "none";

  document.getElementById("btnValidar").style.display = "block";//muestra el boton validar
  document.getElementById("tarjetaDefault").style.display = "block"; //mostrar la tarjeta
};
