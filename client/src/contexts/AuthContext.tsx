import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { loginUser, registerUser, storeTokens, clearTokens, getAccessToken, type SignupData, type LoginData } from "@/lib/api";
  
  interface AuthContextType {
    isAuthenticated: boolean;
    login: (usernameOrEmail: string, password: string) => Promise<void>;
    signup: (firstName: string, lastName: string, email: string, username: string, password: string, password2: string) => Promise<void>;
    logout: () => void;
    getUserData: () => { firstName: string; lastName: string; email: string; username: string } | null;
    error: string | null;
    clearError: () => void;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    // Check if user is already authenticated on mount
    useEffect(() => {
      const token = getAccessToken();
      if (token) {
        setIsAuthenticated(true);
      }
    }, []);
  
    const login = async (usernameOrEmail: string, password: string) => {
      try {
        setError(null);
        const loginData: LoginData = {
          username: usernameOrEmail,
          email: usernameOrEmail,
          password: password,
        };
        
        const response = await loginUser(loginData);
        
        // Store tokens
        storeTokens(response.access, response.refresh);
        
        // Store user data
        if (response.user) {
          localStorage.setItem("username", response.user.username);
          localStorage.setItem("email", response.user.email);
          if (response.user.firstname) {
            localStorage.setItem("firstName", response.user.firstname);
          }
          if (response.user.lastname) {
            localStorage.setItem("lastName", response.user.lastname);
          }
        } else {
          // Fallback if user data not in response
          localStorage.setItem("username", usernameOrEmail);
        }
        
        setIsAuthenticated(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Login failed');
        throw err;
      }
    };
  
    const signup = async (firstName: string, lastName: string, email: string, username: string, password: string, password2: string) => {
      try {
        setError(null);
        const signupData: SignupData = {
          firstname: firstName,
          lastname: lastName,
          username: username,
          email: email,
          password: password,
          password2: password2,
        };
        
        const response = await registerUser(signupData);
        
        // Store tokens if returned by backend
        if (response.access && response.refresh) {
          storeTokens(response.access, response.refresh);
          setIsAuthenticated(true);
        }
        
        // Store user info
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Signup failed');
        throw err;
      }
    };
  
    const getUserData = () => {
      const firstName = localStorage.getItem("firstName");
      const lastName = localStorage.getItem("lastName");
      const email = localStorage.getItem("email");
      const username = localStorage.getItem("username");
      
      if (firstName && lastName && email && username) {
        return { firstName, lastName, email, username };
      }
      return null;
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      clearTokens();
      localStorage.removeItem("username");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
    };
    
    const clearError = () => {
      setError(null);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, signup, logout, getUserData, error, clearError }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }
