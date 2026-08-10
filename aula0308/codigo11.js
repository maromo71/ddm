let nome = "Pedro"
var mensagem = 123
function saudacao(){
    mensagem = "olá, " + nome + "!"
    console.log(mensagem)
}
console.log("Mostrando nome: " + nome)

console.log("Monstrando mensagem: " + mensagem) //causara um erro
//aborta o programa sem executar a função
saudacao()