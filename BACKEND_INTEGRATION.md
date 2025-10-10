# Backend Integration Summary

## Overview
Successfully integrated the Torah API backend (`https://torah-api-2tvn.onrender.com`) with the frontend application.

## Changes Made

### 1. API Service Module (`client/src/lib/api.ts`)
Created a centralized API service that handles:
- **User Registration** (`POST /auth/register/`)
  - Sends: `{firstname, lastname, username, email, password, password2}`
  - Returns: Authentication response
  
- **User Login** (`POST /auth/login/`)
  - Sends: `{username, email, password}`
  - Returns: `{access, refresh}` tokens
  
- **Fetch Lessons** (`GET /api/v1/lessons/`)
  - Requires: Bearer token authentication
  - Returns: Array of 12 lesson objects with `{id, name, ...}`

- **Token Management**
  - `storeTokens()` - Saves access and refresh tokens to localStorage
  - `getAccessToken()` - Retrieves stored access token
  - `clearTokens()` - Removes tokens on logout

### 2. Authentication Context (`client/src/contexts/AuthContext.tsx`)
Updated to use real backend authentication:
- **Async login/signup** - Now makes actual API calls
- **Token storage** - Stores JWT tokens from backend
- **Error handling** - Provides error messages from API
- **User data persistence** - Stores username and other user info

### 3. Signup Page (`client/src/pages/Signup.tsx`)
Enhanced with:
- **Password confirmation field** - Validates password2 matches password
- **Loading states** - Shows "Creating Account..." during API call
- **Error display** - Shows API error messages with alert styling
- **Async form submission** - Waits for API response before redirecting
- **Redirect to login** - After successful signup

### 4. Login Page (`client/src/pages/Login.tsx`)
Enhanced with:
- **Loading states** - Shows "Signing In..." during API call
- **Error display** - Shows authentication errors
- **Async form submission** - Waits for API response
- **Token storage** - Saves access token on successful login
- **Redirect to dashboard** - After successful authentication

### 5. Dashboard (`client/src/pages/Dashboard.tsx`)
Integrated lessons API:
- **Username display** - Shows "Welcome back, {username}!"
- **Lessons fetching** - Calls `/api/v1/lessons/` on load
- **Lesson mapping** - Maps 12 lesson IDs to display names:
  - ID 1: Talmud
  - ID 2: Weekly Torah Portion
  - ID 3: Mishnah
  - ID 4: Gemara
  - ID 5: Rashi Commentary
  - ID 6: Tosafot
  - ID 7: Halacha
  - ID 8: Kabbalah
  - ID 9: Mussar
  - ID 10: Tanakh
  - ID 11: Midrash
  - ID 12: Pirkei Avot
- **Dynamic lesson cards** - Displays lessons from API
- **Loading states** - Shows skeleton loaders while fetching

### 6. Lessons Hook (`client/src/hooks/useLessons.ts`)
Created React Query hook for lessons:
- Fetches lessons from API
- Caches for 5 minutes
- Requires authentication token
- Automatic retry on failure

## Authentication Flow

### Signup Flow
1. User fills signup form with firstname, lastname, username, email, password, password2
2. Frontend validates passwords match
3. POST request to `/auth/register/`
4. On success: Store user data, redirect to login page
5. On error: Display error message

### Login Flow
1. User enters username/email and password
2. POST request to `/auth/login/`
3. Backend returns `{access, refresh}` tokens
4. Frontend stores tokens in localStorage
5. Redirect to dashboard
6. On error: Display error message

### Dashboard Flow
1. Check for access token on mount
2. If authenticated, fetch lessons with GET `/api/v1/lessons/`
3. Display username from stored user data
4. Map lesson IDs to display names
5. Render lesson cards with API data

## Token Management
- **Access Token**: Stored in localStorage as `accessToken`
- **Refresh Token**: Stored in localStorage as `refreshToken`
- **Authorization Header**: `Bearer {accessToken}` for authenticated requests
- **Logout**: Clears all tokens and user data

## Error Handling
- Network errors caught and displayed to user
- API error messages shown in alert boxes
- Loading states prevent multiple submissions
- Form fields disabled during API calls

## Testing the Integration
1. Start the development server
2. Navigate to signup page
3. Create a new account
4. Login with credentials
5. Dashboard should display username and lessons from API

## Notes
- The API base URL is: `https://torah-api-2tvn.onrender.com`
- All authenticated requests include Bearer token
- Lesson mapping can be adjusted based on actual API response
- Error messages are user-friendly and actionable
