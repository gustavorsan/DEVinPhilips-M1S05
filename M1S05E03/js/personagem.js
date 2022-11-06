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
    }else{
      this.#percentualVida = 0;
    }

  }

  usouKitMedico(){
    if(this.percentualVida < 90){
      this.#percentualVida += 10;
    }else{
      this.#percentualVida += 100;
    } 
  } 

  get percentualVida(){
    return this.#percentualVida
  }
}

export default Personagem;