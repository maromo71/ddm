import {useState} from 'react'
import '../App.css'

export default function Home(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    function gerarNumero(){
        const x = Math.floor(Math.random() * 100) + 1
        setNumeroAleatorio(x)
    }
    
    return(
        <div className='conteudo-centralizado'>
            <h3>Nosso número aleatório</h3>
            <h1>{numeroAleatorio}</h1>
            <div className="area-botao">
                <label>
                    clique no botão para gerar o número.
                </label>
                <button onClick={gerarNumero}>
                    Clique Aqui!!
                </button>
            </div>
        </div>   
    )
}
