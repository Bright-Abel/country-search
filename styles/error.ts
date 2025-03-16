import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const ErrorMessage = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ color }) => color || "red"};
  animation: ${bounce} 1s infinite;
`;
