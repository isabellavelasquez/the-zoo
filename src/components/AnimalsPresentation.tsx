import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { StyledAnimalsContainer } from "./styled/Containers";
import { AnimalCard } from "./AnimalCard";

export const AnimalsPresentation = () => {
  const { animals } = useContext(AnimalsContext);
  console.log(animals);

  return (
    <StyledAnimalsContainer>
      {animals.map((a) => (
        <AnimalCard key={a.id} animal={a}></AnimalCard>
      ))}
    </StyledAnimalsContainer>
  );
};
