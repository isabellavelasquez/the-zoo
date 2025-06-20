import styled from "styled-components";

export const StyledAnimalHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;

  & p {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  & h1 {
    margin-bottom: 0;
  }
`;

export const StyledAnimalName = styled.h1`
  text-transform: uppercase;
  font-size: x-large;
  padding-top: 3rem;
`;

export const StyledStartHeading = styled.h1`
  font-size: 50px;
  margin-top: 1.5rem;
`;
