var logado = false;
var mostraFormProduto = false;



if(localStorage.getItem("acesso") == "true" ){
    logado = true;
};

if(logado != true){

    alert("Sem Autenticação.") 
    window.location.href = "login.html";

};

function controleFormProduto(){

    mostraFormProduto = !mostraFormProduto;

    var form = document.getElementById("formPorduto")

  if(mostraFormProduto){
    form.style.display = "block";
  }else {
    form.style.display = "none";
  }
}

function CadastraProduto(){
    var produtoNome = document.getElementById("produtoNome");
    var produtoDescricao = document.getElementById("produtoDescricao");
    var produtoEmAberto = document.getElementById("produtoEmAberto");
    var produtoPago = document.getElementById("produtoPago");

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

   if(dados == null){
    localStorage.setItem("dadosProduto", "[]");
    dados = [];
 }

   var auxRegistro = {
       Nome: produtoNome,
       Descricao: produtoDescricao,
       EmAberto: produtoEmAberto,
       Pago: produtoPago

   }

   dados.push(auxRegistro);

   dados.setItem("dadosProduto", JSON.stringify(dados));
   alert("Registro incluido com sucesso.")

   produtoNome.value = "";
   produtoDescricao.value = "";
   produtoDescricao.value = "";
   produtoEmAberto.value = "";
   produtoPago.value = "";
}