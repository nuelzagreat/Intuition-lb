import { ReactNode } from "react";

export function Button({ children, onClick, variant = "default" }: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
}) {
  const styles =
    variant === "default"
      ? "bg-black text-white"
      : "border border-black text-black";
  return (
    <button
      className={rounded-xl px-4 py-2 text-sm ${styles}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

