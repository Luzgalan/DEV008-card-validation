const validator = {
  isValid: function (creditCardNumber) {
    /* --------------------- convertir el string a un array --------------------- */
    const arrayTarjeta = creditCardNumber.split("");

    /* ---------------------- validar que tenga 16 digitos ---------------------- */
    // if (arrayTarjeta.length !== 16) {
    //   return false;
    // }

    /* -------------------------------------------------------------------------- */
    /*                          iniciar algoritmo de luhn                         */
    /* -------------------------------------------------------------------------- */

    arrayTarjeta.reverse();

    for (let i = 1; i < arrayTarjeta.length; i = i + 2) {
      arrayTarjeta[i] = arrayTarjeta[i] * 2;
      if (arrayTarjeta[i] > 9) {
        arrayTarjeta[i] = arrayTarjeta[i] - 9;
      }
    }

    let suma = 0;
    arrayTarjeta.forEach((numero) => {
      suma = suma + parseInt(numero, 10);
    });
    return suma % 10 === 0 ? true : false;
  },

  maskify: function (creditCardNumber) {
    const arrayTarjeta = creditCardNumber.split("");
    for (let i = 0; i < arrayTarjeta.length - 4; i++) {
      arrayTarjeta[i] = "#";
    }
    return arrayTarjeta.join("");
  },

  obtenerFranquicia: function (creditCardNumber) {
    let inicioTarjeta = creditCardNumber.substring(0, 4);
    if (
      inicioTarjeta === "6011" 
    ) {
      return "Discover";
    }
    inicioTarjeta = creditCardNumber.substring(0, 2);
    if (
      inicioTarjeta === "51" ||
      inicioTarjeta === "52" ||
      inicioTarjeta === "53" ||
      inicioTarjeta === "54" ||
      inicioTarjeta === "55"
    ) {
      return "Mastercard";
    }
    inicioTarjeta = creditCardNumber.substring(0, 1);
    if (inicioTarjeta === "4") {
      return "Visa";
    }
    return 'Franquicia no definida'
  },
};

export default validator;
