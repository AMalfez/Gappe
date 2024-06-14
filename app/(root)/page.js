"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-4/6 bg-neutral-950">
      <p className="text-black dark:text-white">Hi there p</p>
      <UserButton afterSignOutUrl="/">
        <p>User</p>
      </UserButton>
      <SignedIn>
        <SignOutButton redirectUrl="/sign-in">
          <div>Signout</div>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          Signin
        </SignInButton>
      </SignedOut>

    </div>
  );
}
