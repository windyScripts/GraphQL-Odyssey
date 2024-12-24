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

// Resolvers and Listing API Import
import { resolvers } from "./resolver";
import { ListingAPI } from "./datasources/listing-api";

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
      encoding: "utf-8",
    })
  );

  async function startApolloServer(){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const {url} = await startStandaloneServer(server, {
        context: async () => {
            // this object becomes our resolver's contextValue, the third positional argument
            //return
            const { cache } = server;
            return {
                dataSources: {
                    listingAPI: new ListingAPI({ cache })
                }
            }
        }
    });
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
      `);
  }

  startApolloServer();