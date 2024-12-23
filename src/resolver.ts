import { Resolvers } from "./types";


export const resolvers: Resolvers = {
    Query: {
        featuredListings: (_,__,{dataSources}) => {
            Query: {
                return dataSources.listingAPI.getFeaturedListings();
            }
        }
    },
};

