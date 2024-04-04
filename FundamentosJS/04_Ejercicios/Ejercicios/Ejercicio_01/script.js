console.log("XD")

function agregarNumeros() {
    let resultado = ""
    let numero1 = prompt("Agregue el primer número")
    let numero2 = prompt("Agregue el segundo número")

    if (numero1 < numero2){
        resultado = `El primer número: ${numero1} - Es mayor que el segundo número: ${numero2}`
    } else {
        resultado = `El primer número: ${numero2} - Es menor que el segundo número: ${numero1}`
    }

    document.getElementById('lista').innerHTML = resultado;
}