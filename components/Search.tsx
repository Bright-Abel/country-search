"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { sortData } from "@/lib/features/sliceFeature";
import ComparisonModal from "@/app/country/_components/ComparisonModal";

interface Props {
  length: number;
  countries: Country[];
}

const Search = ({ length, countries }: Props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const name = e.target.name;
    const value = e.target.value;
    setSearch(value);
    dispatch(sortData(value));
  };
  return (
    <div className="flex justify-between flex-col md:flex-row items-center gap-3">
      <div className="bg-white rounded-[2px] max-w-[300px] w-full outline-none border text-sm 2xl:text-lg border-solid p-2 border-[#E2E8F0] dark:bg-[#484554] dark:border-[#484554] flex gap-2 items-center capitalize">
        <IoSearch className="text-[#94A3B8]" />
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search for country..."
          className="placeholder:text-[#CBD5E1] w-full outline-none bg-transparent"
        />
      </div>
      <ComparisonModal length={length} countries={countries} />
    </div>
  );
};

export default Search;
