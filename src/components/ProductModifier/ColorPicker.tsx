"use client";

import { useState } from "react";

type Props = {
  colors: string[];
};

const ColorPicker = ({ colors }: Props) => {
  const [selected, setSelected] = useState<string>(colors[0]);

  // TODO: onClick, color map
  return (
    <div className="flex items-center gap-0.5">
      <div
        className={`w-4 h-4 rounded-full`}
        style={{ backgroundColor: "red" }}
      />
      <span className="text-sm">+{colors.length}</span>
    </div>
  );
};

export default ColorPicker;
