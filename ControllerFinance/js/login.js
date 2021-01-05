function logar(){

   var email = document.getElementById("email");
   var senha = document.getElementById("senha");


if(email.value == "admin@admin.com" && senha.value == "admin" ){
    localStorage.setItem("acesso", true);
    alert("Login Feito com Sucesso.")
    window.location.href = "index.html";

}else{
    alert("Email ou Senha invalida.")
}

}

