"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-primary shadow-lg shadow-primary/10 backdrop-blur transition-all duration-300 hover:border-white/70 hover:bg-[#10251b]/60 hover:text-primary dark:border-white/20 dark:bg-[#10251b]/90 dark:text-white dark:hover:border-primary dark:hover:bg-primary dark:hover:text-primary-foreground ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}