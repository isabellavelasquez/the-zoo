import type { IAnimal } from "../models/IAnimal";
export enum AnimalStatus {
  FULL = "Mätt",
  ALMOST_HUNGRY = "Behöver matas snart",
  HUNGRY = "Behöver bli matad nu",
  STARVING = "Extremt hungrig",
}
 export const getAnimalStatus = (animal: IAnimal) => {
  const lastFed = timePassedSinceFed(animal);
    
  switch (true) {
  case lastFed < 3:
    return AnimalStatus.FULL;

  case lastFed >= 3 && lastFed < 4:
    return AnimalStatus.ALMOST_HUNGRY;

  case lastFed >= 4 && lastFed < 5:
    return AnimalStatus.HUNGRY;

  case lastFed >= 5:
    return AnimalStatus.STARVING;

  default:
    return AnimalStatus.STARVING; 
}

  };

  export const timePassedSinceFed = (animal: IAnimal) => {
    return (Date.now() - new Date(animal.lastFed).getTime()) / (1000 * 60);
}
