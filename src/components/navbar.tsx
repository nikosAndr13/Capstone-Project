"use client";

import { Fragment, useState } from "react";
import logo from "../../assets/logo.svg";
import bars from "../../assets/bars-solid.svg";
import close from "../../assets/xmark-solid.svg";
import Image from "next/image";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/hooks/useAuth";

const navFields = ["Home", "About", "Search"] as const;

export const NavBar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <AuthProvider>
        <nav className="flex justify-between w-full items-center border-b-2 pb-4 border-gray-400 py-4 border-opacity-25 fixed min-[821px]:p-4 top-0 bg-white min-[821px]:shadow-xl z-10 max-[820px]:flex-col max-[820px]:h-[66px] max-[820px]:bg-white">
          <Link href={"/"}>
            <Image
              src={logo}
              width={160}
              alt="Logo"
              className="max-[820px]:absolute max-[820px]:left-0 max-[820px]:pl-5"
              onClick={() => setIsOpen(false)}
            />
          </Link>
          <div
            className={`flex items-center gap-16 max-[820px]:flex-col max-[820px]:mt-[50px] max-[820px]:pt-2 max-[820px]:w-full max-[820px]:bg-white max-[820px]:gap-4 ${
              !isOpen
                ? `max-[820px]:absolute max-[820px]:top-[-400px]`
                : `max-[820px]:absolute max-[820px]:top-[16px]`
            } transition-all duration-300 `}
          >
            {navFields.map((field) => {
              return (
                <Fragment key={field}>
                  <Link
                    href={`${field === "Home" ? "/" : `/${field}`}`}
                    className="text-[1.2rem]"
                  >
                    {field}{" "}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          {isOpen === false ? (
            <Image
              src={bars}
              width={20}
              alt="menu"
              className="min-[821px]:hidden absolute right-0 mr-8 mt-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Image
              src={close}
              alt="close"
              width={20}
              className="min-[821px]:hidden absolute right-0 mr-8 mt-2 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
          {user !== null ? (
            <div className="flex gap-4 items-center max-[820px]:flex-col max-[820px]:items-center">
              <p>Welcome {user}</p>
              <button
                onClick={() => logout()}
                className="bg-sky-700 p-2 w-28 rounded-3xl text-white text-center
              hover:bg-sky-600
              transition duration-170 ease-in-out hover:ease-in-out"
              >
                Logout
              </button>
            </div>
          ) : (
            <div
              className={`flex gap-4 max-[820px]:items-center max-[820px]:pt-5 max-[820px]:w-full max-[820px]:justify-center max-[820px]:pb-4 max-[820px]:flex-col max-[820px]:shadow-2xl max-[820px]:text-xl max-[820px]:bg-white ${
                !isOpen
                  ? `max-[820px]:absolute max-[820px]:top-[-400px]`
                  : `max-[820px]:absolute max-[820px]:top-[190px]`
              } transition-all duration-300`}
            >
              <Link
                href="/forms"
                className=" p-2 transition duration-170 ease-in-out hover:ease-in-out"
              >
                Login
              </Link>
              <Link
                href={{
                  pathname: "/chooseRole",
                }}
                className="bg-sky-700 p-2 w-28 rounded-3xl text-white text-center
              hover:bg-sky-600
              transition duration-170 ease-in-out hover:ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </AuthProvider>
    </>
  );
};
