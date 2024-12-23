// TODO

// For setting up server

import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"

// For reading schema.graphql and converting 
// graphql strings into format that apollo 
// libraries expect when working with operatins 
// and schemas

import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
      encoding: "utf-8",
    })
  );

  async function startApolloServer(){
    const server = new ApolloServer({typeDefs})
    const {url} = await startStandaloneServer(server);
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
      `);
  }

  startApolloServer();