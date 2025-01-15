export const GET_MODIFIERS_BY_IDS_QUERY = (ids: string[]) => {
  const orFilters = ids.map((id) => `{ sys: { id: "${id}" } }`).join(", ");
  return `
    query GetModifiers {
      productModifierCollection(where: { OR: [${orFilters}] }) {
        items {
          sys {
            id
          }
          name
          values
        }
      }
    }
  `;
};
