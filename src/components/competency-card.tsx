import { ReactNode } from "react";

interface CompetencyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CompetencyCard({ icon, title, description }: CompetencyCardProps) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#2E68FF] transition-all hover:shadow-lg">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E68FF] to-[#11D1C2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-[#071C2C] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
