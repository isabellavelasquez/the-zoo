import { useContext } from "react"
import { type IAnimal } from "../models/IAnimal"
import { AnimalsContext } from "../contexts/AnimalsContext"
import { ActionTypes } from "../reducers/animalReducer"

type AnimalPresentationProps = {
    animal: IAnimal
}

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
    const { dispatch } = useContext(AnimalsContext);

    const feedAnimal = () => {

        dispatch({
            type: ActionTypes.FED,
            payload: String(animal.id)
        })
    }
    console.log(animal)
    console.log(animal.isFed)
    
    
return <>
    <img src={animal.imageUrl}></img>
    <h3>{animal.name}</h3>
    <p>{animal.longDescription}</p>
    <button disabled={animal.isFed} onClick={feedAnimal}>Feed</button>
    </>
}