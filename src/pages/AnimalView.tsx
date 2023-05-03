import { useState } from "react";
import { Navbar } from "../components/Navbar"
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import { Animal } from "../components/Animal";

export const AnimalView = () =>{
    const params = useParams();
    const animals: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));
    // const [animalsInZoo, setAnimalsInZoo]= useState(animals);
    const currentAnimal = animals.find((animal)=> animal.id.toString() === params.id)
    console.log(currentAnimal)

    return<> <Navbar></Navbar>{currentAnimal && <Animal {...currentAnimal} fullDesc={true} animalList={animals}></Animal> }</>
  
}

