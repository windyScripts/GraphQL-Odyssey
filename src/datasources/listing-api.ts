import { RESTDataSource } from "@apollo/datasource-rest";

export class ListingAPI extends RESTDataSource{
    baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
    // mind that it ends in /
    getFeaturedListings() {
        return this.get<any[]>("featured-listings");
    }
}

