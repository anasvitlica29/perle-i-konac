"use client";

import { useState } from "react";
import { Color } from "@/clients/types/contentful";

type Props = {
  colors: { name: string; value: string }[];
};
const ColorPicker = ({ colors }: Props) => {
  const [selected, setSelected] = useState<Color>(colors[0]);

  return (
    <div className="flex flex-row-reverse items-center">
      {colors.map((c) => (
        <div
          key={c.name}
          className={`border ${selected.value === c.value ? "border-primary" : "border-transparent"} w-5 h-5 rounded-full`}
          style={{ backgroundColor: c.value }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
