import { IAnimal } from "./IAnimal";

export interface IShowAnimalProps {
  fullDesc: boolean;
  animalList: IAnimal[];
  animal: IAnimal;
}
