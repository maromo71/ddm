let saldos = document.getElementsByClassName("saldo")
for (let i = 0; i < saldos.length; i++){
    if(saldos[i].innerHTML < 0){
        saldos[i].classList.add("destaque")
    }
}