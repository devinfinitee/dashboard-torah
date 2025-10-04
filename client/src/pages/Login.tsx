import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Accept any credentials and log in
    login(usernameOrEmail, password);
    // Navigate to dashboard
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-background p-4 py-8 sm:py-12 overflow-y-auto">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-3">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Torah Bot</h1>
          <p className="text-sm text-muted-foreground mt-1">Study Dashboard</p>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="usernameOrEmail">Username or Email</Label>
                <Input
                  id="usernameOrEmail"
                  type="text"
                  placeholder="Enter your username or email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            {/* Signup Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={() => setLocation("/signup")}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          © 2025 Torah Bot. All rights reserved.
        </p>
      </div>
    </div>
  );
}
