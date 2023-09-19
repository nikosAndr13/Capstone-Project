import Image from "next/image";
import { ChangeEventHandler } from "react";

export const JoinAsButton = ({
  handleRoleChange,
  role,
  lookingForDoc,
  setRole,
}: {
  handleRoleChange: ChangeEventHandler<HTMLInputElement>;
  role: string;
  lookingForDoc: string;
  setRole: (role: string) => void;
}) => {
  return (
    <label
      className={`border-2 p-6 rounded-md w-[250px] relative cursor-pointer  ${
        role === "user" ? "border-sky-500" : "border-gray-200"
      } hover:border-sky-500 transition duration-170 ease-in-out hover:ease-in-out`}
      htmlFor="user"
      onClick={() => setRole("user")}
    >
      <Image src={lookingForDoc} alt="Patient" width={40} height={40} />
      I am a patient, <br /> looking for a doctor
      <input
        type="radio"
        name="choose"
        id="user"
        value="user"
        className="input_radio absolute top-[10px] right-[10px] opacity-0"
        checked={role === "user"}
        onChange={handleRoleChange}
      />
    </label>
  );
};
