import { IAnimal } from "../models/IAnimal"
import "../sass/HungryAnimals.scss"

interface IHungryAnimalsProps{
animals: IAnimal[]

}

export const HungryAnimals = ({animals}: IHungryAnimalsProps)=>{
    return(<>
    <div className="container">
    <h3>Hungriga djur:</h3>
    <span>Dessa djur är extra hungriga, gå till dem och ge dem mat:</span>
    <ul>
    {animals.map((animal,index)=>(<li>{animal.name}</li>))}
    </ul>
    </div>
    </>)
}
   
    