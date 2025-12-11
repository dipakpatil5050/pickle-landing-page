import { useEffect, useRef } from "react";

/**
 * Hook to add scroll-based reveal animations to elements
 * Usage: const ref = useScrollReveal()
 *        <div ref={ref} data-scroll data-scroll-speed="2">Content</div>
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Add reveal animation class when element comes into view
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-reveal");
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return ref;
}

/**
 * Hook for parallax scrolling effect
 * Usage: const ref = useParallax(0.5)
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const yPos = window.scrollY * speed;
      ref.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
