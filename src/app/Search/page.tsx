import { NavBar } from "@/components/navbar";
import { specializations } from "../page";
import { specialization } from "../page";
import FindDoc from "./ClientComponent";
import { AuthProvider } from "@/hooks/useAuth";

export default async function SearchPage() {
  const specialization: specialization[] = await specializations();
  const options = specialization.map((specialization: specialization) => ({
    value: specialization.id,
    label: specialization.specialization,
  }));
  return (
    <>
      <div className="max-w-full flex flex-col items-center w-full">
        <AuthProvider>
          <NavBar />
        </AuthProvider>
        <FindDoc options={options} />
      </div>
    </>
  );
}
