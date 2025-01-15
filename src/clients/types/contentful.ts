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

type ModifierName = "Color" | "Size";

export interface Modifier {
  sys: {
    id: string;
  };
  name: ModifierName;
  values: string[];
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
