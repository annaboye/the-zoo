import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import "../sass/Startpage.scss"

export const Startpage = () =>{
  
    return(<>
   
    <main>
    <Navbar></Navbar>
    <h2>Välkommen till Djurens ZOO!</h2>
    <Link to="/animals"><button>Hälsa på hos djuren</button></Link>
   </main>
    </>)
}