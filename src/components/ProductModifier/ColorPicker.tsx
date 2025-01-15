"use client";

import { useState } from "react";
import { Color } from "@/clients/types/contentful";

type Props = {
  colors: { name: string; value: string }[];
};
const ColorPicker = ({ colors }: Props) => {
  const [selected, setSelected] = useState<Color>(colors[0]);

  // TODO: onClick
  return (
    <div className="flex items-center gap-0.5">
      <div
        className={`w-4 h-4 rounded-full`}
        style={{ backgroundColor: selected.value }}
      />
      <span className="text-sm">+{colors.length}</span>
    </div>
  );
};

export default ColorPicker;
