class Partida{
  #siglaTimeA
  #siglaTimeB 
  #golsTimeA 
  #golsTimeB 

  constructor(siglaTimeA,siglaTimeB,golsTimeA,golsTimeB){
    this.#siglaTimeA = siglaTimeA.toUpperCase();
    this.#siglaTimeB = siglaTimeB.toUpperCase();
    this.#golsTimeA = golsTimeA;
    this.#golsTimeB = golsTimeB;
  }

  get siglaTimeA(){
    return this.#siglaTimeA;
  }

  get siglaTimeB(){
    return this.#siglaTimeB;
  }

  get golsTimeA(){
    return this.#golsTimeA;
  }

  get golsTimeB(){
    return this.#golsTimeB;
  }
}

export default Partida;