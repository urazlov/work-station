import { useBackground } from "@/app/store";
import clsx from "clsx";
import "./BackgroundSelect.scss";
import { useState } from "react";

export const BackgroundSelect = () => {
  const { background, setBackground } = useBackground();

  const [isOpened, setIsOpened] = useState(false);

  const backgroundItems = [
    {
      content: "Village",
      value: "village",
    },
    {
      content: "Waterfall",
      value: "waterfall",
    },
    {
      content: "City",
      value: "city",
    },
  ];

  const handleChooseBackgound = (value: string) => {
    setBackground(value);
    setIsOpened(false);
  };

  return (
    <div className="background-select">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className={clsx("background-select-button", isOpened ? "active" : "")}
      >
        Choose Background
      </button>
      {isOpened ? (
        <div className="background-select-buttons">
          {backgroundItems.map(item => {
            return (
              <button
                className={background === item.value ? "active" : ""}
                onClick={() => handleChooseBackgound(item.value)}
                key={item.value}
              >
                {item.content}
              </button>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
