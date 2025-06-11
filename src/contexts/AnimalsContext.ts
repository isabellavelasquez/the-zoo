import { createContext, type Dispatch } from "react"
import type { IAnimal } from "../models/IAnimal"
import type { Action } from "../reducers/animalReducer"

type AnimalContext = {
    animals: IAnimal[],
    dispatch: Dispatch<Action>
}

export const AnimalsContext = createContext<AnimalContext>({
    animals: [],
    dispatch: () => {}
})