import { timePassedSinceFed } from "../helpers/animalsHelper";
import { type IAnimal } from "../models/IAnimal";

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
            const animals = JSON.parse(action.payload) as IAnimal[];
            return animals.map(a => 
            ({
                ...a,
                isFed: timePassedSinceFed(a) <= 4
            }))
        }

        case ActionTypes.FED: {
            return animals.map((a) => 
                a.id === +action.payload ? {...a, lastFed: new Date().toISOString(), isFed: true}: a )
        }

        default: return animals;
    }
   
}