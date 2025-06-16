import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledStartButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: #00ff00;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  animation: ${pulse} 1.5s infinite;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #00cc00;
    transform: scale(1.1);
  }

  &:active {
    background-color: #009900;
    transform: scale(0.95);
  }
`;
