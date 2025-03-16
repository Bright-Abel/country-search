"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { TbWorldSearch } from "react-icons/tb";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 4rem;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  top: 0;
  z-index: 50;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 0.5rem;

  svg{
  font-size: 1.5rem;
  color: var(--color-950);
  }

  background-color: var(--navbar-bg);
    box-shadow: none;
  }

  @media (min-width: 768px) {
    padding: 0 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const LogoText = styled.h1`
  display: flex;
  align-items: center;
`;

const Highlight = styled.span`
  color: var(--color-950);
`;

const NavBar = () => {
  return (
    <Header>
      <LogoLink href="/country">
        <TbWorldSearch />
        <LogoText>
          Country<Highlight>Search</Highlight>
        </LogoText>
      </LogoLink>
      <ThemeToggle />
    </Header>
  );
};
export default NavBar;
