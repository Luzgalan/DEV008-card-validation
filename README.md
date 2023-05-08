# Card Validation

## Tabla de contenido
- [Definición](#Definición )
  * [Validador de tarjetas de crédito](#Validador-de-tarjetas-de-crédito )
  * [Tabla de contenido](#Tabla-de-contenido)
  * [Enmascaramiento de números:](#Enmascaramiento-de-números)
  * [Obtención de franquicias](#Obtención-de-franquicias)
- [Objetivos](#Objetivos)
- [Uso](#Uso)
- [Conocimientos desarrollados](#Conocimientos-desarrollados)
- [Despliege](#Despliege)
   
## Definición
La aplicación que he creado para este proyecto es una aplicación web que tiene como objetivo el poder recaudar donaciones para una fundación dedicada al apoyo de los perritos.
La aplicación se centra en la validación de un número de tarjeta de crédito o débito, el cambio del número ingresado por una máscara y por último la obtención de la franquicia a la cual pertenece la tarjeta ingresada.
Para poder realizar cada una de estas tareas se realizaron tres funciones en una constante llamada validator ubicada en el archivo validator.js.

```js
const validator = {
  isValid: function (creditCardNumber) {},//Retorna un TRUE o False
  maskify: function (creditCardNumber) {}, //Retorna un string(mascara)
  obtenerFranquicia: function (creditCardNumber) {}, //Retorna un string(La marca de la tarjeta)
};
```

## Prototipo
En esta sección se puede visualizar el boceto inicial del cual fue el punto partida para realizar la maquetación en el html.

![Pantalla de inicio](/src/img/boceto.jpg)

## Demo
Pantalla de inicio

- Se ingresa los digitos de la tarjeta a validar
- Solo se muestra los ultimos digitos de la tarjeta 
- Se muestra el tipo de tarjeta(Visa, Mastercard y Discover)
- Se podra validar una nueva starjeta.
- Se valida que el campo del input no este vacio.

![Pantalla de inicio](/src/img/inicio.png)

### Validador de tarjetas de crédito
Este validador se encarga de verificar si el número de tarjeta de crédito insertado es válido o no de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), Para ello, utiliza la función _isValid(creditCardNumber)_. Si el número de tarjeta es válido, retorna y true y se proporciona un enmascaramiento de los números y la obtención de la franquicia para posteriormente dibujar la tarjeta en el html. En caso contrario, se muestra un mensaje de error .

### Enmascaramiento de números:
Este enmascaramiento se realiza a través de la función maskify(creditCardNumber) Esta función recibe como parámetro el número de tarjeta de crédito y devuelve una cadena de texto en la que se intercambian todos los dígitos por el caracter # excepto los últimos 4.

### Obtencion de franquicias
La obtencion de franquicias se realiza en la función _obtenerFranquicia(creditCardNumber)_, esta funcion retorna:
  > - Discover: Si la tarjeta comienza en 6011
  > - Mastercard: Si la tarjeta comienza en 51, __52, __53, __54,
  > - Visa: Si la tarjeta comienza en 4
  > - Franquicia no definida: Si la tarjeta es válida y no comienza en ninguno de las franquicias anterioress

## Objetivos
- Validación de número de tarjeta: Se espera que la aplicación pueda identificar si un numero de tarjeta ingresado es valido usando para ello el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn)

- Enmascaramiento del número de tarjeta:se espera que la aplicación pueda enmascarar los datos de la tarjeta dejando visible soplo los ultimos 4 numeros con la finalidad de otorgar mayor privacidad al usuario

- Obtención de franquicias: Se espera que la aplicación pueda obtener la franquicia a la cual pertenece la tarjeta de crédito, actualmente la aplicación es capaz de definir si una tarjeta pertenece a _visa, __mastercard, o __discover_, en caso de no pertenecer a alguno de ellos envia un mensaje de Franquicia no definida

- Interfaz intuitiva y fácil de usar: Se espera que los usuarios puedan entender el funcionamiento del sitio con solo leerlo sin la necesidad de un manual, además se busco una fuente que fuera lo mas legible posible en equipos electrónicos


## Uso:
El uso del proyecto se realizó de tal manera que fuera muy intuitiva para el usuario, de tal manera que basta con que el usuario proporcione el número de una tarjeta de debito o crédito y presione el botón validar este pues hacer las tres acciones para las que fue realizado el proyecto:
 - Validar: Si el número de tarjeta cumple con el algoritmo de Lunh
 - Enmascarar: Esto solo en el caso de que el número de tarjeta sea válido.
 - Obtener la franquicia de la tarjeta: Esto en caso de que el número ingresado sea válido

Además de esto se realizaron las siguientes validaciones a nivel HTML
 - Que el usuario no pueda dejar el campo vacío.
 - Que el usuario solo pueda enviar números para validar en caso contrario envía un error  

## Conocimientos desarrollados:
Durante el desarrollo del proyecto se obtuvieron los siguientes conocimientos :

> - Uso de HTML semántico
> - Uso de selectores de CSS
> - Uso de selectores del DOM
> - Variables 
> - Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
> - Uso de bucles/ciclos (for y for..of)
> - Funciones (params, args, return)
> - Objetos
 
 ## Despliege
 El proyecto se desplegó en la plataforma de GitHub Pages y está disponible en el siguiente enlace.