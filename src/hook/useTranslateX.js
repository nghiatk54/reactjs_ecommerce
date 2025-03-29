import { useState, useEffect } from "react";
import useScrollHeadling from "@hook/useScrollHeadling";

function useTranslateX() {
  const { scrollDirection, scrollPosition } = useScrollHeadling();
  const [translateXPosition, setTranslateXPosition] = useState(40);

  const handleTranslateX = () => {
    if (scrollDirection === "down" && scrollPosition >= 1500) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === "up") {
      setTranslateXPosition(
        translateXPosition >= 40 ? 40 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return { translateXPosition };
}

export default useTranslateX;
