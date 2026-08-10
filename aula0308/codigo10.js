let nome = "Pedro"

function saudacao(){
    let mensagem = "olá, " + nome + "!"
    console.log(mensagem)
}
console.log("Mostrando nome: " + nome)

console.log("Monstrando mensagem: " + mensagem) //causara um erro
//aborta o programa sem executar a função
saudacao()