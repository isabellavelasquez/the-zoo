import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-image: url("src/assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const AnimalsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
`