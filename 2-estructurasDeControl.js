// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    const par =0 ;
        if (8/2===0){
            console.log('el número es par');
        }else{
            console.log('el número es impar');
        }
}verificarParidad()

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad <18) {
        return 'Menor de edad';
    }else if (edad<=65) {
        return'Adulto';
    }else{
        return'Adulto mayor';
    }
}clasificarEdad()
console.log(clasificarEdad(15));
console.log(clasificarEdad(18));
console.log(clasificarEdad(70));

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    let cuentaAtras = 5
    while (cuentaAtras>0) {
        console.log(cuentaAtras)
        cuentaAtras = cuentaAtras - 1
    }
    }cuentaRegresiva()

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let mensaje = 1;
    do {
        console.log('Estoy aprendiendo JavaScript', mensaje);
        mensaje++;
    }while (mensaje<=5);
    }repetirMensaje()

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
        for (numero= 2; numero<=10; numero = numero+2) {
            console.log('son pares ' + numero);
        }
}imprimirPares()

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let numero = 1; numero<=10; numero++) {
        if (numero === 6) {
            break;
        }
        console.log(numero);
    } 
}detenerEnSeis()

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let n = 1; n<=10; n++) {
        if (n===5) {
            continue;
        }
        console.log(n);
    }
}saltarCinco()

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Lunes';
        case 3:
            return 'Martes';
        case 4:
            return 'Miercoles';
        case 5: 
            return 'Jueves';
        case 6:
            return 'Viernes';
        case 7:
            return 'Sabado';
            default:
                return 'Número inválido, deber ser del 1 al 7';
    }
}obtenerDiaSemana()
console.log(obtenerDiaSemana(6));

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'Es una vocal';
        default:
            return 'No es una vocal';
    }
}esVocal()
console.log(esVocal('i'));
console.log(esVocal(('p')));
// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a>0 && b>0 && c>0) {
        return "Todos los números son positivos";
    }else if (a<0 && b<0 && c<0){
        return 'Todos los números son negativos';
    }else {
        return 'Al menos unos de los numeros es negativo';
    }
}evaluarNumeros()
console.log(evaluarNumeros(1,3,5));
console.log(evaluarNumeros(-5,4,3));
console.log(evaluarNumeros(-3,-2,-1));

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
