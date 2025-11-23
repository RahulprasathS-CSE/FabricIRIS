import { ReactNode } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2E68FF] to-[#11D1C2] flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#071C2C] flex items-center justify-center">
          <span className="text-white text-sm">{number}</span>
        </div>
      </div>
      <h4 className="text-[#071C2C] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm max-w-xs">{description}</p>
    </div>
  );
}
