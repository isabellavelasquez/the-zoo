export interface IAnimalResponse {
    id: number,
    name: string, 
    latinName: string, 
    yearOfBirth: number,
    shortDescription: string, 
    longDescription: string, 
    imageUrl: string, 
    medicine: string, 
    isFed: false, 
    lastFed: string
}

export enum AnimalStaus {
    FULL, 
    HUNGRY, 
    STARVING
}

export interface IAnimal extends IAnimalResponse {
    status: AnimalStaus
}