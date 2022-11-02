class Personagem {
  #nome
  #percentualVida

  constructor(nome){
    this.#nome = nome;
    this.#percentualVida = 100;
  }

  sofreuDano(percentual){
    if(this.#percentualVida > percentual){
      this.#percentualVida -= percentual;
    } 
  }

  usouKitMedico(){
    this.#percentualVida += 10;
  } 

  get percentualVida(){
    return this.#percentualVida
  }
}

export default Personagem;