export const GET_ALL_PRODUCTS_QUERY = `
  query GetAllProducts {
    productCollection {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`;
