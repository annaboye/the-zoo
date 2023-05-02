import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import axios from 'axios'

function App() {
// const [animals, setAnimals]=useState([])

  useEffect(()=> {
    const animals = getAnimals();
      async function getAnimals(){
        const response =await axios.get(
            `https://animals.azurewebsites.net/api/animals`
          );
          return response.data
        
    
      }
      // setAnimals(animals)
      console.log(animals)
}, [])

  return (
    <div className="App">
    {}
    
    </div>
  )
}

export default App
