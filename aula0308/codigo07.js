let valores = [2, 4, 6, 1, 3, 5]

let soma = 0
//var deixa a variavel i visivel fora do bloco de repeticao
for(var i=0; i < valores.length; i++){
    soma += valores[i]
    console.log(`Passo ${i} - Soma parcial: ${soma}`)
    console.log("Passo: " + i + " - Soma parcial: " + soma)
}

console.log("I terminou em : " + i)
console.log("Soma Total: " + soma)