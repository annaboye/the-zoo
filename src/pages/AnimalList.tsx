import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal";
import { Link } from "react-router-dom";
import "../sass/AnimalList.scss"
import { HungryAnimals } from "../components/HungryAnimals";
import { timeSinceFed } from "../utils/functions";

export const AnimalList = () =>{
    const [animalsInZoo, setAnimalsInZoo] = useState<IAnimal[]> ([])
    const [hungryAnimalList, setHungryAnimalList] = useState<IAnimal[]>([])

    async function getAnimals(){
      const response =await axios.get<IAnimal[]>(
          `https://animals.azurewebsites.net/api/animals`
        );
        localStorage.setItem("animals",JSON.stringify(response.data))
        setAnimalsInZoo(response.data)
        setHungryAnimalList(whoIsHungry(response.data))
        
        return response.data
      
    }


    function whoIsHungry (animals:IAnimal[]): IAnimal[] {
      let hungryAnimals:IAnimal[]=[]
      animals.forEach((animal)=>{
      let hours= timeSinceFed(animal)
      if (hours>=4){
      hungryAnimals.push(animal)
      }
      if(hours>=3){
        animal.isFed=false
      }
    });
      setAnimalsInZoo(animals)
      localStorage.setItem("animals",JSON.stringify(animals))
      return hungryAnimals
      
    }

    useEffect(()=> {
        let animals: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));

        let hungryAnimals: IAnimal[] = [];

        if (animals.length<1){
          
          getAnimals()

        }
        else{
          
          hungryAnimals = whoIsHungry(animals)
          setHungryAnimalList(hungryAnimals)
          setAnimalsInZoo(animals)
        }
        
        
        
        


        
        
    }, [])
    return(
    <>
    <Navbar></Navbar>
    
    <div className="wrapper">
      <HungryAnimals animals={hungryAnimalList}></HungryAnimals>
      
      {animalsInZoo.map((animal, index)=>(
   
      <Animal animal={animal} fullDesc={false} animalList={animalsInZoo}></Animal>
      
    ))}
    </div>
    </>
    );
  
};