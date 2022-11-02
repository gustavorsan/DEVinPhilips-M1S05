import { TestaCPF } from "./util.js";

class Funcionario{
  #nome;
  #cpf;
  #salario;

  constructor(cpf,nome,salario){

    if(!TestaCPF(cpf)){
      throw new Error('cpf inválido');
    }

    this.#nome = nome;
    this.#cpf = cpf;
    this.#salario = salario;
  }

   promover(percentual){
    this.#salario = this.#salario +( this.#salario * (percentual/100));
  }
  
   obterSalario(){
    return this.#salario
  }
}

export default Funcionario;