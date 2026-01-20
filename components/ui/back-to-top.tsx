"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-[--color-accent] p-3 text-white shadow-lg transition-all hover:bg-[--color-accent-hover] hover:shadow-xl"
      aria-label="Back to top"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
