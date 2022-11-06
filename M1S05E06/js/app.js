import Juros from "./Juros.js"

let jurosA = new Juros(10000, 7 ,24,'m');
let jurosB = new Juros(10000, 15 ,10,'a');

console.log(jurosA.calcularJurosCompostos());
console.log(jurosA.calcularJurosSimples());
console.log(jurosB.calcularJurosCompostos());
console.log(jurosB.calcularJurosSimples());


