"use client";
import { AuthProvider } from "@/hooks/useAuth";
import SignIn from "./SignIn";

export default function SignInWrapper() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
}
