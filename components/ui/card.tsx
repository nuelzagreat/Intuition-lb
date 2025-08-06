import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border bg-white shadow p-2">{children}</div>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={text-sm ${className}}>{children}</div>;
}
