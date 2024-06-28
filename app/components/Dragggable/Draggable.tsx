import "./Draggable.scss";
import { useState, useEffect } from "react";
import Draggable, { DraggableData } from "react-draggable";
import clsx from "clsx";
import React from "react";

let GLOBAL_Z = 50;

export const DWrapper = ({
  children,
  toggleHook,
  defaultX,
  defaultY,
  setPosition,
  handle,
}: {
  children: React.JSX.Element;
  toggleHook: boolean;
  defaultX: number;
  defaultY: number;
  setPosition: any;
  handle?: string;
}) => {
  const [z, setZIndex] = useState(0);
  const nodeRef = React.useRef(null);
  

  const changePosition = (data: DraggableData) => {
    setPosition(data.x, data.y);
  };

  const getFocus = () => {
    setZIndex(++GLOBAL_Z);
  };

  useEffect(() => {
    if (toggleHook) {
      setZIndex(++GLOBAL_Z);
    }
  }, [toggleHook]);

  return (
    <>
      <Draggable
        position={{ x: defaultX, y: defaultY }}
        onMouseDown={() => getFocus()}
        onStop={(_, data) => changePosition(data)}
        handle={handle}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} style={{ zIndex: z, position: "absolute" }} onMouseDown={() => getFocus()}>
          <div className={clsx(toggleHook ? "visible" : "pointer-events-none hidden")}>{children}</div>
        </div>
      </Draggable>
    </>
  );
};
