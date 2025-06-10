import type { IAnimal } from "../models/IAnimalResponse";

export enum ActionTypes {
    FED,
    FETCHED, 
}

export type Action = {
    type: ActionTypes,
    payload: string
}

export const AnimalReducer = (animals: IAnimal[], action: Action): IAnimal[] => {

    switch (action.type) {
        case ActionTypes.FETCHED: {
            return JSON.parse(action.payload) as IAnimal[];
        }
        case ActionTypes.FED: {

        }
    }
   
    return animals;
}