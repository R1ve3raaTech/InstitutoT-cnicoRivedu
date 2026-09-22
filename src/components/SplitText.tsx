"use client";

import type { CSSProperties } from "react";

type SplitTextProps = {
  text: string;
  highlight?: string;
  className?: string;
};

/** Accessible, dependency-free adaptation of React Bits Split Text. */
export default function SplitText({ text, highlight, className = "" }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <h1 className={`split-text split-text--ready ${className}`.trim()}>
      {words.map((word, index) => {
        const isHighlighted = highlight === word;
        return (
          <span key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <span className={`split-text__word ${isHighlighted ? "split-text__word--highlight" : ""}`} style={{ "--split-index": index } as CSSProperties}>{word}</span>
          </span>
        );
      })}
    </h1>
  );
}
