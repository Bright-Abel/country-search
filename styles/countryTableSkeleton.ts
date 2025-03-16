import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1rem"};
  background-color: var(--loader-bg);
  border-radius: 0.25rem;
  animation: ${pulse} 1.5s infinite;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-spacing: 0;
  @media (min-width: 1280px) {
    table-layout: fixed;
  }
`;

export const Thead = styled.thead`
  background-color: var(--table-header-bg);
`;

export const Tr = styled.tr`
  text-align: left;
  font-size: 0.875rem;
  text-transform: capitalize;
`;
export const TrBody = styled.tr`
  text-align: left;
  font-size: 0.875rem;
  text-transform: capitalize;
  background-color: var(--table-row-default-bg);
`;

export const Th = styled.th`
  padding: 12px 8px 12px 8px;
`;

export const ThDiv = styled.div`
  width: 96px;
  height: 16px;
  background-color: var(--loader-bg);
  border-radius: 0.25rem;
  animation: ${pulse} 1.5s infinite;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
