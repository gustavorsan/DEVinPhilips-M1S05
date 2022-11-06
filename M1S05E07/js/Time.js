class Time{
  #nome 
  #sigla 
  #vitorias = 0;
  #derrotas = 0;
  #empates = 0;
  #golsMarcados = 0;
  #golsSofridos = 0

  constructor (nome,sigla){
    this.#nome = nome;
    this.#sigla = sigla;
  }

  get numeroDeJogos(){
    return this.#vitorias + this.#empates + this.#derrotas;
  }

  get numeroDePontos(){
    return (this.#vitorias * 3) + this.#empates
  }

  computarPartida(partida){

    let golsMarcadosPartida;
    let golsSofridosPartida;

    console.log(partida.siglaTimeA,this.#sigla)
    //checa se é uma partida que o time participou 
    if(partida.siglaTimeA === this.#sigla){
      golsMarcadosPartida = partida.golsTimeA
      golsSofridosPartida = partida.golsTimeB
    }else if (partida.siglaTimeA === this.#sigla){
      golsMarcadosPartida = partida.golsTimeB
      golsSofridosPartida = partida.golsTimeA
    }else{
      return
    }
    //registra gols e vitorias
    if(golsMarcadosPartida > golsSofridosPartida){
      this.#vitorias++;
      this.#golsMarcados += golsMarcadosPartida;
      this.#golsSofridos += golsSofridosPartida;
    }else if(golsMarcadosPartida < golsSofridosPartida){
      this.#derrotas++;
      this.#golsMarcados += golsMarcadosPartida;
      this.#golsSofridos += golsSofridosPartida;
    }else{
      this.#empates++;
      this.#golsMarcados += golsMarcadosPartida;
      this.#golsSofridos += golsSofridosPartida;
    }
    return;
  }

  exibirSituacao(){
      return {
        nome : this.#nome,
        sigla : this.#sigla,
        vitorias : this.#vitorias,
        derrotas : this.#derrotas,
        empates : this.#empates,
        golsMarcados : this.#golsMarcados,
        golsSofridos : this.#golsSofridos,
        pontuacao : this.numeroDePontos,
        partidas : this.numeroDeJogos
      }
  }
}

export default Time;