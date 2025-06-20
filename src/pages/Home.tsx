import { StyledStartButton } from "../components/styled/Buttons";
import { StyledHomeContainer } from "../components/styled/Containers";
import { StyledStartHeading } from "../components/styled/Headings";
import { StyledStartImg } from "../components/styled/Images";

export const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledStartImg src="src/assets/background.png" />
      <StyledStartHeading>PETTING ZOO</StyledStartHeading>
      <StyledStartButton to={"/animals"}>START</StyledStartButton>
    </StyledHomeContainer>
  );
};
