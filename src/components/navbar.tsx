import { Eye } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#071C2C] rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#071C2C]">FabricIRIS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#competencies" className="text-gray-700 hover:text-[#2E68FF] transition-colors">
              Technology
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2E68FF] transition-colors">
              How It Works
            </a>
            <a href="#industries" className="text-gray-700 hover:text-[#2E68FF] transition-colors">
              Industries
            </a>
            <a href="#specs" className="text-gray-700 hover:text-[#2E68FF] transition-colors">
              Specifications
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-[#071C2C]">
              Contact Sales
            </Button>
            <Button className="bg-[#2E68FF] hover:bg-[#2E68FF]/90">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
