function ObterDados(){
    return new Promise(function(resolve, reject){
        //Simulando a operacao assincrona com setTimout
        setTimeout(function(){
            const dados = "Dados obtidos da fatec"
            //simule com erro. ex: const dados = null
            if(dados){
                resolve(dados)
            }else{
                reject("Erro ao conectar com dados no servidor")
            }
        }, 2000)
    })
}
ObterDados()
    .then(function(dados){
        console.log(dados)
    })
    .catch(function(err){
        console.log(err)
    })

ObterDados()