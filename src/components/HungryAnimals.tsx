import { IAnimal } from "../models/IAnimal"
import { IHungryAnimalsProps } from "../models/IHungryAnimalsProps"
import "../sass/HungryAnimals.scss"



export const HungryAnimals = ({animals}: IHungryAnimalsProps)=>{
    return(<>
    <div className="hungrywrapper">
    <h3>Hungriga djur:</h3>
    <span>Dessa djur är extra hungriga, gå till dem och ge dem mat:</span>
    <ul>
    {animals.map((animal,index)=>(<li key={index}>{animal.name}</li>))}
    </ul>
    </div>
    </>)
}
   
    