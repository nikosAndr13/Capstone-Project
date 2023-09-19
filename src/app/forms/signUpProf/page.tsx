import { AuthProvider } from "@/hooks/useAuth";
import SignUpProfessional from "./clientComponent";
import { specializations } from "@/app/page";

export default async function Page() {
  const specialization = await specializations();
  return (
    <>
      <AuthProvider>
        <SignUpProfessional specialization={specialization} />
      </AuthProvider>
    </>
  );
}
