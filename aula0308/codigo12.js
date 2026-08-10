function calcularIdade(){
    let idade = 33

    function exibirIdade(){
        console.log("Idade: " + idade)
    }

    function fazAniversario(){
        idade++;
        exibirIdade()
    }
    fazAniversario()

}
calcularIdade()
