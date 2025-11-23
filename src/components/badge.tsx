import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-[#2E68FF]/10 text-[#2E68FF] border-[#2E68FF]/20",
    secondary: "bg-[#071C2C]/10 text-[#071C2C] border-[#071C2C]/20",
    accent: "bg-[#11D1C2]/10 text-[#11D1C2] border-[#11D1C2]/20"
  };

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${variants[variant]}`}>
      <span className="text-sm">{children}</span>
    </div>
  );
}
