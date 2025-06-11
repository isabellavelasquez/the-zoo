import { type IAnimal } from "../models/IAnimal"
import { Link } from "react-router-dom"
import { StyledImg } from "./styled/Images"
import { timePassed } from "../helpers/animalsHelper"

type AnimalCardProps = {
    animal: IAnimal
}

export enum AnimalStatus {
    FULL = "är mätt",
    ALMOST_HUNGRY = "behöver matas snart", 
    HUNGRY = "behöver bli matad nu", 
    STARVING = "dör snart av hunger"
}

export const AnimalCard = ({ animal }: AnimalCardProps) => { 


    
    const getAnimalStatus = () => {
       const lastFed = timePassed(animal)

       if(lastFed > 3) return AnimalStatus.FULL
       if(lastFed >= 3) return AnimalStatus.ALMOST_HUNGRY
       if(lastFed >= 5) return AnimalStatus.HUNGRY
       if(lastFed > 5) return AnimalStatus.STARVING
    }

    return<>
    <div>
        <StyledImg src={animal.imageUrl}></StyledImg>
        <h2>{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <Link to={`/animal/${animal.id}`}>Läs mer</Link>
        <p>{animal.name + " " + getAnimalStatus()}</p>
    </div>
    </>
}