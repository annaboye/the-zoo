import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal";
import "../sass/AnimalList.scss"
import { HungryAnimals } from "../components/HungryAnimals";
import { timeSinceFed } from "../services/timeServices";
import { getAnimals } from "../services/getData";

export const AnimalList = () =>{
    const [animalsInZoo, setAnimalsInZoo] = useState<IAnimal[]> ([])
    const [hungryAnimalList, setHungryAnimalList] = useState<IAnimal[]>([])

    function animalLists (animals:IAnimal[]) {
      let hungryAnimals:IAnimal[]=[]
      animals.forEach((animal)=>{
      let hours= timeSinceFed(animal.lastFed)
      console.log(hours)
      if (hours>=4){
      hungryAnimals.push(animal)
      }
      if(hours>=3){
        animal.isFed=false
      }
    });
      setAnimalsInZoo(animals)
      setHungryAnimalList(hungryAnimals)
      localStorage.setItem("animals",JSON.stringify(animals))
    }
    useEffect(()=> {
        let animalsFromLs: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));
        if (animalsFromLs.length<1){
        getAnimals().then((response)=>animalLists(response));
        }
        else{
          animalLists(animalsFromLs)
        }
    }, [])
    return(
    <>
    <Navbar></Navbar>
    <div className="wrapper">
      <HungryAnimals animals={hungryAnimalList}></HungryAnimals>
      {animalsInZoo.map((animal, index)=>(
      <Animal animal={animal} fullDesc={false} animalList={animalsInZoo} key={index}></Animal> 
    ))}
    </div>
    </>
    );
  
};