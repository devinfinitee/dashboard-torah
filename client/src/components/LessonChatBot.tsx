import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot, Loader2, Sparkles } from "lucide-react";
import { sendChatMessage } from "@/lib/api";
import { formatBotResponse } from "@/lib/formatBotResponse";
import FormattedBotMessage from "@/components/FormattedBotMessage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface LessonChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
}

export default function LessonChatBot({ isOpen, onClose, lessonTitle }: LessonChatBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: `Shalom! 👋 I'm here to help you with ${lessonTitle}. Ask me anything about this topic!`,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Reset messages when lesson changes
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Shalom! 👋 I'm here to help you with ${lessonTitle}. Ask me anything about this topic!`,
          timestamp: Date.now(),
        },
      ]);
      setInput("");
      // Autofocus input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, lessonTitle]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsSending(true);

    // Add typing indicator
    const typingId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      {
        id: typingId,
        role: "assistant",
        content: "typing...",
        timestamp: Date.now(),
      },
    ]);

    try {
      const { reply } = await sendChatMessage(trimmed);
      const formattedReply = formatBotResponse(reply);
      
      // Replace typing indicator with real reply
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? { ...m, content: formattedReply }
            : m
        )
      );
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? { ...m, content: "Sorry, I couldn't get a response. Please try again." }
            : m
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-background rounded-xl shadow-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b bg-card/50 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  Torah Bot
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {lessonTitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 space-y-4 bg-gradient-to-b from-background to-muted/20">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`flex max-w-[85%] sm:max-w-[75%] items-start gap-3`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 ${m.role === "user" ? "order-2" : "order-1"}`}>
                  {m.role === "user" ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                
                {/* Message bubble */}
                <div className={`${m.role === "user" ? "order-1" : "order-2"}`}>
                  <Card
                    className={`px-4 py-3 text-sm leading-relaxed shadow-md border-0 ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
                        : m.content === "typing..."
                        ? "bg-muted/50 text-muted-foreground italic animate-pulse"
                        : "bg-card/80 backdrop-blur-sm"
                    }`}
                  >
                    {m.role === "assistant" && m.content !== "typing..." ? (
                      <FormattedBotMessage content={m.content} />
                    ) : (
                      <p className="whitespace-pre-wrap break-words">{m.content}</p>
                    )}
                  </Card>
                  <p className="text-xs text-muted-foreground mt-1 px-1">
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className="p-4 sm:p-6 border-t bg-card/50 backdrop-blur-sm flex-shrink-0">
          <div className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                placeholder="Ask a question about this lesson..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
                className="w-full pr-4 py-5 sm:py-6 text-sm sm:text-base rounded-2xl border-2 focus:border-primary transition-all shadow-sm"
              />
            </div>
            <Button 
              onClick={handleSend} 
              disabled={isSending || input.trim().length === 0}
              className="h-11 sm:h-12 px-4 sm:px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              size="lg"
            >
              {isSending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3" />
            Press Enter to send
          </p>
        </div>
      </div>
    </div>
  );
}
