
"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("🚧 Feature coming soon!");
  const [icon, setIcon] = useState("🚧");

  const triggerModal = (msg, icn = "🚧") => {
    setMessage(msg || "🚧 Feature coming soon!");
    setIcon(icn);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, message, icon, triggerModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
