import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
      setIsScrolling(true);

      // Opcional: "debounce" para saber si el usuario dejó de scrollear
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { scrollY, isScrolling };
}
