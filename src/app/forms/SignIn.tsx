"use client";

import { Fragment, useState } from "react";
import { Input } from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";
const fields = ["email", "password"] as const;

export interface Inputs {
  email: string;
  password: string;
}

export default function SignIn() {
  const [info, setInfo] = useState<Inputs>({
    email: "",
    password: "",
  });
  const [role, setRole] = useState(false);
  const { login, professionalLogin } = useAuth();

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] flex-wrap ">
        <Toaster />
        <form
          className="flex flex-col border-2 p-6 rounded-md flex-wrap justify-evenly form gap-6 "
          onSubmit={(e) => {
            e.preventDefault();
            role === false ? login(info) : professionalLogin(info);
          }}
        >
          <h1 className="text-3xl text-center font-semibold mb-6">
            Sign In Now
          </h1>
          {fields.map((field) => {
            return (
              <Fragment key={field}>
                <Input
                  name={field}
                  errorM={"required"}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setInfo((prev) => ({ ...prev, [name]: value.trim() }));
                  }}
                />
              </Fragment>
            );
          })}
          <label className="md:max-w-2xl flex gap-3 p-2 rounded-md ">
            I am a Doctor
            <input
              type="checkbox"
              value="role"
              onChange={() => {
                setRole((prev) => !prev);
              }}
            />
          </label>
          <button
            type="submit"
            className="max-w-full w-full border-2 px-2 py-[5px] rounded-full bg-sky-700 border-sky-700 text-white hover:bg-sky-600 hover:border-sky-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
