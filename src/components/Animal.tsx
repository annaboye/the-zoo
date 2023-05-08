import { SyntheticEvent, useEffect, useState } from "react";
import { IShowAnimalProps } from "../models/IShowAnimalProps";
import "../sass/Animal.scss"
import { Link } from "react-router-dom";
import { newTimeDisplay, timeSinceFed} from "../services/timeServices";




export const Animal = ({fullDesc, animalList, animal}: IShowAnimalProps) =>{
  const [needfood, setNeedFood]= useState<boolean>()
  const[fedTimeDisplay, setFedTimeDisplay] =useState(newTimeDisplay(new Date(animal.lastFed)))
  const [fed, setfed]= useState(animal.isFed)
   const addDefaultSrc =(e: SyntheticEvent)=>{
     let imgTag= e.target as HTMLImageElement;
     const image = new URL('../assets/eyes.jpg', import.meta.url).href
     imgTag.src =image
   }
  
   useEffect(()=> {
    const hoursSinceFeed = timeSinceFed(animal)

    if(hoursSinceFeed>=3){
      animal.isFed =false
      setfed(animal.isFed)
      localStorage.setItem("animals",JSON.stringify(animalList))
    }
    if (hoursSinceFeed>=4){
      setNeedFood(true)
    }
}, [])
  
   
   const fedTheAnimal=()=>{
    animal.lastFed = new Date().toString();
    setFedTimeDisplay(newTimeDisplay(new Date(animal.lastFed)))
    animal.isFed =true;
    setfed(animal.isFed)
    setNeedFood(false)    
    localStorage.setItem("animals",JSON.stringify(animalList))
    }

return(
  <div className={fullDesc?"forone":"forall"}>
  <h4>{animal.name}</h4>
  {fed? <span className="full">Jag är mätt!</span> : <span className="hungry">Du får gärna mata mig!</span> }
  
  <img src={animal.imageUrl} onError={(event)=>addDefaultSrc(event)}alt={animal.latinName} />
  <span>Senast matad: {fedTimeDisplay}</span>
  {!fullDesc &&<div>
    <p>{animal.shortDescription}</p>
    <Link to={JSON.stringify(animal.id)}>
      <button>Gå till {animal.name}</button>
    </Link>
    </div>
    }
  {fullDesc && <div>
    {needfood &&<p>Jag måste ha mat nu, jag är jättehungrig</p>}
    <button className={fed?"none":"needfood"} onClick={()=>fedTheAnimal()}>mata djur</button>
    <p>Mediciner: {animal.medicine}</p>
    <p>Födelse år: {animal.yearOfBirth}</p>
    <p>Latinskt namn: {animal.latinName}</p>
    <p>{animal.longDescription}</p>
    <Link to="/animals">Gå tillbaka till alla djur</Link></div> }
  </div>

)
 
}


