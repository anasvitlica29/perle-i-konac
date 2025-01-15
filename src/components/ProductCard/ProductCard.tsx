import { Product } from "@/clients/types/contentful";
import Image from "next/image";
import { PlusIcon } from "@/vectors";
import { ProductModifier } from "@/components";
import { getModifiersByIds } from "@/clients/contentfulClient";

type Props = {
  product: Product;
};
const ProductCard = async ({ product }: Props) => {
  const { title, price, modifiersCollection } = product;

  const modifiers = modifiersCollection.items;

  const modifierIds = modifiers
    .filter((m, i, array) => array.indexOf(m) === i)
    .map((m) => m.sys.id);
  const modifierResponse = await getModifiersByIds(modifierIds);

  return (
    <div className="relative bg-background rounded shadow-lg flex-1 p-4">
      <button className="absolute z-10 top-6 right-6 h-8 w-8 bg-background rounded-full shadow outline-transparent">
        <PlusIcon className="h-4 w-4 m-auto fill-primary" />
      </button>

      <div className="h-48 w-full">
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
          <h3 className="text-lg font-bold">{title}</h3>
          <span>{price} RSD</span>
        </div>
        <div>
          {modifierResponse.map((modifier) => (
            <ProductModifier
              key={`${product.sys.id}-${modifier.sys.id}`}
              modifier={modifier}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
