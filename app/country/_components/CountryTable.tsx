"use client";

import PaginateTwo from "@/components/Pagination";
import CountryTableSkeleton from "@/components/skeletonLoader/CountryTableSkeleton";
import { GET_ALL_COUNTRIES } from "@/lib/queries";
import { countryTableHeader } from "@/lib/utils/constant";
import { useQuery } from "@apollo/client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndSort } from "@/lib/features/sliceFeature";
import { RootState } from "@/store";
import Search from "@/components/Search";

const CountryTable = () => {
  const { filtered_data } = useSelector((state: RootState) => state.dataSlice);
  const [selectedRows, setSelectedRows] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const dispatch = useDispatch();

  const { loading, error } = useQuery<AllCountires>(GET_ALL_COUNTRIES, {
    onCompleted: (data) => {
      dispatch(fetchAndSort(data.countries));
    },
    onError: (err) => console.error("Apollo Error:", err),
  });

  // Toggling individual row
  const toggleRow = (country: Country) => {
    setSelectedRows((prev) => {
      if (prev.some((c) => c.name.common === country.name.common)) {
        return prev.filter((c) => c.name.common !== country.name.common);
      } else if (prev.length < 2) {
        return [...prev, country];
      }
      return prev;
    });
  };

  if (loading) return <CountryTableSkeleton />;
  if (error)
    return (
      <div className="w-full h-full p-6 flex justify-center items-center text-2xl font-semibold text-red-500 animate-bounce">
        Error: {error.message}
      </div>
    );

  const paginatedData =
    filtered_data &&
    filtered_data.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  return (
    <div className="w-full h-full flex overflow-hidden flex-col justify-between">
      <div className="w-full overflow-auto h-[85%] px-2 space-y-3 ">
        <Search length={selectedRows.length} countries={selectedRows} />
        <div className="w-full text-center  ">
          <p className="!text-2xl capitalize font-semibold text-brand-100 dark:text-brand-200 ">
            {" "}
            Select atleast two rows to compare
          </p>
        </div>
        <table className="w-full table-auto xl:table-fixed">
          <thead className="bg-light-100 dark:bg-dark-400">
            <tr className="text-sm text-left  capitalize ">
              <th className=" px-2 py-3 w-[7%] rounded-tl-lg text-dark-600 dark:text-light-100 capitalize">
                Select
              </th>
              {countryTableHeader.map((header, index) => (
                <th
                  key={index}
                  className={clsx(
                    "px-2 py-3 text-dark-600 dark:text-light-100 capitalize ",

                    index === countryTableHeader.length - 1 && "rounded-tr-lg"
                    // header === "flags" && "w-[5%]",
                    // (header === "maps" ||
                    //   header === "area" ||
                    //   header === "region") &&
                    //   "w-[8%]"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData && paginatedData.length > 0 ? (
              paginatedData?.map((row, index) => (
                <tr
                  key={index}
                  className={clsx(
                    "text-left cursor-pointer text-xs md:text-sm",
                    selectedRows.some(
                      (c: any) => c.name.common === row.name.common
                    )
                      ? "bg-light-400 dark:bg-dark-800 text-dark-400 dark:text-white"
                      : "bg-white dark:bg-dark-300"
                  )}
                >
                  <td className="table-data">
                    <input
                      type="checkbox"
                      checked={selectedRows.some(
                        (c: any) => c.name.common === row.name.common
                      )}
                      onChange={() => toggleRow(row)}
                      className="outline-none focus:outline-none cursor-pointer"
                    />
                  </td>

                  <td className="table-data">{row.name.common}</td>

                  <td className="table-data">{row.capital?.[0] ?? "N/A"}</td>
                  <td className="table-data">{row.region}</td>
                  <td className="table-data">
                    {row.population.toLocaleString()}
                  </td>
                  <td className="table-data">{row.area.toLocaleString()}</td>
                  <td className="table-data">
                    {Object.values(row.currencies || {})[0]?.name ?? "N/A"}(
                    {Object.values(row.currencies || {})[0]?.symbol ?? "N/A"})
                  </td>
                  <td className="table-data">
                    {Object.values(row.languages || {}).join(", ")}
                  </td>
                  <td className="table-data">
                    <Image
                      src={row.flags.png}
                      alt={row.name.common}
                      width={30}
                      height={20}
                    />
                  </td>
                  <td className="table-data">
                    <Link
                      href={row.maps.googleMaps}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      view
                    </Link>
                  </td>
                  <td className="table-data">
                    <Link
                      href={`/country/${row.name.common.replace(/\s/g, "-")}`}
                      // target="_blank"
                      // rel="noreferrer"
                      className="text-blue-500"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="text-center cursor-pointer  text-brand-100 dark:text-brand-200 font-semibold text-4xl"
                  colSpan={countryTableHeader.length + 1}
                >
                  No data found for the search query
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {filtered_data && filtered_data.length > 10 && (
        <div className="w-full flex justify-center">
          <PaginateTwo
            totalDocs={filtered_data.length}
            itemsPerPage={rowsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CountryTable;
