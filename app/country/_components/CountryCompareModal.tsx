"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import Chart from "./Chart";

interface Props {
  length: number;
  countries: Country[];
}

const CompareModal = ({ length, countries }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const formattedData = countries.map((country) => ({
    name: country.name.common,
    Population: Number(country.population),
    Area: Number(country.area),
  }));

  return (
    <>
      {length > 1 && (
        <OpenButton onClick={toggleModal} aria-label="Open Comparison Modal">
          Compare Country
        </OpenButton>
      )}
      <ModalOverlay isOpen={isModalOpen} onClick={toggleModal}>
        <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
          <Header>
            <TitleContainer>
              <Title>Compare country</Title>
              <CountryList>
                {countries.map((country, index) => (
                  <span key={country.name.common}>
                    {index > 0 && index === countries.length - 1
                      ? " and "
                      : index > 0
                      ? ", "
                      : ""}
                    {country.name.common}
                  </span>
                ))}
              </CountryList>
            </TitleContainer>
            <CloseButton onClick={toggleModal}>
              <IoClose />
            </CloseButton>
          </Header>
          <ChartContainer>
            <Chart data={formattedData} />
          </ChartContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default CompareModal;

// Styled Components
const OpenButton = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  color: #f1f5f9;
  background-color: var(--color-950);
  transition: background-color 300ms ease-in-out;

  &:focus {
    outline: none;
  }
`;

const ModalOverlay = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 50;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.7s ease-in-out;
`;

const ModalContent = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  max-width: 500px;
  width: 90%;
  max-height: 100%;
  max-width: 800px;
  background-color: var(--modal-bg);
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-20%)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 16px;
  color: var(--modal-text);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--details-strong-p);
`;

const CountryList = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  p {
    font-size: 0.875rem;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  padding: 16px;
  height: 100%;
`;
