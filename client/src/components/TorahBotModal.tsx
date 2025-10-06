import { useState, useRef, useEffect } from "react";
import { X, Star, Download, ArrowRight, Save, Crown, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

interface TorahBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function TorahBotModal({ isOpen, onClose, initialTopic }: TorahBotModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedTopic, setSelectedTopic] = useState(initialTopic || "Choose a Topic");
  const [selectedInteraction, setSelectedInteraction] = useState("Short Q+A");
  const [userMessage, setUserMessage] = useState("What is spiritual meaning of Shabbat candles?");
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showInteractionDropdown, setShowInteractionDropdown] = useState(false);

  const topicOptions = [
    "Choose a Topic",
    "Parashat Vayera",
    "Midrashic Insights", 
    "Talmudic Commentary",
    "Practical Applications",
    "Historical Context"
  ];

  const interactionOptions = [
    "Short Q+A",
    "Deep Dive",
    "Interactive Quiz",
    "Guided Study",
    "Discussion Forum"
  ];

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      // Animate modal in
      gsap.set(modalRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
        .to(modalRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)"
        }, "-=0.2");
    } else if (!isOpen && modalRef.current && overlayRef.current) {
      // Animate modal out
      const tl = gsap.timeline({
        onComplete: () => {
          // Additional cleanup if needed
        }
      });
      tl.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const botResponse = `The lighting of Shabbat candles ushers of holiness peace, symbolizes the light Tora and than the Jewish home. They lit the house, brings, bringing down dowin divine light.
Source: Shulchan Aruch, Orach Chayim 263.`;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-amber-100" />
            </div>
            <h2 className="text-xl font-bold text-amber-900">Torah Bot: Ask Follow-up</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              data-testid="button-save-session"
              onClick={() => console.log('Save session clicked')}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-amber-700 hover:bg-amber-200 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Session
            </button>
            <button
              data-testid="button-close-modal"
              onClick={onClose}
              className="p-2 text-amber-600 hover:bg-amber-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Selection dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Select Focus
              </label>
              <div className="relative">
                <button
                  data-testid="select-focus"
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-amber-300 rounded-lg text-left hover:bg-amber-50 transition-colors"
                  onClick={() => setShowTopicDropdown(!showTopicDropdown)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-600 rounded"></div>
                    <span className="text-amber-900">{selectedTopic}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                </button>
                
                {showTopicDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-amber-300 rounded-lg shadow-lg z-50">
                    {topicOptions.map((option, index) => (
                      <button
                        key={index}
                        data-testid={`topic-option-${index}`}
                        className="w-full px-4 py-2 text-left text-amber-900 hover:bg-amber-50 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => {
                          setSelectedTopic(option);
                          setShowTopicDropdown(false);
                          console.log('Selected topic:', option);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Type of Interaction
              </label>
              <div className="relative">
                <button
                  data-testid="select-interaction"
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-amber-300 rounded-lg text-left hover:bg-amber-50 transition-colors"
                  onClick={() => setShowInteractionDropdown(!showInteractionDropdown)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-600 rounded"></div>
                    <span className="text-amber-900">{selectedInteraction}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                </button>
                
                {showInteractionDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-amber-300 rounded-lg shadow-lg z-50">
                    {interactionOptions.map((option, index) => (
                      <button
                        key={index}
                        data-testid={`interaction-option-${index}`}
                        className="w-full px-4 py-2 text-left text-amber-900 hover:bg-amber-50 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => {
                          setSelectedInteraction(option);
                          setShowInteractionDropdown(false);
                          console.log('Selected interaction:', option);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Conversation Scroll */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Conversation Scroll</h3>
            <div className="bg-amber-200/50 rounded-lg p-4 space-y-4 min-h-[200px]">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-lg max-w-xs">
                  <p className="text-sm">{userMessage}</p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-lg max-w-md border border-amber-300">
                  <p className="text-sm text-amber-900 whitespace-pre-line">{botResponse}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Response Action Bar */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Post-Response Action Bar</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                data-testid="button-bookmark-session-modal"
                onClick={() => console.log('Bookmark session clicked')}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Star className="w-4 h-4" />
                Bookmark Session
              </button>
              
              <button
                data-testid="button-download-pdf-modal"
                onClick={() => console.log('Download PDF clicked')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>

              <button
                data-testid="button-continue-conversation"
                onClick={() => console.log('Continue conversation clicked')}
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}