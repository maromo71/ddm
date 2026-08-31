import { useState } from "react"

export default function Imc(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc]= useState(0)
    const [mensagem, setMensagem] = useState("")

    function calcularImc(){
        const f_altura = parseFloat(altura)
        const f_peso = parseFloat(peso)
        const f_imc = f_peso / (f_altura * f_altura)
        setImc(f_imc.toFixed(2)) //fixar em duas casas decimais
        if(f_imc < 18.5){
            setMensagem('Abaixo do peso.')
            return
        }else if(f_imc < 24.9){
            setMensagem('Peso ideal.')
            return
        }else if(f_imc < 29.9){
            setMensagem('Sobrepeso.')
            return
        }else if(f_imc < 34.9){
            setMensagem('Obesidade')
            return
        }else{
            setMensagem('Obsidade Grave')
        }
    }

    return(
        <div>
            <h1>Calculo do IMC</h1>
            <label>Peso: </label>
            <input type="number" step="0.1" value={peso}
                onChange={(e)=> setPeso(e.target.value)}  />

            <label>Altura: </label>
            <input type="number" step="0.1" value={altura}
                onChange={(e)=>setAltura(e.target.value)} />
            
            <button onClick={calcularImc}>Calcular</button>
            <label>Resultado: {imc} </label>
            <label>Situacao: {mensagem} </label>
        </div>
    )
}