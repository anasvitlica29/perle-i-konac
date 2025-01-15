import { getProducts } from "@/clients/contentfulClient";
import { ProductCard } from "@/components";

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <div className="pt-24">
      <div className="flex gap-5 justify-center px-24">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
