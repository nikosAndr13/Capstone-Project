"use client";

import { Fragment, useState, useRef } from "react";
import { Input } from "../../../components/Input";
import { useAuth } from "@/hooks/useAuth";
import Select from "react-select";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";

const fields = [
  "email",
  "name",
  "password",
  "Confirm Password",
  "Calendly Link",
] as const;

export interface ProfInputs {
  email: string;
  name: string;
  password: string;
  specializationid: number | null | undefined;
}

type specialization = {
  id: number;
  specialization: string;
};

export default function SignUpProfessional({
  specialization,
}: {
  specialization: specialization[];
}) {
  const [info, setInfo] = useState<ProfInputs>({
    email: "",
    password: "",
    name: "",
    specializationid: null,
  });
  const confirmRef = useRef<HTMLInputElement | null>(null);
  const options = specialization.map((specialization) => ({
    label: specialization.specialization,
    value: specialization.id,
  }));
  const { createNewProfessional } = useAuth();
  return (
    <>
      <div className="flex justify-center items-center h-[97vh] flex-wrap flex-col ">
        <Toaster />
        <form
          className="flex flex-col items-center border-2 p-6 rounded-md justify-evenly form gap-6 "
          onSubmit={(e) => {
            e.preventDefault();
            if (info.password === confirmRef.current?.value) {
              createNewProfessional(info);
            } else {
              toast.error("Passwords Do not match");
            }
          }}
        >
          <h1 className="text-3xl font-semibold mb-6 ">Register as a Doctor</h1>
          {fields.map((field) => {
            if (field !== "Confirm Password") {
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
            } else {
              return (
                <Fragment key={field}>
                  <input
                    className="border-2 p-2 outline-none w-96 rounded-md md:shrink-0 inputWidth"
                    type="password"
                    placeholder={field}
                    name={field}
                    ref={confirmRef}
                    onChange={() => {
                      console.log(info.password === confirmRef.current?.value);
                      if (confirmRef.current) confirmRef.current.value;
                    }}
                  />
                </Fragment>
              );
            }
          })}
          <Select
            options={options}
            instanceId={"specialization"}
            className="w-full"
            required={true}
            name="specializationid"
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, specializationid: e?.value }));
            }}
          />
          <button
            type="submit"
            className="max-w-full w-full border-2 px-2 py-[5px] rounded-full bg-sky-700 border-sky-700 text-white hover:bg-sky-600 hover:border-sky-600"
          >
            Create my account
          </button>
          <div className="flex gap-2">
            <p className="text-sm">Already have an account?</p>
            <p className="text-sky-600 text-sm font-semibold hover:underline">
              <Link href={"/forms"}>Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
