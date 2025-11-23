import { ReactNode } from "react";

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function IndustryCard({ icon, title, description }: IndustryCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#11D1C2] transition-all group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#11D1C2]/10 transition-colors">
        {icon}
      </div>
      <h4 className="text-[#071C2C] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
