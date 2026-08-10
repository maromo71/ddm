//funcao para calcular a media de 2 notas
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2) / 2
    return media
}


//chamar a funcao passando duas notas
let nota1 = 8
let nota2 = 4


let resultado = calcularMedia(nota1, nota2)
console.log("A media das notas é: " + resultado)