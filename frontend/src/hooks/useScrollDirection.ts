import { useEffect, useRef, useState } from "react";
import { ScrollDirections } from "../types/clientTypes";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirections>("");
  const lastScrollTopRef = useRef(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTopRef.current) {
      setScrollDirection("down");
    } else if (scrollTop < lastScrollTopRef.current) {
      setScrollDirection("up");
    }

    lastScrollTopRef.current = scrollTop <= 0 ? 0 : scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};
