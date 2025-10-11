/**
 * Format bot response by cleaning special characters and preparing for rendering
 */
export function formatBotResponse(text: string): string {
  if (!text) return '';
  
  return text
    // Clean up <br> tags - convert to newlines
    .replace(/<br\s*\/?>/gi, '\n')
    // Remove ** bold markers
    .replace(/\*\*/g, '')
    // Remove single * markers
    .replace(/\*/g, '')
    // Remove __ underline markers
    .replace(/__/g, '')
    // Remove single _ markers
    .replace(/_/g, '')
    // Clean up excessive newlines (more than 2 consecutive)
    .replace(/\n{3,}/g, '\n\n')
    // Remove excessive spaces
    .replace(/  +/g, ' ')
    // Clean up common formatting issues
    .replace(/\n\s+\n/g, '\n\n')
    // Trim whitespace
    .trim();
}

/**
 * Parse formatted text into structured elements for rendering
 */
export interface FormattedTextElement {
  type: 'heading' | 'text' | 'separator' | 'list-item';
  content: string;
  level?: number;
}

export function parseFormattedText(text: string): FormattedTextElement[] {
  if (!text) return [];
  
  const lines = text.split('\n');
  const elements: FormattedTextElement[] = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines
    if (!trimmedLine) {
      continue;
    }
    
    // Check for headings (## Heading)
    const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      elements.push({
        type: 'heading',
        level: headingMatch[1].length,
        content: headingMatch[2].trim()
      });
      continue;
    }
    
    // Check for separators (lines with only |, -, or similar)
    if (/^[\|\-\—\–\=]{2,}$/.test(trimmedLine)) {
      elements.push({
        type: 'separator',
        content: ''
      });
      continue;
    }
    
    // Check for list items (starting with |, •, -, or *)
    const listMatch = trimmedLine.match(/^[\|\•\-\*]\s+(.+)$/);
    if (listMatch) {
      elements.push({
        type: 'list-item',
        content: listMatch[1].trim()
      });
      continue;
    }
    
    // Regular text
    elements.push({
      type: 'text',
      content: trimmedLine
    });
  }
  
  return elements;
}
