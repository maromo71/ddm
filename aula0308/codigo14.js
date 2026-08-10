function difletvar(){
    if(true){
        let x = 10
        console.log(x)
    }
    console.log(x) //causara um erro
}
function difletvar2(){
    if(true){
        var x = 10
        console.log(x)
    }
    console.log(x) //não causará um erro
}
difletvar2()
difletvar()