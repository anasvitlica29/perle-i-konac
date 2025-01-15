import { Modifier } from "@/clients/types/contentful";

type Props = {
  modifier: Modifier;
};
const ProductModifier = ({ modifier }: Props) => {
  const name = modifier.name;

  switch (name) {
    case "Color":
      return (
        <div className="flex flex-row justify-center items-center p-3">
          {modifier.valuesCollection.items.map((value) => (
            <div key={`${modifier.sys.id}-${value.name}`}>{value.name}</div>
          ))}
          {/*<div className="rounded-full bg-secondary w-2 h-2 shadow" />*/}
          {/*<div className="rounded-full bg-secondary-dark w-2 h-2 -translate-x-[2px]" />*/}
          {/*<div className="rounded-full bg-primary-light w-2 h-2 -translate-x-[4px]" />*/}
          {/*<div className="rounded-full bg-primary w-3 h-3 -translate-x-[7px]" />*/}
        </div>
      );
    default:
      return null;
  }
};

export default ProductModifier;
