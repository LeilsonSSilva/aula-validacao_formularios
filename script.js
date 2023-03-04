// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})


// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e)=>{
    
  // Campo vazio (erro)

    let valor = e.target.value
    
    // if(valor == "") ou
    if(valor.length == 0){
      senhaHelper.innerText = "Precisa inserir uma senha"
      estilizarInputIncorreto(senhaInput, senhaHelper)
      inputsCorretos.senha = false

    }else{
  // Campo vazio (erro)
      estilizarInputCorreto(senhaInput, senhaHelper)
      inputsCorretos.senha = true
    }
})





// ---------- CONFIRMAÇÃO VALIDAÇÃO SENHA ---------- //

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e)=>{
    
    let valor = e.target.value
    
    if(valor == senhaInput.value){

      estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
      inputsCorretos.confirmaSenha = true

    }else{  
      confirmaSenhaHelper.innerText = "Senha não confere"
      estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
      inputsCorretos.confirmaSenha = false
    }
})

// --------------- EVITAR ENVIO DO FORMULÁRIO -------------------- //

let btnEnviar = document.querySelector("form > button")
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmaSenha: false
}

btnEnviar.addEventListener("click", (e)=>{

  console.log(inputsCorretos);

  if(
    inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.confirmaSenha == false
  ){
    // Qualquer um dos campos tiver informação errada, não enviar 
    e.preventDefault()
    alert("Precisa preencher todas as informações obrigatórias de forma correta")
    
  }else{
    // Enviar formulário
    alert("Formulário enviado com sucesso")
  }

})