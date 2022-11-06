class Juros{
  #capitalInicial
  #taxaAplicada
  #tempo

  constructor(capitalInicial,taxaAplicada,tempo,medidaTempo){
    taxaAplicada = taxaAplicada/100;
    
    if(medidaTempo.toLowerCase() === 'a'){
      taxaAplicada = this.#converteTaxa(taxaAplicada);
      tempo = this.#converteTempo(tempo);
    }
     this.#capitalInicial = capitalInicial;
     this.#taxaAplicada = taxaAplicada;
     this.#tempo = tempo;
  }

  #converteTempo(tempo){
    return   Math.floor(tempo*12);
  }

  #converteTaxa(taxa){
    let taxaRaiz = (1+ taxa)**(1/12);
    return taxaRaiz-1
  }

  calcularJurosSimples(){
    return this.#capitalInicial * this.#taxaAplicada * this.#tempo
  }

  calcularJurosCompostos(){
    console.log(this.#taxaAplicada)
    return this.#capitalInicial * (1+this.#taxaAplicada)**this.#tempo;
  }
}

export default Juros;