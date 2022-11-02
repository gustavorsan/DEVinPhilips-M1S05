import Personagem from "./personagem.js";

const turo = new Personagem('Turo');

console.log(turo.percentualVida);

turo.sofreuDano(30)

console.log(turo.percentualVida);

turo.usouKitMedico();

console.log(turo.percentualVida);
