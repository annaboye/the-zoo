import { SyntheticEvent } from "react";
import { IAnimal, IFullDescription } from "../models/IAnimal";
import "../sass/Animal.scss"
import { Link } from "react-router-dom";



export const Animal = ({id, imageUrl, isFed, lastFed, latinName, longDescription, medicine, name, shortDescription, fullDesc}: IFullDescription) =>{
   const addDefaultSrc =(e: SyntheticEvent)=>{
     let imgTag= e.target as HTMLImageElement;
     imgTag.src ="https://gotogulf.com/images/person-default.png"
   }

   if (fullDesc===false){
   return (<>
   <div className="forall"><h3>{name}</h3>
   <Link to={JSON.stringify(id)}><img src={imageUrl} onError={(event)=>addDefaultSrc(event)}alt={latinName} /> </Link>
   <p>Senast matad: {lastFed}</p>
   <p>{shortDescription}</p>
   <button className={isFed?"full":"needfood"}>mata</button>
   </div>
  </>)}
  else{
    return (<>
    <div className="forone">
    <h3>{name}</h3>
    <img src={imageUrl} onError={(event)=>addDefaultSrc(event)}alt={latinName} />
    <p>{longDescription}</p>
    <p>Senast matad: {lastFed}</p>
    <p>latinskt namn: {latinName}</p>
    <p>Mediciner:{medicine}</p>
    
   
    <button className={isFed?"full":"needfood"}>mata</button>
    </div>
   </>)}
  
}


