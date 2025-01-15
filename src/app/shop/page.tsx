import { getProducts } from "@/clients/contentfulClient";
import { Hero, ProductCard } from "@/components";

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <main>
      <Hero
        mainText="Web Prodavnica"
        secondaryText="Vaše mesto za unikatne poklone i nežne detalje."
        imageUrl="/hero.jpg"
      />
      <div className="flex items-start md:justify-center px-5 md:px-24 flex-wrap md:gap-10 h-full">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ShopPage;
