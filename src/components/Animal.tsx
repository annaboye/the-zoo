import { SyntheticEvent, useState } from "react";
import { IAnimal, IAnimalProps} from "../models/IAnimal";
import "../sass/Animal.scss"
import { Link } from "react-router-dom";



export const Animal = ({id, imageUrl, isFed, lastFed, latinName, longDescription, medicine, name, shortDescription, fullDesc, animalList}: IAnimalProps) =>{
  const [fedTime, setFedTime] = useState(lastFed)
  const [fed, setfed]= useState(isFed)
   const addDefaultSrc =(e: SyntheticEvent)=>{
     let imgTag= e.target as HTMLImageElement;
     imgTag.src ="https://gotogulf.com/images/person-default.png"
   }
   const fedTheAnimal=(id:number)=>{
    const currentAnimal = animalList.find((animal)=> animal.id === id)
    
    if(currentAnimal){currentAnimal.lastFed = new Date().toString();
      currentAnimal.isFed =true;
    setFedTime(currentAnimal.lastFed)
  setfed(currentAnimal.isFed)}
   
    localStorage.setItem("animals",JSON.stringify(animalList))
    }

   if (fullDesc===false){
   return (<>
   <div className="forall"><h3>{name}</h3>
   {!fed && <h2 className="hungry">JAG ÄR HUNGRIG!</h2>}
   {fed && <h2 className="full">JAG ÄR MÄTT!</h2>}
   <Link to={JSON.stringify(id)}><img src={imageUrl} onError={(event)=>addDefaultSrc(event)}alt={latinName} /> </Link>
   <p>Senast matad: {fedTime}</p>
   <p>{shortDescription}</p>
   </div>
  </>)}
  else{
    return (<>
    <div className="forone">
    <h3>{name}</h3>
    {!fed && <h2 className="hungry">JAG ÄR HUNGRIG!</h2>}
    {fed && <h2 className="full">JAG ÄR MÄTT!</h2>}
    <img src={imageUrl} onError={(event)=>addDefaultSrc(event)}alt={latinName} />
    <p>{longDescription}</p>
    <p>Senast matad: {fedTime}</p>
    <p>latinskt namn: {latinName}</p>
    <p>Mediciner:{medicine}</p>
    <button className={fed?"none":"needfood"} onClick={()=>fedTheAnimal(id)}>mata</button>
    </div>
   </>)}
  
}


