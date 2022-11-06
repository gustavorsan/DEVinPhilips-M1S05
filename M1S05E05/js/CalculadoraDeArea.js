class CalculadoraDeArea{
  #tipo 
  #base 
  #altura

  constructor(tipo,base,altura){
    this.#tipo = tipo;
    this.#base = base;
    this.#altura = altura;
  }

  #obterAreaQuaradro(){
    return this.#base * this.#altura;
  }

  #obterAreaTriangulo(){
    return (this.#base * this.#altura)/2;
  }

 calcular(){
  if(this.#tipo.toLowerCase() === 'quadrado'){
    return this.#obterAreaQuaradro();
  }

  if(this.#tipo.toLowerCase() === 'triangulo'){
    return this.#obterAreaTriangulo();
  }

  return 'Tipo não é valido';
 }
}

export default CalculadoraDeArea;