const productModifiersFragment = `
    fragment ProductModifiers on Product {
      modifiersCollection {
        items {
          sys {
            id
          }
          name
        }
      }
}
`;

export const GET_ALL_PRODUCTS_QUERY = `
  ${productModifiersFragment}
  query GetAllProducts {
    productCollection {
      items {
        sys {
          id
        }
        title
        price
        ...ProductModifiers
      }
    }
  }
`;
