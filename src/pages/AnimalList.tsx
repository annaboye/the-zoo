import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal";
import { Link } from "react-router-dom";
import "../sass/AnimalList.scss"

export const AnimalList = () =>{
    const [animalsInZoo, setAnimalsInZoo] = useState<IAnimal[]> ([])
    useEffect(()=> {
        const animals: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));

        if (animals.length<1){ getAnimals()}
        else{setAnimalsInZoo(animals)}
        getAnimals()
          async function getAnimals(){
    
            const response =await axios.get<IAnimal[]>(
                `https://animals.azurewebsites.net/api/animals`
              );
              setAnimalsInZoo(response.data)
            localStorage.setItem("animals",JSON.stringify(response.data))
            
        
          }
       
    }, [])
    return(
    <>
    <Navbar></Navbar>
    
    <div className="wrapper">{animalsInZoo.map((animal, index)=>(
   
      <Animal {...animal} fullDesc={false}></Animal>
      
    ))}
    </div>
    </>
    );
  
};