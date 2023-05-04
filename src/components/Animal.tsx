import { SyntheticEvent, useState } from "react";
import { IShowAnimalProps } from "../models/IShowAnimalProps";
import "../sass/Animal.scss"
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { newTimeDisplay, timeSinceFed } from "../utils/functions";




export const Animal = ({fullDesc, animalList, animal}: IShowAnimalProps) =>{
  const [fedTime, setFedTime] = useState(animal.lastFed)
  const[fedTimeDisplay, setFedTimeDisplay] =useState(newTimeDisplay(new Date(fedTime)))
  const [fed, setfed]= useState(animal.isFed)
   const addDefaultSrc =(e: SyntheticEvent)=>{
     let imgTag= e.target as HTMLImageElement;
     imgTag.src ="https://gotogulf.com/images/person-default.png"
   }
   
   const fedTheAnimal=()=>{
    animal.lastFed = new Date().toString();
    const lastMeal= timeSinceFed(animal);
    setFedTimeDisplay(newTimeDisplay(new Date(animal.lastFed)))
    console.log(lastMeal)
    animal.isFed =true;
    setFedTime(animal.lastFed)
    setfed(animal.isFed)    
    localStorage.setItem("animals",JSON.stringify(animalList))
    }

 
 
return(
  <div className={fullDesc?"forone":"forall"}>
  <h4>{animal.name}</h4>
  {!fed && <span className="hungry">Mata mig gärna!</span>}
  {fed && <span className="full">Jag är mätt!</span>}
  <img src={animal.imageUrl} onError={(event)=>addDefaultSrc(event)}alt={animal.latinName} />
  <span>Senast matad: {fedTimeDisplay}</span>
  {!fullDesc && <p>{animal.shortDescription}</p>}
  {!fullDesc && <Link to={JSON.stringify(animal.id)}><button>Gå till {animal.name} </button></Link>}
  {fullDesc && <p>{animal.longDescription}</p> }
  {fullDesc && <p>{animal.latinName}</p> }
  {fullDesc &&<button className={fed?"none":"needfood"} onClick={()=>fedTheAnimal()}>mata djur</button>}
  </div>

)
 
}


