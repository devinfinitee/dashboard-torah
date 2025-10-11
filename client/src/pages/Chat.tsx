import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendChatMessage } from "@/lib/api";
import { formatBotResponse } from "@/lib/formatBotResponse";
import FormattedBotMessage from "@/components/FormattedBotMessage";
import { Loader2, Send, User, Bot, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Shalom! 👋 I'm your Torah study assistant. Ask me anything about Jewish Ethics & Mussar, Torah teachings, or any questions you have about your studies.",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Autofocus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Enhanced Header - PWA Style */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate">
              Interactive Torah Bot
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span className="truncate">Ask me anything about Torah</span>
            </p>
          </div>
        </div>
      </div>

      {/* Messages area - Mobile optimized */}
      <div className="flex-1 overflow-auto p-3 sm:p-6 space-y-3 sm:space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex max-w-[90%] sm:max-w-[85%] md:max-w-[75%] items-start gap-2 sm:gap-3`}>
              {/* Avatar - Hidden on mobile for user messages */}
              <div className={`flex-shrink-0 ${m.role === "user" ? "order-2 hidden sm:flex" : "order-1"}`}>
                {m.role === "user" ? (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                )}
              </div>
              
              {/* Message bubble */}
              <div className={`${m.role === "user" ? "order-1" : "order-2"} flex-1 min-w-0`}>
                <Card
                  className={`px-3 sm:px-4 py-2.5 sm:py-3 text-sm leading-relaxed shadow-md border-0 ${
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

      {/* Enhanced Composer - PWA Style */}
      <div className="p-3 sm:p-4 md:p-6 border-t bg-card/50 backdrop-blur-sm sticky bottom-0 safe-area-inset-bottom">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                id="message"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
                className="w-full pr-4 py-4 sm:py-5 md:py-6 text-sm sm:text-base rounded-2xl border-2 focus:border-primary transition-all shadow-sm"
              />
            </div>
            <Button 
              onClick={handleSend} 
              disabled={isSending || input.trim().length === 0}
              className="h-11 sm:h-12 px-4 sm:px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              size="lg"
            >
              {isSending ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span className="hidden sm:inline">Press Enter to send • </span>
            <span>Powered by Torah Bot AI</span>
          </p>
        </div>
      </div>
    </div>
  );
}
