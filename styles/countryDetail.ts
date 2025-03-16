import styled from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  min-height: 100vh;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--details-bg);
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: var(--color-950);
`;

export const Subtitle = styled.p`
  color: var(--details-title);
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--details-grid);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Strong = styled.strong`
  color: var(--details-strong);
`;

export const Text = styled.p`
  color: var(--details-strong-p);
`;

export const MapsContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const MapsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  color: var(--color-blue-500);
  text-decoration: underline;
`;
