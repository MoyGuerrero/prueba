// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

/**
 * 
 * @param {array} array Recibe un arreglo para obtener los primeros tres elementos repetidos
 */


function numbersTop(array) {
    array.sort();

    let aux;
    let contador = 1;
    let cantidad_repetido = [];
    let norepetido = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === array[i]) {
            contador++;
        } else {
            cantidad_repetido.push(contador);
            norepetido.push(array[i]);
            contador = 1;
        }
    }

    for (let i = 0; i < cantidad_repetido.length; i++) {
        for (let j = i + 1; j < cantidad_repetido.length; j++) {
            if (cantidad_repetido[i] < cantidad_repetido[j]) {
                aux = norepetido[i];
                norepetido[i] = norepetido[j];
                norepetido[j] = aux;
            }
        }

    }

    console.log(norepetido.slice(0, 3));
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
