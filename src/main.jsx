import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { offsetLimitPagination, concatPagination } from "@apollo/client/utilities";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgi7bi0821ti01uj6y06gfsg/master",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          programs: concatPagination(),
        },
      },
    },
  }),
});

// const root = createRoot(document.getElementById("root"));
// root.render(

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
