import { parseFormattedText, type FormattedTextElement } from "@/lib/formatBotResponse";

interface FormattedBotMessageProps {
  content: string;
}

export default function FormattedBotMessage({ content }: FormattedBotMessageProps) {
  const elements = parseFormattedText(content);

  const renderElement = (element: FormattedTextElement, index: number) => {
    switch (element.type) {
      case 'heading':
        const HeadingTag = `h${Math.min(element.level || 2, 6)}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-lg font-bold mt-4 mb-3 text-primary',
          2: 'text-base font-bold mt-3 mb-2 text-foreground',
          3: 'text-sm font-semibold mt-2 mb-1.5',
        }[element.level || 2] || 'text-sm font-semibold mt-2 mb-1.5';
        
        return (
          <HeadingTag key={index} className={headingClasses}>
            {element.content}
          </HeadingTag>
        );

      case 'separator':
        return (
          <hr key={index} className="my-4 border-t-2 border-border/30" />
        );

      case 'list-item':
        return (
          <div key={index} className="flex gap-2.5 my-2 pl-1">
            <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
            <span className="flex-1 leading-relaxed">{element.content}</span>
          </div>
        );

      case 'text':
      default:
        // Skip empty text elements
        if (!element.content.trim()) return null;
        
        return (
          <p key={index} className="my-2 leading-relaxed">
            {element.content}
          </p>
        );
    }
  };

  return (
    <div className="space-y-1">
      {elements.map((element, index) => renderElement(element, index))}
    </div>
  );
}
