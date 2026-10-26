import BackButton from '../BackButton'
import './style.css'
import { Link } from 'react-router-dom'

export default function FrontEndPage() {
    return(
        <div>
            <h1>React.js</h1>
            <p>
                O ReactJs é ......
            </p>
            <Link to='https://react.dev/'>React.dev</Link>
            <BackButton />
        </div>
    )
}