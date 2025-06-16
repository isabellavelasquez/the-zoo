import { useContext } from "react";
import { type IAnimal } from "../models/IAnimal";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { ActionTypes } from "../reducers/animalReducer";
import { AnimalStatus, getAnimalStatus } from "../helpers/animalsHelper";

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
      <img src={animal.imageUrl}></img>
      <h3>{animal.name}</h3>
      <p>{animal.longDescription}</p>
      <button disabled={animal.isFed} onClick={feedAnimal}>
        Feed
      </button>
      {status === AnimalStatus.ALMOST_HUNGRY && (
        <p>{animal.name + " " + status}</p>
      )}
    </>
  );
};
