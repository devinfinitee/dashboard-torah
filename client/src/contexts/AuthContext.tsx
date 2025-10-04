import { createContext, useContext, useState, useEffect, ReactNode } from "react";
  
  interface AuthContextType {
    isAuthenticated: boolean;
    login: (usernameOrEmail: string, password: string) => void;
    signup: (firstName: string, lastName: string, email: string, username: string, password: string) => void;
    logout: () => void;
    getUserData: () => { firstName: string; lastName: string; email: string; username: string } | null;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
    // Check if user is already authenticated on mount
    useEffect(() => {
      const authStatus = localStorage.getItem("isAuthenticated");
      if (authStatus === "true") {
        setIsAuthenticated(true);
      }
    }, []);
  
    const login = (usernameOrEmail: string, password: string) => {
      // Accept any credentials as valid
      // Check if the input matches a stored username or email
      const storedUsername = localStorage.getItem("username");
      const storedEmail = localStorage.getItem("email");
      
      if (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
      } else {
        // For demo purposes, still allow login but store the username
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", usernameOrEmail);
      }
    };
  
    const signup = (firstName: string, lastName: string, email: string, username: string, password: string) => {
      // Store user info but DO NOT authenticate yet
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("username", username);
      // Optionally track that a signup occurred (for UX, not auth)
      localStorage.setItem("justSignedUp", "true");
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
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, signup, logout, getUserData }}>
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
