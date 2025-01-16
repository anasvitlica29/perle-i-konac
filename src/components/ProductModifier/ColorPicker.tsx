"use client";

import { useState } from "react";
import colorMap from "@/helpers/colorMap";

type Props = {
  colors: string[];
};

const ColorPicker = ({ colors }: Props) => {
  const [selected, setSelected] = useState<string>(colors[0]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const openColorPicker = () => {
    setPopupVisible(true);
  };

  const changeColor = (color: string) => {
    setSelected(color);
    setPopupVisible(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-0.5"
        onClick={openColorPicker}
        role="button"
      >
        <div
          className={`w-4 h-4 rounded-full`}
          style={{ backgroundColor: colorMap.get(selected) || "white" }}
        />
        <span className="text-sm">+{colors.length - 1}</span>
      </div>
      <div
        className={`${popupVisible ? "visible" : "invisible"} z-20 absolute top-0 left-0 bg-background shadow rounded flex flex-col gap-2 p-3`}
      >
        {colors.map((color, index) =>
          index !== 0 ? (
            <div
              key={`color-${color}`}
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => changeColor(color)}
            >
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: colorMap.get(color) || "white" }}
              />
              <span>{color}</span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
