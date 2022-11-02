class Fatura{
  #id
  #descricao
  #quantia
  #preco

  constructor(descricao,quantia,preco){
    this.#id = this.#gerarid();
    this.#descricao = descricao;
    this.#quantia = quantia < 0 ? 0 : quantia ;
    this.#preco = preco < 0 ? 0 : preco;
  }

  #gerarid(){
    return Math.floor(Date.now() * Math.random()).toString(36);
  }

  obterValorTotal(){
    return this.#preco * this.#quantia;
  }

  get valorTotal(){
    return this.#preco * this.#quantia;
  }
}

export default Fatura;