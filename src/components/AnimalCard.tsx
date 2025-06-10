import styled from "styled-components"
import type { IAnimal } from "../models/IAnimalResponse"
import { Link } from "react-router-dom"

const StyledImg = styled.img`
    width: 100%;
     max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`

type AnimalCardProps = {
    animal: IAnimal
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
    

    return<>
        <StyledImg src={animal.imageUrl}></StyledImg>
        <h2>{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <Link to={`/animal/${animal.id}`}>Läs mer</Link>
        //need to add status here//
    </>
}