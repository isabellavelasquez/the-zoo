import { StyledStartButton } from "../components/styled/Buttons"
import { HomeContainer } from "../components/styled/Containers"


export const Home = () => {
  return <HomeContainer>
    <StyledStartButton to={"/animals"}>Start</StyledStartButton>
  </HomeContainer>
}