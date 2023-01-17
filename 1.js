// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

/**
 * Función que nos ayuda a encontrar el valor no duplicado dentro de un arreglo, primero que ordena los datos
 * despues lo filtra para obtener el resultado que queremos.
 * @param {Array} array Datos que reciben para buscar el elemento unico no repetido.
 * @returns {Array} Retorna un arrat con el unico dato que no se esta repitiendo del array original.
 */
function findUniq(array) {
    array.sort();
    return array.filter(valor => array.indexOf(valor) === array.lastIndexOf(valor));
}


/**
 * TEST Ejercicio 1
 */
console.log(findUniq(['12', 10, '12', 11, 1, 11, 10, '12'])) // 1
console.log(findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man'])) // 'Wonder Woman'
