import { GraphQLClient } from "graphql-request";
import { GET_ALL_PRODUCTS_QUERY } from "@/clients/queries/getAllProductsQuery";
import { Product, ProductCollection } from "@/clients/types/contentful";

const space = process.env.CONTENTFUL_SPACE_ID; // Remove NEXT_PUBLIC_ prefix
const accessToken = process.env.CONTENTFUL_DELIVERY_API_KEY; // Remove NEXT_PUBLIC_ prefix

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});

const getProducts = async (): Promise<Product[]> => {
  const response = await graphQLClient.request<ProductCollection>(
    GET_ALL_PRODUCTS_QUERY,
  );

  if (!response) {
    return [];
  }

  return response.productCollection.items;
};

export { getProducts };
