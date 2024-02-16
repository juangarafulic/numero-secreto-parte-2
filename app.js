/*let numeroSecreto = 0;
let intentos = 0;

condicionesIniciales();

function condicionesIniciales ()   {
    //mensajesIniciales();
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento() {
    let numeroJugador = parseInt(document.getElementById('intentoJugador').value);
    console.log(numeroSecreto);
    console.log(numeroJugador);
    console.log(intentos);
    if (numeroJugador === numeroSecreto)    {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }    else    {
        //El jugador no acertó.
            if (numeroJugador > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor');
            }    else    {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
            intentos++;
            limpiarCaja();
        }
    return;
}

function limpiarCaja()  {
    //El instructor muestra que este comando querySelector con el signo # es como el getElementById
    //let valorCaja = document.querySelector('#intentoJugador');
    //valorCaja.value = '';
    //El instructor muestra que no es necesario asignar una variable en este caso queda:
    document.querySelector('#intentoJugador').value = '';
    return;
}

function reiniciarJuego()   {
    //limpiar la caja
    limpiarCaja();
    //volver a las condiciones iniciales
    //generar el numero aleatorio
    //reiniciar contador de intentos
    condicionesIniciales();
    //deshabilitar boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}


1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

1. IMC
let altura = 1.8;
let peso = 70;
function indiceMasaCorporal (altura, peso) {
    return (peso / (altura*altura));
}
indiceMasaCorporal(altura, peso);
console.log(indiceMasaCorporal(altura, peso));

2. Numero factorial*/
function calcularFactorial(numero) {
    // Verificar si el número es negativo
    if (numero < 0) {
      return "El factorial no está definido para números negativos";
    }
  
    // Caso base: factorial de 0 es 1
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    // Calcular el factorial utilizando un bucle
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Ejemplo de uso
  let numero = 10;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);
  