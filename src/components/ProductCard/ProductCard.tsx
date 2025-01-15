import { Product } from "@/clients/types/contentful";
import Image from "next/image";
import { PlusIcon } from "@/vectors";

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  const { title, price } = product;

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
          <div className="flex flex-row justify-center items-center p-3">
            <div className="rounded-full bg-secondary w-2 h-2 shadow" />
            <div className="rounded-full bg-secondary-dark w-2 h-2 -translate-x-[2px]" />
            <div className="rounded-full bg-primary-light w-2 h-2 -translate-x-[4px]" />
            <div className="rounded-full bg-primary w-3 h-3 -translate-x-[7px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
