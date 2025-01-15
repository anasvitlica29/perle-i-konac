import { GraphQLClient } from "graphql-request";
import { GET_ALL_PRODUCTS_QUERY } from "@/clients/queries/getAllProductsQuery";
import {
  Modifier,
  Product,
  ProductCollection,
  ProductModifierCollection,
} from "@/clients/types/contentful";
import { GET_MODIFIERS_BY_IDS_QUERY } from "@/clients/queries/getModifiersByIdsQuery";

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

const getModifiersByIds = async (ids: string[]): Promise<Modifier[]> => {
  if (!ids.length) {
    return [];
  }

  try {
    const response = await graphQLClient.request<ProductModifierCollection>(
      GET_MODIFIERS_BY_IDS_QUERY(ids),
    );
    if (!response) {
      return [];
    }

    return response.productModifierCollection.items;
  } catch (error) {
    console.error(">>> GraphQL error", error);
    return [];
  }
};

export { getProducts, getModifiersByIds };
