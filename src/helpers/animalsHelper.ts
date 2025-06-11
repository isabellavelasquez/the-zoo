import type { IAnimal } from "../models/IAnimal";

export const timePassed = (animal: IAnimal) => {
    return (Date.now() - new Date(animal.lastFed).getTime() / (1000 * 60 * 60));
}
