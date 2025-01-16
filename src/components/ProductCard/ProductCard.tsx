import { Product } from "@/clients/types/contentful";
import Image from "next/image";
import { PlusIcon } from "@/vectors";

type Props = {
  product: Product;
};
const ProductCard = async ({ product }: Props) => {
  const { title, price } = product;

  // const modifiers = modifiersCollection.items;
  // const modifierIds = modifiers
  //   .filter((m, i, array) => array.indexOf(m) === i)
  //   .map((m) => m.sys.id);
  // const modifierResponse = await getModifiersByIds(modifierIds);

  return (
    <div className="md:max-w-72 relative bg-background rounded shadow-lg min-w-40 md:min-w-60 basis-1/2 md:flex-1 p-2 md:p-4 mb-3">
      <button className="absolute z-10 top-5 right-5 md:top-6 md:right-6 h-8 w-8 bg-background rounded-full shadow outline-transparent">
        <PlusIcon className="h-4 w-4 m-auto fill-primary" />
      </button>

      <div className="h-32 md:h-48 w-full">
        <Image
          className="h-full w-full object-cover"
          src="/nit.jpg"
          alt={title}
          width={300}
          height={300}
        />
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <h3 className="leading-4 md:leading-6 md:text-lg font-bold text-nowrap text-ellipsis mr-2">
            {title}
          </h3>
          <span>{price} RSD</span>
        </div>
        {/*<div>*/}
        {/*  {modifierResponse.map((modifier) => (*/}
        {/*    <ProductModifier*/}
        {/*      key={`${product.sys.id}-${modifier.sys.id}`}*/}
        {/*      modifier={modifier}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ProductCard;
