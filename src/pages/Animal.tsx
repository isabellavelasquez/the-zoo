import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useParams } from "react-router";
import { AnimalPresentation } from "../components/AnimalPresentation";

export const Animal = () => {
  const { animals } = useContext(AnimalsContext);
  const { id } = useParams();

  console.log(animals);

  if (id) {
    const foundAnimal = animals.find((a) => a.id === +id);

    if (foundAnimal) {
      return <AnimalPresentation animal={foundAnimal}></AnimalPresentation>;
    }

    return <>No animal found</>;
  }

  return <>No id found</>;
};
