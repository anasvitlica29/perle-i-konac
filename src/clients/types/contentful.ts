export interface ProductCollection {
  productCollection: {
    items: any[];
  };
}

export interface ProductModifierCollection {
  productModifierCollection: {
    items: Modifier[];
  };
}

type ModifierName = "Color";

export interface Modifier {
  sys: {
    id: string;
  };
  name: ModifierName;
  valuesCollection: {
    items: {
      name: string;
      value: string;
    }[];
  };
}

export interface Color {
  name: string;
  value: string;
}

export interface Product {
  sys: {
    id: string;
  };
  title: string;
  price: number;
  modifiersCollection: {
    items: Modifier[];
  };
}
