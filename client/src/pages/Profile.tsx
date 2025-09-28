import UserProfile from "@/components/UserProfile";
import { ChevronDown } from "lucide-react";

export default function Profile() {
  const billingItems = [
    "Billing History",
    "Ccyned", 
    "Invoices",
    "Invoices",
    "Payment Methods"
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Details */}
        <div className="lg:col-span-2">
          <UserProfile
            name="Chaim Cohen"
            email="chaim.cohen@email.com"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
            totalSessions={120}
            currentPlan="Premium (Monthly)"
            sessionsUsed={7}
            sessionsLimit={20}
          />
        </div>

        {/* Right Column - Additional Info */}
        <div className="space-y-6">
          {/* Midrass Summary */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Midrass Summary</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-slate-600 rounded"></div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Sessions Conqtat Hiisen foundations</p>
                <div className="mt-2 w-4 h-4 bg-muted rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Upgrade Plan */}
          <button
            data-testid="button-upgrade-plan"
            onClick={() => console.log('Upgrade plan clicked')}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
          >
            Upgrade Plan
          </button>

          {/* Billing & Subscription */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Blinge & Sbscription</h3>
            
            <div className="space-y-3">
              {billingItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-card-foreground">{item}</span>
                  </div>
                  <button
                    data-testid={`button-expand-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => console.log(`${item} expanded`)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}