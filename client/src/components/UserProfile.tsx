import { Mail, Settings, Award } from "lucide-react";

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
  totalSessions?: number;
  currentPlan?: string;
  sessionsUsed?: number;
  sessionsLimit?: number;
}

export default function UserProfile({
  name,
  email,
  avatar,
  totalSessions = 120,
  currentPlan = "Premium (Monthly)",
  sessionsUsed = 7,
  sessionsLimit = 20
}: UserProfileProps) {
  const progressPercentage = (sessionsUsed / sessionsLimit) * 100;

  return (
    <div className="space-y-6">
      {/* Profile header */}
      <div 
        data-testid="profile-header"
        className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-6 text-white"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Mail className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Profile & Account</h2>
            <p className="text-amber-200 text-sm">(Parashat HaShawua)</p>
          </div>
          <div className="ml-auto p-2 bg-white/20 rounded-lg">
            <Award className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Profile overview */}
      <div className="bg-card rounded-lg p-6 border border-card-border">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Profile Overview</h3>
          <button 
            data-testid="button-profile-settings"
            onClick={() => console.log('Profile settings clicked')}
            className="p-1 text-muted-foreground hover:text-foreground"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-card-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{email}</p>
          </div>
        </div>
      </div>

      {/* Sessions summary */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <h4 className="text-lg font-semibold mb-2">Total Sessions Completed: {totalSessions}</h4>
      </div>

      {/* Usage & Subscription */}
      <div className="bg-card rounded-lg p-6 border border-card-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Usage & Subscription</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-amber-600 rounded"></div>
              </div>
              <span className="text-sm font-medium">{sessionsUsed}/{sessionsLimit} sessions used this month</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="h-2 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing & Management */}
      <div className="bg-card rounded-lg p-6 border border-card-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Billing & Management</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Current Plan: {currentPlan}</p>
            <button
              data-testid="button-cancel-plan"
              onClick={() => console.log('Cancel plan clicked')}
              className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm font-medium hover:bg-destructive/90"
            >
              Cancel Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}