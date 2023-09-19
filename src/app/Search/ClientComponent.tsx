"use client";

import { useState, Fragment, useEffect, useId } from "react";
import Select from "react-select";
import { Card } from "@/components/DoctorCard";

type doc = {
  email: string;
  username: string;
  calendly: string;
  specialization: string;
};

interface response {
  data: doc[];
  totalRows: number;
}

export default function FindDoc({
  options,
}: {
  options: { label: string; value: number }[];
}) {
  const [doctor, setDoctor] = useState<string>("");
  let [limit, setLimit] = useState<number>(5);
  const [professionals, setProfessionals] = useState<response>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/api/professionals?limit=${limit}&offset=${0}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const fetchedData = await res.json();
        setProfessionals(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [limit]);
  return (
    <>
      <h1 className="text-4xl font-semibold py-10 mt-24">
        Search for you doctor here and close appointments
      </h1>
      <div className="flex gap-5 pb-10">
        <Select
          options={options}
          className="w-[300px]"
          onChange={(e) => {
            setDoctor(e!.label);
          }}
          instanceId={useId()}
          tabSelectsValue={true}
        />
        {doctor !== "" && (
          <button
            onClick={() => setDoctor("")}
            className="cursor-pointer hover:underline"
          >
            Remove Filter
          </button>
        )}
      </div>
      <h4>Click on close appointment to schedule</h4>

      <div className="items-center flex flex-col">
        <div className="flex flex-wrap gap-10 p-4 justify-center">
          {professionals !== undefined ? (
            professionals.data.map((doc: doc) => {
              const { username, email, calendly, specialization } = doc;
              if (doctor === "" || specialization === doctor) {
                return (
                  <Fragment key={email}>
                    <Card
                      username={username}
                      email={email}
                      calendly={calendly}
                      specialization={specialization}
                    />
                  </Fragment>
                );
              }
            })
          ) : (
            <div className="lds-ellipsis mt-[10vh]">
              <div className="bg-gray-400"></div>
              <div className="bg-gray-400"></div>
              <div className="bg-gray-400"></div>
              <div className="bg-gray-400"></div>
            </div>
          )}
        </div>
        {professionals !== undefined && (
          <div className="pb-5 flex flex-col justify-center">
            {professionals?.data?.length &&
            professionals?.totalRows &&
            professionals?.data?.length < professionals?.totalRows ? (
              <button
                className="underline cursor-pointer"
                onClick={() => setLimit((prev) => (prev += 5))}
              >
                Click for more
              </button>
            ) : (
              <>
                <p>You have reached the end</p>
                <button
                  className="underline cursor-pointer"
                  onClick={() => setLimit((prev) => (prev -= 5))}
                >
                  Click for Less
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
