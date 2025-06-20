import styled from "styled-components";

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const StyledAnimalPresentationImg = styled(StyledImg)`
  max-height: 400px;
`;

export const StyledStartImg = styled.img`
  width: 250px;
  margin-top: 3rem;
`;

export const StyledIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.4rem;
`;
