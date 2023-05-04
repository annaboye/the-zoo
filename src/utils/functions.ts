import { IAnimal } from "../models/IAnimal";

export const timeSinceFed = (currentAnimal: IAnimal) => {
  return Math.floor(
    (new Date().getTime() - new Date(currentAnimal.lastFed).getTime()) /
      (1000 * 60 * 60)
  );
};
