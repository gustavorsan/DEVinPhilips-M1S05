import Usuario from "./Usuario.js";

let erro = document.getElementById('erro');
let senha = document.getElementById('senha');
let eye = document.getElementById('eye');
let temErro = false;


const userUm = new Usuario("Gustavo","gustavo@devinhouse.com.br","123");

function validarUsuario(event){
  event.preventDefault()
  let email = event.target.email.value;
  let senha = event.target.senha.value;
  if(!userUm.autenticar(email,senha)){
    apresentaFalha('Falha ao autenticar')
    return;
  }
  if(temErro){
    limparErro();
  }
  alert('Logado com sucesso');
}

function apresentaFalha(msg){
  erro.hidden = false;
  erro.innerText = msg
  temErro = true;
}

function limparErro(){
  erro.hidden = true;
  erro.innerText = ''
  temErro = false;
}

function mudarTipoSenha(){
  if(senha.type === 'password'){
    senha.type = 'text';
    eye.src = './content/eye-closed.svg'
    eye.alt = 'eye closed'
  }else{
    senha.type = 'password';
    eye.src = './content/eye.svg'
    eye.alt = 'eye'
  }
} 

addEventListener('submit',validarUsuario);

eye.addEventListener('click',mudarTipoSenha)