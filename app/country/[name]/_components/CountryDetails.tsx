"use client";

import { GET_COUNTRY_DETAILS } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Flag from "./Flag";
import DetailsSkeleton from "@/components/skeletonLoader/DetailsSkeleton";

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
  if (error)
    return (
      <div className="w-full h-full p-6 flex justify-center items-center text-2xl font-semibold text-red-500 animate-bounce">
        Error: {error.message}
      </div>
    );
  if (!data)
    return (
      <div className="w-full h-full p-6 flex justify-center items-center text-2xl font-semibold text-blue-500 animate-bounce">
        No country data found
      </div>
    );

  const countryData = data.country[0];

  return (
    <section className="w-full h-full p-6 bg-gray-100 dark:bg-dark-300 min-h-screen rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-brand-100 dark:text-brand-200">
        {countryData.name.common}
      </h1>
      <p className="text-gray-600 dark:text-light-500 text-center">
        Official Name: {countryData.name.official}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-6 p-4 bg-white dark:bg-dark-200 rounded-lg shadow">
        {newArr.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <strong className="dark:text-light-200 text-dark-400 ">
              {item.name}:
            </strong>
            <p className="text-gray-600 dark:text-light-500">{item.value}</p>
          </div>
        ))}
      </div>

      <Flag countryData={countryData} />

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Maps</h2>
        <p>
          <Link
            href={countryData.maps.googleMaps}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CountryDetails;
