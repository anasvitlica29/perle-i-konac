export interface ProductCollection {
  productCollection: {
    items: any[];
  };
}

export interface Product {
  sys: {
    id: string;
  };
  title: string;
  price: number;
}
