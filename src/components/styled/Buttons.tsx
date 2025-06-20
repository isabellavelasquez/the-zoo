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
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #8bbd8d;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  animation: ${pulse} 1.5s infinite;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #9ee3a0;
    transform: scale(1.1);
  }

  &:active {
    background-color: #c5ebc5;
    transform: scale(0.95);
  }
`;

export const StyledFeedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #8bbd8d;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-bottom: 2rem;
  margin-top: 1rem;
  &:hover {
    background-color: #9ee3a0;
    transform: scale(1.1);
  }

  &:active {
    background-color: #c5ebc5;
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: default;
    transform: none;
  }
`;
