import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchBox = styled.div`
  background-color: var(--search-bg);
  border-radius: 2px;
  max-width: 300px;
  width: 100%;
  outline: none;
  border: 1px solid var(--search-border);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  font-size: 0.875rem;

  @media (min-width: 1536px) {
    font-size: 1.125rem;
  }

  svg {
    color: #94a3b8;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  &::placeholder {
    color: #cbd5e1;
  }
`;
