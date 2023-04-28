import validator from "./validator.js";

window.validarTarjeta = function () {
  const numero = document.getElementById("iptTarjeta").value;
  console.log("numero desde index", numero);
  const esValido = validator.isValid(numero);
  console.log(esValido);
};
