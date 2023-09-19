"use client";

import { Fragment, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "../../../components/Input";
import toast, { Toaster } from "react-hot-toast";

const fields = ["email", "name", "password", "Confirm Password"] as const;

export interface UserInputs {
  email: string;
  name?: string;
  password: string;
}

export default function SignUp() {
  const [info, setInfo] = useState<UserInputs>({
    email: "",
    password: "",
    name: "",
  });
  const { register } = useAuth();
  return (
    <>
      <div className="flex justify-center items-center h-[97vh] flex-wrap ">
        <Toaster />
        <form
          className="flex flex-col items-center border-2 p-6 rounded-md flex-wrap justify-evenly form gap-6 "
          onSubmit={(e) => {
            e.preventDefault();
            register(info);
          }}
        >
          <h1 className="text-3xl font-semibold mb-6 ">
            Create your account now
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
          <button
            type="submit"
            className="max-w-full w-full border-2 px-2 py-[5px] rounded-full bg-sky-700 border-sky-700 text-white hover:bg-sky-600 hover:border-sky-600"
          >
            Create my account
          </button>
        </form>
      </div>
    </>
  );
}
