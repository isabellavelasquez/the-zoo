import { useContext } from "react";
import { type IAnimal } from "../models/IAnimal";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { ActionTypes } from "../reducers/animalReducer";
import { AnimalStatus, getAnimalStatus } from "../helpers/animalsHelper";
import placeholder from "../assets/placeholder.svg";
import cake from "../assets/cake.png";
import medicine from "../assets/medicine.png";
import carrot from "../assets/carrot.png";
import {
  StyledAnimalPresentationContainer,
  StyledMainContentContainer,
  StyledStatsContainer,
} from "./styled/Containers";
import { StyledFeedButton } from "./styled/Buttons";
import { StyledAnimalHeading } from "./styled/Headings";
import { StyledAnimalPresentationImg, StyledIcon } from "./styled/Images";

type AnimalPresentationProps = {
  animal: IAnimal;
};

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
  const { dispatch } = useContext(AnimalsContext);

  const status = getAnimalStatus(animal);

  const feedAnimal = () => {
    dispatch({
      type: ActionTypes.FED,
      payload: String(animal.id),
    });
  };

  return (
    <>
      <StyledAnimalPresentationContainer>
        <StyledAnimalPresentationImg
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        ></StyledAnimalPresentationImg>
        <StyledMainContentContainer>
          <StyledAnimalHeading>
            <h1>{animal.name}</h1>
            <p>
              <em>{animal.latinName}</em>
            </p>
          </StyledAnimalHeading>
          <p>{animal.longDescription}</p>
          <StyledStatsContainer>
            <div>
              <StyledIcon src={cake} alt="cake" />
              <p>{animal.yearOfBirth}</p>
            </div>
            <div>
              <StyledIcon src={medicine} alt="medicine" />
              <p>{animal.medicine}</p>
            </div>
            {status === AnimalStatus.ALMOST_HUNGRY && (
              <div>
                <StyledIcon src={carrot} alt="carrot" />
                <p>{status}</p>
              </div>
            )}
          </StyledStatsContainer>
          <StyledFeedButton
            disabled={
              status === AnimalStatus.FULL ||
              status === AnimalStatus.ALMOST_HUNGRY
            }
            onClick={feedAnimal}
          >
            Feed
          </StyledFeedButton>
        </StyledMainContentContainer>
      </StyledAnimalPresentationContainer>
    </>
  );
};
