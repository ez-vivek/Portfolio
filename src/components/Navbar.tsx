import { User2 } from 'lucide-react';

export default function Navbar() {

  return (
    <nav className="fixed w-full z-50 px-4 py-3 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 mt-3">
          <User2 className="w-6 h-6 text-white" />
          <span className="text-white text-xl font-medium">Vivek's Portfolio</span>
        </div>
        </div> 
    </nav>
  );
}