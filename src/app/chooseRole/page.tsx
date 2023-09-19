"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ProfessionalDoc from "../../../assets/professionalDoc.svg";
import LookingForDoc from "../../../assets/lookingForDoc.svg";

export default function ChooseRole() {
  const [role, setRole] = useState<string>("");

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[97vh]">
        <div className="border-2 p-12 flex flex-col items-center gap-8 rounded-xl">
          <h2 className="text-[36px] leading-9 font-serif font-medium text-[#001e00] mb-10">
            Join as a patient or doctor
          </h2>
          <div className="flex gap-4">
            <label
              className={`border-2 p-6 rounded-md w-[250px] relative cursor-pointer  ${
                role === "user" ? "border-sky-500" : "border-gray-200"
              } hover:border-sky-500 transition duration-170 ease-in-out hover:ease-in-out`}
              htmlFor="user"
              onClick={() => setRole("user")}
            >
              <Image src={LookingForDoc} alt="Patient" width={40} height={40} />
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
            <label
              className={`border-2 p-6 rounded-md w-[250px] relative cursor-pointer  ${
                role === "professional" ? "border-sky-500" : "border-gray-200"
              } hover:border-sky-500 transition duration-170 ease-in-out hover:ease-in-out`}
              htmlFor="professional"
              onClick={() => setRole("professional")}
            >
              <Image
                src={ProfessionalDoc}
                alt="Doctor"
                width={40}
                height={40}
              />
              I am a doctor, <br /> looking for work
              <input
                type="radio"
                name="choose"
                id="professional"
                value="professional"
                className="input_radio absolute top-[10px] right-[10px] opacity-0"
                checked={role === "professional"}
                onChange={handleRoleChange}
              />
            </label>
          </div>
          {role === "user" ? (
            <Link href="/forms/signUpUser">
              <button className="w-[380px] border-2 px-2 py-[5px] rounded-full bg-sky-700 border-sky-700 text-white hover:bg-sky-600 hover:border-sky-600">
                Join as a patient
              </button>
            </Link>
          ) : (
            ""
          )}
          {role === "professional" ? (
            <Link href={{ pathname: "/forms/signUpProf" }}>
              <button className="w-96 border-2 px-2 py-[5px] rounded-full bg-sky-700 border-sky-700 text-white hover:bg-sky-600 hover:border-sky-600">
                Apply as a Doctor
              </button>
            </Link>
          ) : (
            ""
          )}
          {role === "" ? (
            <button
              disabled={true}
              className="w-96 border-2 px-2 py-[5px] rounded-full cursor-not-allowed text-[#9aaa97] bg-[#e4ebe4] border-[#e4ebe4]"
            >
              Create Account
            </button>
          ) : (
            ""
          )}
          <div className="flex gap-2">
            <p className="text-sm">Already have an account?</p>
            <p className="text-sky-600 text-sm font-semibold hover:underline">
              <Link
                href={{
                  pathname: "/forms",
                }}
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
