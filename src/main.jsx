import React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";
import Dashboard from "./app/Dashboard";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgi7bi0821ti01uj6y06gfsg/master",
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
/* const root = ReactDOM.createRoot(document.getElementById('root')); */

root.render(
  <ApolloProvider client={client}>
    <Dashboard />
  </ApolloProvider>
);
