# Login & Signup Form Updates

## Changes Made

### Login Page (`client/src/pages/Login.tsx`)

#### 1. Separate Username and Email Fields
- **Before**: Single field "Username or Email"
- **After**: Two separate fields:
  - **Username** field (id: `username`)
  - **Email** field (id: `email`, type: `email`)
- Both fields are required for login

#### 2. Password Visibility Toggle
- Added Eye/EyeOff icon button to toggle password visibility
- Button positioned absolutely on the right side of the password input
- Click to toggle between showing plain text and masked password
- Icons from `lucide-react`: `Eye` and `EyeOff`

### Signup Page (`client/src/pages/Signup.tsx`)

#### 1. Password Visibility Toggles
- **Password field**: Toggle button with Eye/EyeOff icon
- **Confirm Password field**: Separate toggle button with Eye/EyeOff icon
- Each password field has independent visibility control
- Buttons positioned absolutely on the right side of inputs

## Technical Details

### State Management
**Login Page:**
```typescript
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [showPassword, setShowPassword] = useState(false);
```

**Signup Page:**
```typescript
const [showPassword, setShowPassword] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);
```

### Toggle Button Implementation
```tsx
<div className="relative">
  <Input
    type={showPassword ? "text" : "password"}
    className="w-full pr-10"
    // ... other props
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
  >
    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
  </button>
</div>
```

### Styling
- Input fields have `pr-10` (padding-right) to make room for the toggle button
- Toggle button uses absolute positioning
- Hover effect changes icon color from muted to foreground
- Smooth transition on color change
- Icons are 16x16px (`w-4 h-4`)

## User Experience

### Login Flow
1. User enters username in first field
2. User enters email in second field
3. User enters password (can toggle visibility)
4. Click "Sign In" to submit

### Signup Flow
1. User fills all fields (firstname, lastname, email, username)
2. User creates password (can toggle visibility)
3. User confirms password (can toggle visibility independently)
4. Passwords are validated to match before submission
5. Click "Create Account" to submit

## Icons Used
- `Eye`: Show password (when password is hidden)
- `EyeOff`: Hide password (when password is visible)
- Both from `lucide-react` package

## Accessibility
- Toggle buttons have `type="button"` to prevent form submission
- Buttons are disabled when form is loading
- Clear visual feedback on hover
- Password fields maintain proper input type for security
