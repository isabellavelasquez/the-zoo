import { Link } from "react-router";
import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const StyledAnimalsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  margin-left: 15rem;
  margin-right: 15rem;
  margin-top: 5rem;
`;

export const StyledAnimalCard = styled(Link)`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 40dvh;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: aliceblue;
  overflow: hidden;
  padding-right: 3rem;

  &:visited {
    color: inherit;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

export const StyledTextContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 70% 20%;
  min-height: 100%;
  margin-left: 30px;
  align-items: center;
  & p {
    font-size: smaller;
  }
`;

export const StyledStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;

    & img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }

    & p {
      font-size: small;
      font-weight: 450;
    }
  }
`;

export const StyledAnimalPresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  flex-direction: row;
  gap: 75px;

  & div {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  margin-right: 5rem;

  & p {
    text-align: center;
  }
`;
