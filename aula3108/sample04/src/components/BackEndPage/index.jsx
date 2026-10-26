import BackButton from '../BackButton'
import './style.css'

import { Link } from 'react-router-dom'

export default function BackEndPage() {
    return(
        <div>
            <h1>Node.js</h1>
            <p>
                O node.js é ......
            </p>
            <Link to='https://nodejs.org/pt-br'>Node.js</Link>
            <BackButton />
        </div>
    )
}