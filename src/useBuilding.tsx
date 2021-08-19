import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const useBuilding = () => {
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
      ref.current?.cloneNode();
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [selected, handleMouseMove]);

  return { ref, handleSnapToCursor };
};
