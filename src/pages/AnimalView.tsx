import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import { Animal } from "../components/Animal";
import { timeSinceFed } from "../utils/functions";

function isHungry (animal:IAnimal) {   
    let hours= timeSinceFed(animal)
    if(hours>=3){
      animal.isFed=false
    }
  };

export const AnimalView = () =>{
    const animals: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));
    const params = useParams();
    const currentAnimal = animals.find((animal)=> animal.id.toString() === params.id)
        

 
    useEffect(()=> {
       
        if(currentAnimal){
            isHungry(currentAnimal)
            localStorage.setItem("animals",JSON.stringify(animals))
        }
        
    }, []);

    
   

    return<> <Navbar></Navbar>{currentAnimal &&<Animal animal={currentAnimal}fullDesc={true} animalList={animals}></Animal>}</>
  
}

