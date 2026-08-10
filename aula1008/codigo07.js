let botao = document.querySelector("button")
let paragrafos = document.getElementsByClassName("paragrafo")

//adicionar um evento ao clique do botao
botao.addEventListener("click", function(){
    //para cada elemento de paragrafo, alteraremos o estilo para negito
    for (let i = 0; i < paragrafos.length; i++){
        paragrafos[i].style.fontWeight = "bold"
    }
})