import { RESTDataSource } from "@apollo/datasource-rest";

import { Listing } from "../types";

export class ListingAPI extends RESTDataSource{
    baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
    // mind that it ends in /
    getFeaturedListings(): Promise<Listing[]> {
        return this.get<Listing[]>("featured-listings");
    }
}

