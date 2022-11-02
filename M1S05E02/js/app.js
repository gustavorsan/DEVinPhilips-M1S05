import Fatura from "./fatura.js";

const vendaBola = new Fatura('Bola',10,5);
const vendaZero = new Fatura('Carro',-5,-2);

console.log(vendaBola.valorTotal);
console.log(vendaBola.obterValorTotal());
console.log(vendaZero.valorTotal);
console.log(vendaZero.obterValorTotal());