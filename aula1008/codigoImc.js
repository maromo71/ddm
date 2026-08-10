let text_peso = document.getElementById("peso")
let text_altura = document.getElementById("altura")
let botao = document.getElementById("btn-calc")

console.log(resultado.innerHTML)
//funcão auxiliar para calcular o IMC
function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

botao.addEventListener("click", function(){
    let resultado = document.getElementById("resultado")
    let peso = parseFloat(text_peso.value)
    let altura = parseFloat(text_altura.value)
    let imc = calcularIMC(peso, altura)
    resultado.innerHTML = "O seu IMC é: " + imc.toFixed(2)
})