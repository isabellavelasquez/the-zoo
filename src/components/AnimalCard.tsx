import { type IAnimal } from "../models/IAnimal";
import { StyledImg } from "./styled/Images";
import { getAnimalStatus, timePassedSinceFed } from "../helpers/animalsHelper";
import placeholder from "../assets/placeholder.svg";
import hourglass from "../assets/hourglass.png";
import carrot from "../assets/carrot.png";
import {
  StyledAnimalCard,
  StyledStatusContainer,
  StyledTextContainer,
} from "./styled/Containers";
import { StyledAnimalName } from "./styled/Headings";

type AnimalCardProps = {
  animal: IAnimal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <>
      <StyledAnimalCard to={`/animal/${animal.id}`}>
        <StyledImg
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => {
            e.currentTarget.src = placeholder;
            e.currentTarget.alt = "No image available";
          }}
        ></StyledImg>

        <StyledTextContainer>
          <StyledAnimalName>{animal.name}</StyledAnimalName>
          <p>{animal.shortDescription}</p>
          <StyledStatusContainer>
            <div>
              <img src={hourglass} alt="hourglass" />
              <p>Åt för {timePassedSinceFed(animal).toFixed(1)} timmar sedan</p>
            </div>
            <div>
              <img src={carrot} alt="carrot" />
              <p>{getAnimalStatus(animal)}</p>
            </div>
          </StyledStatusContainer>
        </StyledTextContainer>
      </StyledAnimalCard>
    </>
  );
};
