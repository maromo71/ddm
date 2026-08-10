//exemplo de sombreamento de variaveis
let nome = "Marcos"

console.log("Nome atual: " + nome)

function nomear(){
    let nome = "Ricardo"
    console.log("Nome dentro da funcao nomear: " + nome)
}

nomear()

console.log("Nome atual: " + nome)