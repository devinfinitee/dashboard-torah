import { useState } from "react";
import Sidebar from '../Sidebar';

export default function SidebarExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen bg-background">
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <div className="pl-20 p-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
}