"use client";

import PaginateTwo from "@/components/Pagination";
import CountryTableSkeleton from "@/components/skeletonLoader/CountryTableSkeleton";
import { GET_ALL_COUNTRIES } from "@/lib/queries";
import { countryTableHeader } from "@/lib/utils/constant";
import { useQuery } from "@apollo/client";
import { ErrorMessage } from "@/styles/error";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "@/components/Search";
import {
  Container,
  Content,
  PHeader,
  Heading,
  StyledTable,
  Thead,
  TableDiv,
  SelectTh,
  Th,
  TableRow,
  Input,
  Td,
  Tr,
  NoData,
} from "@/styles/countryTable";

const CountryTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const { data, loading, error } = useQuery<AllCountires>(GET_ALL_COUNTRIES);

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
  if (error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;

  const paginatedData =
    data?.countries &&
    data?.countries.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );

  const displayedData = paginatedData?.filter((row) =>
    row.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container>
      <Content>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          length={selectedRows.length}
          countries={selectedRows}
        />
        <PHeader>
          <Heading> Select atleast two rows to compare</Heading>
        </PHeader>
        <TableDiv>
          <StyledTable>
            <Thead>
              <Tr>
                <SelectTh>Select</SelectTh>
                {countryTableHeader.map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))}
              </Tr>
            </Thead>
            <tbody>
              {displayedData && displayedData.length > 0 ? (
                displayedData?.map((row, index) => (
                  <TableRow
                    key={index}
                    isSelected={selectedRows.some(
                      (c) => c.name.common === row.name.common
                    )}
                  >
                    <Td>
                      <Input
                        type="checkbox"
                        checked={selectedRows.some(
                          (c: any) => c.name.common === row.name.common
                        )}
                        onChange={() => toggleRow(row)}
                      />
                    </Td>

                    <Td>{row.name.common}</Td>

                    <Td>{row.capital?.[0] ?? "N/A"}</Td>
                    <Td>{row.region}</Td>
                    <Td>{row.population.toLocaleString()}</Td>
                    <Td>{row.area.toLocaleString()}</Td>
                    <Td>
                      {Object.values(row.currencies || {})[0]?.name ?? "N/A"}(
                      {Object.values(row.currencies || {})[0]?.symbol ?? "N/A"})
                    </Td>
                    <Td>{Object.values(row.languages || {}).join(", ")}</Td>
                    <Td>
                      <Image
                        src={row.flags.png}
                        alt={row.name.common}
                        width={30}
                        height={20}
                      />
                    </Td>

                    <Td>
                      <Link
                        href={`/country/${row.name.common.replace(/\s/g, "-")}`}
                        // target="_blank"
                        // rel="noreferrer"
                      >
                        Details
                      </Link>
                    </Td>
                  </TableRow>
                ))
              ) : (
                <tr>
                  <NoData colSpan={countryTableHeader.length + 1}>
                    No data found for the search query
                  </NoData>
                </tr>
              )}
            </tbody>
          </StyledTable>
        </TableDiv>
      </Content>
      {!searchQuery &&
        data?.countries &&
        data?.countries.length > rowsPerPage && (
          <div className="w-full flex justify-center">
            <PaginateTwo
              totalDocs={data?.countries.length}
              itemsPerPage={rowsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
    </Container>
  );
};

export default CountryTable;
