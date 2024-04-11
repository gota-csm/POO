console.log("el pepe")

function numerosDecreciendo() {
    let contador = 20;
    let array = [];

    while (contador >= 10) {
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con While:</p><h2> <br> ${array}</h2>`
}

function numerosFor() {
    let array = [];

    for (let i = 20; i >= 10; i--) {
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con For:</p><h2> <br> ${array}</h2>`
}