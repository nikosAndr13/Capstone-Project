"use client";
import { AuthProvider } from "@/hooks/useAuth";
import SignUp from "./SignUpUser";

export default function SignUpWrapper() {
  return (
    <>
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </>
  );
}
