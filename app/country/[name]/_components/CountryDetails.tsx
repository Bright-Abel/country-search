"use client";

import { GET_COUNTRY_DETAILS } from "@/lib/queries";
import { useQuery } from "@apollo/client";

import Link from "next/link";
import { useMemo } from "react";
import Flag from "./Flag";
import DetailsSkeleton from "@/components/skeletonLoader/DetailsSkeleton";
import {
  Section,
  Title,
  Subtitle,
  GridContainer,
  InfoItem,
  Strong,
  Text,
  MapsContainer,
  MapsTitle,
  StyledLink,
} from "@/styles/countryDetail";
import { ErrorMessage } from "@/styles/error";

const CountryDetails = ({ country }: { country: string }) => {
  const { data, loading, error } = useQuery<CountryDetails>(
    GET_COUNTRY_DETAILS,
    {
      variables: {
        name: country,
      },
    }
  );
  const newArr = useMemo(() => {
    return [
      {
        name: "Region",
        value: data?.country[0].region || "N/A",
      },
      {
        name: "Capital",
        value: data?.country[0].capital?.join(", ") || "N/A",
      },
      {
        name: "Population",
        value: data?.country[0].population.toLocaleString(),
      },
      {
        name: "Area",
        value: `${data?.country[0].area.toLocaleString()} km²`,
      },
      {
        name: "Continents",
        value: data?.country[0].continents.join(", "),
      },
      {
        name: "Currency",
        value:
          Object.values(data?.country[0].currencies || {})[0]?.name ?? "N/A",
      },
      {
        name: "Currency Symbol",
        value:
          Object.values(data?.country[0].currencies || {})[0]?.symbol ?? "N/A",
      },
      {
        name: "Languages",
        value: Object.values(data?.country[0].languages || {}).join(", "),
      },
    ];
  }, [data]);

  if (loading) return <DetailsSkeleton />;
  if (error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;
  if (!data)
    return <ErrorMessage color="#56b8ff">No country data found</ErrorMessage>;

  const countryData = data.country[0];

  return (
    <Section>
      <Title>{countryData.name.common}</Title>
      <Subtitle>Official Name: {countryData.name.official}</Subtitle>

      <GridContainer>
        {newArr.map((item, index) => (
          <InfoItem key={index}>
            <Strong>{item.name}:</Strong>
            <Text>{item.value}</Text>
          </InfoItem>
        ))}
      </GridContainer>

      <Flag countryData={countryData} />

      <MapsContainer>
        <MapsTitle>Maps</MapsTitle>
        <p>
          <StyledLink
            href={countryData.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </StyledLink>
        </p>
      </MapsContainer>
    </Section>
  );
};

export default CountryDetails;
