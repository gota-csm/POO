//Definir variables
//Var Global, Loca, Constante
var global = "Variable Global"
let local = "Variable Local"
const constante = "Constante"
//Variables con numeros
let entero = 10;
let decimal = 1.5;
//Strings, Cadenas
const palabra = "Hola";
const cadena = palabra + " como" + " estas";
//Funciones
function Boleano(){
    return true;
}
function Boleano2(){
    return false;
}
//Array, Objeto
let array = ["Matías", 17, "Altura", 1.75];
let objeto = {Edad: 17, Nombre: "Matías"};
//Indefinida, Null
let indefinida;
nulo = null;
//Funcion 2
function multiplicacion(num1, num2){
    return num1 * num2;
}
//Resultados
console.log("Variables: Global: "  + global + " Local: " + local + " Constante: " + constante)
console.log("Entero: " + entero + " Decimal: " + decimal)
console.log("Cadena: " + cadena)
console.log("Boleano (Verdadero o falso): " + Boleano() + " " + Boleano2())
console.log("Arreglo: " + array)
console.log("Clave objeto: " + JSON.stringify(objeto))
console.log("Indefinida: " + indefinida)
console.log("Nulo: " + nulo)
console.log("Multiplicacion: " + multiplicacion(4, 10))