"use client";
import { useModal } from "../contexts/ModalContext";

export default function Placeholder({ children, message = "🚧 Feature coming soon!", icon = "🚧" }) {
  const { triggerModal } = useModal();

  return (
    <div
      onClick={() => triggerModal(message, icon)}
      className="inline-block cursor-pointer"
    >
      {children}
    </div>
  );
}
