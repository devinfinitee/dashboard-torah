import { useState } from "react";
import TorahBotModal from '../TorahBotModal';

export default function TorahBotModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-background">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
      >
        Open Torah Bot Modal
      </button>
      
      <TorahBotModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
}