const validator = {
  isValid: function (creditCardNumber) {
    /* ------------------- validar cuando el campo esta vacio ------------------- */
    if (creditCardNumber === "") {
      alert("Ingrese un numero");
      return false;
    }

    /* --------------------- convertir el string a un array --------------------- */
    const arrayTarjeta = creditCardNumber.split("");
    console.log(arrayTarjeta);

    /* ---------------------- validar que tenga 16 digitos ---------------------- */
    if (arrayTarjeta.length !== 16) {
      alert("La tarjeta debe contener 16 digitos");
      return false;
    }

    /* -------------------------------------------------------------------------- */
    /*                          iniciar algoritmo de luhn                         */
    /* -------------------------------------------------------------------------- */
  },
};

export default validator;
