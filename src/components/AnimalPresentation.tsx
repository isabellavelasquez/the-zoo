import type { IAnimal } from "../models/IAnimalResponse"

type AnimalPresentationProps = {
    animal: IAnimal
}

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
    
return <>
    <img src={animal.imageUrl}></img>
        <h3>{animal.name}</h3>
        <p>{animal.longDescription}</p>
        //status here//
        <button>Feed</button>
    </>
}