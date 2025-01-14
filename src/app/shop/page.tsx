import { getProducts } from "@/clients/contentfulClient";

const ShopPage = async () => {
  const products = await getProducts();

  console.log(products);

  return <div>this is shop</div>;
};

export default ShopPage;
