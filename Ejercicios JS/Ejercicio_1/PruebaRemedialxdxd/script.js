function sumarNumerosPares(arr) {
    var suma = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            suma += arr[i];
        }
    }
    console.log("Suma de los numeros pares:", suma)
}

sumarNumerosPares([1,2,3,4,5,6]);