function obterDados(callback){
    //Simulando um operacao assincrona
    setTimeout(function(){
        const dados = "Dados obtidos aqui na Fatec"
        callback(dados)
    }, 2000)
}
function mostrarDados(dados){
    console.log(dados)
}

obterDados(mostrarDados)