function ObterDados(){
    return new Promise(function(resolve, reject){
        //Simulando a operacao assincrona com setTimout
        setTimeout(function(){
            const dados = "dados obetidos da fatec"
            if(dados){
                resolve(dados)
            }else{
                reject("Erro ao conectar com dados no servidor")
            }
        }, 2000)
    })
}

async function mostrarDados(){
    try{
        const dados = await ObterDados();
        console.log(dados)
    }catch{
        console.log(erro)
    }
}
mostrarDados()