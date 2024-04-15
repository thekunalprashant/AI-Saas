
import { Heading } from "@/components/heading";
import { CheckSubscription } from "@/lib/subscription";
import { SettingsIcon } from "lucide-react";

const Settings = async () => {
  const isPro = await CheckSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan."}
        </div>
      </div>
    </div>
  );
};

export default Settings;
