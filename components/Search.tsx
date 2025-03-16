"use client";

import { IoSearch } from "react-icons/io5";
import { SearchBox, Container, SearchInput } from "@/styles/search";
import CountryCompareModal from "@/app/country/_components/CountryCompareModal";

interface Props {
  length: number;
  countries: Country[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ length, countries, searchQuery, setSearchQuery }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };
  return (
    <Container>
      <SearchBox>
        <IoSearch />
        <SearchInput
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for country..."
        />
      </SearchBox>
      <CountryCompareModal length={length} countries={countries} />
    </Container>
  );
};

export default Search;
