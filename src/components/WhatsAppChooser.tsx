"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { whatsappContacts } from "../data/contact";

type WhatsAppChooserProps = {
  label: string;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "quiet";
  icon?: ReactNode;
};

export default function WhatsAppChooser({
  label,
  message = "Hola, me gustaría recibir información sobre el Instituto Técnico Rivedu.",
  className = "",
  variant = "primary",
  icon,
}: WhatsAppChooserProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId().replaceAll(":", "");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLSpanElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    } else if (wasOpen.current) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const buttonStyles = {
    primary: "button-primary",
    secondary: "button-secondary",
    quiet: "button-quiet",
  }[variant];

  return (
    <span className={`whatsapp-chooser ${className}`}>
      <button ref={buttonRef} type="button" className={buttonStyles} aria-haspopup="dialog" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((current) => !current)}>
        {icon}
        {label} <span aria-hidden="true">↗</span>
      </button>
      <span ref={panelRef} className={`whatsapp-panel ${open ? "whatsapp-panel--open" : ""}`} id={panelId} role="dialog" aria-label="Elegir contacto de WhatsApp" aria-hidden={!open} inert={!open}>
          <span className="whatsapp-panel__eyebrow">Elija un contacto</span>
          <span className="whatsapp-panel__title">¿Por cuál número desea escribirnos?</span>
          <span className="whatsapp-panel__options">
            {whatsappContacts.map((contact) => (
              <a href={`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`} key={contact.number} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {contact.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </span>
      </span>
    </span>
  );
}
