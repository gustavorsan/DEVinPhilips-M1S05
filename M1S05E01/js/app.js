import Funcionario from "./funcionario.js";

try{
  let funcionario = new Funcionario("528.442.040-31",'Gustavo',1000);
  console.log(funcionario.obterSalario());
  funcionario.promover(50);
  console.log(funcionario.obterSalario());
}catch(erro){
  console.log(erro.message);
}
