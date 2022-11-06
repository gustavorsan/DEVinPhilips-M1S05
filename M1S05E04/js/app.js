import { Cachorro, Gato } from "./animal.js";


const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.obterSom() );   // "latido"
const frajola = new Gato('frajola', 8);
console.log( frajola.obterSom() );   // "miado"