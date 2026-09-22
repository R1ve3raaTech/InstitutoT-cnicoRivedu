"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
};

export default function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span className="copy-control">
      <button type="button" className="copy-button" onClick={handleCopy}>
        {label}
      </button>
      {copied && <span className="copy-status" role="status" aria-live="polite">Copiado</span>}
    </span>
  );
}
