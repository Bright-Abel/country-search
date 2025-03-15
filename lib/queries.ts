import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries @rest(path: "/all", type: "[Country]") {
      name {
        common
      }

      capital
      region
      population

      area
      currencies
      languages
      flags {
        png
      }
      maps {
        googleMaps
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query ($name: String!) {
    country(name: $name)
      @rest(path: "/name/{args.name}?fullText=true", type: CountryDetails) {
      name {
        common
        official
      }
      independent
      currencies
      capital
      region
      languages
      continents
      population
      area
      maps {
        googleMaps
      }

      flags {
        png
      }
      coatOfArms {
        png
      }
    }
  }
`;
