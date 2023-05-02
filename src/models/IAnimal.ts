export interface IAnimal {
  id: number;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  latinName: string;
  longDescription: string;
  medicine: string;
  name: string;
  shortDescription: string;
  yearOfBirth: number;
}

export interface IFullDescription extends IAnimal {
  fullDesc: boolean;
}
