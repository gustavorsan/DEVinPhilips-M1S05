class Animal {
  #nome 
  #idade
  #som

  constructor(nome,idade,som){
    this.#nome = nome;
    this.#idade = idade;
    this.#som = som;
  }
  get som(){
    return this.#som;
  }

}

export default Animal;

export class Cachorro extends Animal{
  
  constructor(nome,idade){
    super(nome,idade,'Latido')
  }

  obterSom(){
    return super.som;
  }
}

export class Gato extends Animal{
  constructor(nome,idade){
    super(nome,idade,'Miado')
  }

  obterSom(){
    return super.som;
  }
}