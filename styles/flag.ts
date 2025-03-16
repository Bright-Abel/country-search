import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const H2 = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const Img = styled(Image)`
  margin-inline: auto;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
`;

export const NoArms = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #6a7282;
  }
`;

export const FlipCardContainer = styled.div`
  width: 250px;
  height: 150px;
  perspective: 1000px;
  margin: auto;
  position: relative;
`;

export const FlipCardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${FlipCardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 8px;
`;

export const FlipCardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 8px;
  background: white;
  transform: rotateY(180deg);
`;
