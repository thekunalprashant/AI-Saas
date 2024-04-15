import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>DashboardPage (Unprotected)</div>
      <Link href={"/sign-in"}>
        <Button>Sign In</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
