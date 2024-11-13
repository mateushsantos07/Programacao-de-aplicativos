import { hash } from "bcrypt";
import Usuario from "../../entity/Usuario";
import "./login.css"
import { cpSync } from "original-fs";

document.getElementById("cadastrar").addEventListener("click", async(event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if(password.value !== passwordConfirmation.value){
        return;
    }
    const usuarioExiste = await (window as any).bancoAPI.findByEmail(email.value)
    if(usuarioExiste.id){
      console.log("ja existe")
      return;

    }

    var usuario = {
      name: nome.value,
      email: email.value,
      password: password.value,    
      data_nascimento: new Date(dataNascimento.value)
    }
    console.log(usuario);

    await (window as any).bancoAPI.createUsuario(usuario);
})

document.getElementById("acessar").addEventListener("click", async(event: MouseEvent) =>{
  event.preventDefault();

  var email = document.getElementById("email_login") as HTMLInputElement;
  var password = document.getElementById("password_login") as HTMLInputElement;

  const usuario = await (window as any).bancoAPI.findByEmail(email.value)
  if(!usuario){
    console.log("Usuário não encontrado...")
    return;
  }

  const passwordConfirmation = {
    password: password.value,
    password_hash: usuario.password_hash
  }

  const validPassword = (window as any).authAPI.hash(passwordConfirmation);

  if(!validPassword){
    console.log("Credenciais incorretas...")
    return;
  }
  (window as any).navigateAPI.irPaginaHome();
})