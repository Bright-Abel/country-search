"use client";

import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const BASE_URL = "https://restcountries.com/v3.1";

const restLink = new RestLink({
  uri: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

const link = ApolloLink.from([errorLink, restLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
