import styled from "styled-components";

interface TableRowProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  overflow: auto;
`;

export const PHeader = styled.div`
  width: 100%;
  text-align: center;
`;
export const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-950);
`;

export const TableDiv = styled.div`
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  table-layout: auto;
  border: none;
  border-spacing: 0;

  @media (min-width: 1280px) {
    table-layout: fixed;
  }
`;

export const Thead = styled.thead`
  background-color: var(--table-header-bg);
  border: none;
`;

export const Tr = styled.tr`
  text-align: left;
  font-size: 0.875rem;
  text-transform: capitalize;
  border: none;

  &:nth-child(even) {
    background-color: var(--table-row-even-bg);
  }
`;
export const SelectTh = styled.th`
  padding: 12px 8px 12px 8px;
  width: 7%;
  border: none;
  border-top-left-radius: 0.375rem;
  text-transform: capitalize;
  color: var(--primary-text);
`;

export const Th = styled.th`
  padding: 12px 8px 12px 8px;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--primary-text);
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:last-child {
    border-top-right-radius: 0.375rem;
  }
`;

export const TableRow = styled.tr.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<TableRowProps>`
  text-align: left;
  cursor: pointer;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  background-color: ${({ isSelected }) =>
    isSelected
      ? "var(--table-row-selected-bg)"
      : "var(--table-row-default-bg)"};
  color: ${({ isSelected }) => isSelected && "var(--table-row-selected-text)"};
`;

export const Input = styled.input`
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const Td = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-block: 16px;
  padding-inline: 8px;
  height: 40px;
  border: none;
  a {
    color: var(--color-blue-500);
    text-transform: capitalize;
    text-decoration: none;
  }
`;

export const NoData = styled.td`
  text-align: center;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-950);
  border: none;
`;
