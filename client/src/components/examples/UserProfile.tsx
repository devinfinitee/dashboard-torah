import UserProfile from '../UserProfile';

export default function UserProfileExample() {
  return (
    <div className="p-6 bg-background">
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
  );
}