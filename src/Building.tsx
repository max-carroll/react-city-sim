import * as React from "react";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface BuildingProps {
  color?: string;
}

export function Building({ color }: BuildingProps) {
  const [selected, setSelected] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((moveEvent: MouseEvent) => {
    if (ref.current != null) {
      ref.current.style.position = "absolute";
      // perhaps make the click go through this so that we can interact with the board behind
      ref.current.style.top = `${moveEvent.clientY}px`;
      ref.current.style.left = `${moveEvent.clientX}px`;
    }
  }, []);

  const handleSnapToCursor: MouseEventHandler<HTMLDivElement> = (
    clickEvent
  ): void => {
    setSelected((old) => !old);
  };

  useEffect(() => {
    if (selected) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [selected, handleMouseMove]);

  // const action = !selected ? handleSnapToCursor
  return (
    <div
      ref={ref}
      onClick={handleSnapToCursor}
      style={{
        height: 40,
        width: 40,
        border: "1px solid black",
        background: color ?? "red",
      }}
    ></div>
  );
}
