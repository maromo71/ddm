function maior(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
a = 10
b = "10"
console.log("A soma dos valores eh: " + (a + b));
c = a + parseInt(b)
console.log("A soma dos valores eh: " + c);
console.log("O Maior valor eh: " + maior(13, 23));

