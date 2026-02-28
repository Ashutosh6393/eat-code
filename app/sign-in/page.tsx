"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const handleSignIn = async (provider: "google" | "github") => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={() => handleSignIn("google")}>
        Continue with Google
      </Button>
      <Button onClick={() => handleSignIn("github")}>
        Continue with GitHub
      </Button>
    </div>
  );
}

