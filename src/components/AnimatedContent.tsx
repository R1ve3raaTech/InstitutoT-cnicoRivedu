"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimatedContentProps = {
  children: ReactNode;
  className?: string;
};

/** Accessible local adaptation of React Bits Animated Content. */
export default function AnimatedContent({ children, className = "" }: AnimatedContentProps) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`animated-content ${visible ? "animated-content--visible" : ""} ${className}`}>{children}</div>;
}
