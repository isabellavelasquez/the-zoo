import type { IAnimal } from "../models/IAnimal";
export enum AnimalStatus {
  FULL = "är mätt",
  ALMOST_HUNGRY = "behöver matas snart",
  HUNGRY = "behöver bli matad nu",
  STARVING = "dör snart av hunger",
}
 export const getAnimalStatus = (animal: IAnimal) => {
    const lastFed = timePassed(animal);
///make this a switch statement instead. 
    if (lastFed < 3) return AnimalStatus.FULL;
    if (lastFed >= 3 && lastFed < 4) return AnimalStatus.ALMOST_HUNGRY;
    if (lastFed >= 4 && lastFed < 5) return AnimalStatus.HUNGRY;
    if (lastFed > 5) return AnimalStatus.STARVING;
  };

  export const timePassed = (animal: IAnimal) => {
    return (Date.now() - new Date(animal.lastFed).getTime()) / (1000 * 60 ); // removed one more * 60 for test
}
