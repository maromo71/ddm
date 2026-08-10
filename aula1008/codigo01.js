//criar uma variável que receba um elemento do DOM
//receber um button
let botao = document.querySelector("button")
let contador = 0
botao.addEventListener("click", function(){
    console.log("O botão selecionado foi: " + botao.innerHTML)
    contador = contador + 1
    console.log("O botão foi clicado " + contador + " vezes")
})

