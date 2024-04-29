console.log("xd")

/* Recibir un arreglo numerico con números negativos y positivos.
Todos los valores negativos reemplazarlos por 0 */

function noNegativo(arr){
    for(let i = 0; i < arr.length; i++) {
        while() {
            let array = prompt("Ingrese ")
        }
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
};

let array = [-2,5,-4,6,-10]
document.getElementById("lista").innerHTML = `Array original: <strong>${array}</strong> <br> Array modificado: <strong>${noNegativo(array)}</strong>`