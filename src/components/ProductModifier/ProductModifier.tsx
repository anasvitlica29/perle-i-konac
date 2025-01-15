import { Modifier } from "@/clients/types/contentful";
import ColorPicker from "@/components/ProductModifier/ColorPicker";

type Props = {
  modifier: Modifier;
};
const ProductModifier = ({ modifier }: Props) => {
  const name = modifier.name;

  switch (name) {
    case "Color":
      return (
        <ColorPicker
          key={`${modifier.sys.id}-${name}`}
          colors={modifier.valuesCollection.items}
        />
      );
    default:
      return null;
  }
};

export default ProductModifier;
