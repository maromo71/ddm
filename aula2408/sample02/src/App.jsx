import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

import './App.css'
export default function App(){
  return(
    <div>
      <h1 className="App">
        <Header />
        <Home />
        <Footer />   
      </h1>
    </div>    
  )
}