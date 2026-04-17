// Estructura de control If 
/**
 * La estructura de control If se utiliza para ejecutar un bloque de código si se cumple una condición específica.
 * 
 * El usario debe de ingrsar un dia y el if debe de responder si es dia abil (que no sea fin de semana) o no
 */

//let dia = prompt("Ingrese un día de la semana:").toLowerCase();
let dia = "lunes";

if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes" || dia === "miercoles") {
    console.log(dia + " es un día hábil.");
} else {
    console.log(dia + " no es un día hábil.");
}

// Estructura de control for
/**
 * La estructura de control for se utiliza para repetir un bloque de código un número específico de veces.
 * 
 * Imprimir los dias de la semana utilizando un ciclo for y un arreglo
 */

let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]; 
// Un arreglo es una estructura de datos que puede almacenar múltiples valores en una sola variable.
// si un arreglo es de tamaño 6, el indice va de 0 a 5

for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}

// Estructura de control else if
/**
 * La estructura de control else if se utiliza para ejecutar diferentes bloques de código según diferentes condiciones.
 * 
 * El usuario debe ingresar una calificación y el programa debe responder con la letra correspondiente (A, B, C, D, F)
 */

let calificacion = 45;

if (calificacion >= 90) {
    console.log("Calificación: A");
} else if (calificacion >= 80) {
    console.log("Calificación: B");
} else if (calificacion >= 70) {
    console.log("Calificación: C");
} else if (calificacion >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}