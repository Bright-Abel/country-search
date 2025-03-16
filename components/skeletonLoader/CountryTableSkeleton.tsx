import React from "react";
import {
  SkeletonContainer,
  Footer,
  SkeletonBox,
  Table,
  TableWrapper,
  // Th,
  ThDiv,
  Thead,
  Tr,
  TrBody,
} from "@/styles/countryTableSkeleton";

import { SelectTh, Td, Th } from "@/styles/countryTable";

const CountryTableSkeleton = () => {
  return (
    <SkeletonContainer>
      <TableWrapper>
        <SkeletonBox width="320px" height="30"></SkeletonBox>

        <Table>
          <Thead>
            <Tr>
              <SelectTh>
                <ThDiv></ThDiv>
              </SelectTh>
              {[...Array(10)].map((_, index) => (
                <Th key={index}>
                  <ThDiv></ThDiv>
                </Th>
              ))}
            </Tr>
          </Thead>
          <tbody>
            {[...Array(10)].map((_, rowIndex) => (
              <TrBody key={rowIndex}>
                <Td>
                  <ThDiv></ThDiv>
                </Td>
                {[...Array(10)].map((_, colIndex) => (
                  <Td key={colIndex}>
                    <ThDiv></ThDiv>
                  </Td>
                ))}
              </TrBody>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <Footer>
        <SkeletonBox width="10rem" height="2rem" />
      </Footer>
    </SkeletonContainer>
  );
};

export default CountryTableSkeleton;
