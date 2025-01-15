import { getProducts } from "@/clients/contentfulClient";
import { ProductCard } from "@/components";

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <div className="pt-24">
      <div className="flex items-start md:justify-center px-5 md:px-24 flex-wrap md:gap-10 h-full">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
