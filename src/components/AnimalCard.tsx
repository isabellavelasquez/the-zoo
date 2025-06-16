import { type IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";
import { StyledImg } from "./styled/Images";
import { getAnimalStatus, timePassed } from "../helpers/animalsHelper";

type AnimalCardProps = {
  animal: IAnimal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <>
      <div>
        <StyledImg src={animal.imageUrl}></StyledImg>
        <h2>{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <Link to={`/animal/${animal.id}`}>Läs mer</Link>
        <p>{animal.name + " " + getAnimalStatus(animal)}</p>
        <p>Åt för {timePassed(animal).toFixed(2)} timmar sedan</p>
      </div>
    </>
  );
};
