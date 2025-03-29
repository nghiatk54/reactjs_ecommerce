import { useEffect, useRef, useState } from "react";
function useScrollHeadling() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    previousScrollPosition.current = currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  return { scrollDirection, scrollPosition };
}

export default useScrollHeadling;
