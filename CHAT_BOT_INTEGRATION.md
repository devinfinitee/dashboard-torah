# Interactive Chat Bot - Complete Integration

## Overview
Fully functional chat interface integrated with the backend `/api/v1/bot/query/` endpoint for real-time Torah study conversations.

## Backend Integration

### API Endpoint
- **URL**: `POST https://torah-api-2tvn.onrender.com/api/v1/bot/query/`
- **Authentication**: Bearer token (from localStorage)
- **Request Body**:
  ```json
  {
    "message": "user's question",
    "lesson_id": 5
  }
  ```
- **Response**:
  ```json
  {
    "bot_reply": "assistant's response"
  }
  ```

### API Helper (`client/src/lib/api.ts`)
```typescript
export async function sendChatMessage(message: string): Promise<{ reply: string }>
```
- Sends POST request with Bearer token
- Includes `lesson_id: 5` (Jewish Ethics & Mussar)
- Parses `bot_reply` from response
- Logs all requests/responses
- Graceful fallback to mock reply on errors

## UI Components

### Chat Page (`client/src/pages/Chat.tsx`)

#### Features
- ✅ **Input field** with `id="message"` (as specified)
- ✅ **Send button** triggers POST to `/api/v1/bot/query/`
- ✅ **Bearer token** sent with every request
- ✅ **lesson_id: 5** included in request body
- ✅ **bot_reply** rendered as assistant messages
- ✅ **Typing indicator** while waiting for response
- ✅ **Auto-scroll** to latest message
- ✅ **Enter to send** keyboard shortcut
- ✅ **Timestamps** on all messages

#### Enhanced UI Design
- **Gradient backgrounds** for modern look
- **Avatar bubbles** for user and bot
- **Message cards** with shadows and rounded corners
- **Smooth animations** on message appearance
- **Backdrop blur effects** on header and footer
- **Responsive design** for mobile and desktop
- **Color-coded messages**:
  - User: Blue gradient
  - Bot: Primary color gradient
  - Typing: Muted with pulse animation

#### Visual Elements
- **Header**: 
  - Bot avatar with gradient background
  - Title: "Interactive Torah Bot"
  - Subtitle: "Ask me anything about Jewish Ethics & Mussar"
  - Sparkles icon for visual appeal

- **Message Area**:
  - Gradient background (background to muted)
  - Spacious padding (4-6 units)
  - Max width constraints for readability
  - Smooth fade-in animations

- **Input Composer**:
  - Large rounded input field (rounded-2xl)
  - Prominent send button with shadow
  - Helper text with sparkles icon
  - Disabled state when sending

## Routing & Navigation

### Route Setup (`client/src/App.tsx`)
- Protected route at `/chat`
- Requires authentication
- Accessible from sidebar

### Sidebar Link (`client/src/components/Sidebar.tsx`)
- Menu item: "Interactive Bot"
- Icon: Bot (from lucide-react)
- Position: Second item after Main Dashboard

## User Flow

1. **Access**: Click "Interactive Bot" in sidebar or navigate to `/chat`
2. **Welcome**: See greeting message from bot
3. **Type**: Enter question in input field (`id="message"`)
4. **Send**: Click Send button or press Enter
5. **Wait**: See typing indicator with pulse animation
6. **Receive**: Bot's reply appears with timestamp
7. **Continue**: Conversation history maintained in session

## Technical Implementation

### State Management
```typescript
const [messages, setMessages] = useState<ChatMessage[]>([...])
const [input, setInput] = useState("")
const [isSending, setIsSending] = useState(false)
```

### Message Flow
1. User types message → stored in `input` state
2. Click Send → `handleSend()` triggered
3. Add user message to `messages` array
4. Add typing indicator
5. Call `sendChatMessage(message)` API
6. Replace typing indicator with `bot_reply`
7. Auto-scroll to bottom

### Error Handling
- Network errors → fallback to mock reply
- API errors → fallback to mock reply
- All errors logged to console
- User sees response even if backend fails

## Styling Highlights

### Colors
- **User messages**: `from-primary to-primary/90`
- **Bot messages**: `bg-card/80` with backdrop blur
- **Avatars**: Gradient backgrounds with shadows
- **Input**: `border-2` with `focus:border-primary`

### Animations
- **Message entry**: `animate-in fade-in slide-in-from-bottom-2`
- **Typing indicator**: `animate-pulse`
- **Send button**: `hover:shadow-xl transition-all`

### Responsive
- Mobile: 85% max width for messages
- Desktop: 75% max width for messages
- Padding adjusts: `p-4 sm:p-6`

## Testing Checklist

- [ ] Navigate to `/chat` from sidebar
- [ ] See welcome message from bot
- [ ] Type message in input (`id="message"`)
- [ ] Click Send button
- [ ] Observe typing indicator
- [ ] See bot reply rendered
- [ ] Check console for API logs
- [ ] Test Enter key to send
- [ ] Verify timestamps display
- [ ] Test on mobile viewport
- [ ] Verify Bearer token in request headers
- [ ] Confirm `lesson_id: 5` in request body
- [ ] Check `bot_reply` field parsed correctly

## Console Logs to Expect

```
[API] Request: { method: 'POST', url: '.../api/v1/bot/query/', ... }
[API] Response: { status: 200, ok: true, payload: { bot_reply: '...' } }
[API] sendChatMessage success: { bot_reply: '...' }
```

## Future Enhancements (Optional)

- [ ] Save conversation history to backend
- [ ] Support for markdown formatting in bot replies
- [ ] File/image upload capability
- [ ] Voice input option
- [ ] Export conversation as PDF
- [ ] Multi-topic support (dynamic lesson_id)
- [ ] Suggested questions/prompts
- [ ] Conversation bookmarking
