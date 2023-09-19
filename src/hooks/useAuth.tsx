"use client";

import { useState, createContext, useEffect, useContext } from "react";
import { UserInputs } from "../app/forms/signUpUser/SignUpUser";
import { ProfInputs } from "../app/forms/signUpProf/clientComponent";
import { Inputs } from "../app/forms/SignIn";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: string | null;
  setUser: Function;
  register: Function;
  login: Function;
  professionalLogin: Function;
  createNewProfessional: Function;
  logout: Function;
}

interface info {
  email: string;
  password: string;
}

type ChildrenType = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  register: (body: Inputs) => {},
  professionalLogin: (body: ProfInputs) => {},
  createNewProfessional: (body: ProfInputs) => {},
  login: (body: Inputs) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const maybeUser = localStorage.getItem("user");
    if (maybeUser) {
      const parsedUser = JSON.parse(maybeUser);
      setUser(parsedUser);
    }
  }, []);

  const register = async (body: UserInputs) => {
    const { email, name, password } = body;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/create`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      }
    );

    const responseText = await response.text();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(email));
      router.push("/");
      toast.success("Created Account Successfully");
    } else {
      toast.error(responseText);
    }
  };

  const createNewProfessional = async (body: ProfInputs) => {
    const { email, name, password, specializationid } = body;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/professional/create`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password, specializationid }),
      }
    );
    const responseText = await response.text();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(email));
      router.push("/");
      toast.success("Signed Up Successfully");
    } else {
      toast.error(responseText);
    }
  };

  const login = async (body: Inputs) => {
    const { email, password } = body;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const responseText = await response.text();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(email));
      router.push("/");
      toast.success(responseText);
    } else {
      toast.error(responseText);
    }
  };

  const professionalLogin = async (body: Inputs) => {
    const { email, password } = body;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/professional/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const responseText = await response.text();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(email));
      router.push("/");
      toast.success("Login Successful");
    } else {
      toast.error(responseText);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue: AuthContextType = {
    user,
    setUser,
    register,
    professionalLogin,
    createNewProfessional,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return {
    user: context.user,
    setUser: context.setUser,
    register: context.register,
    professionalLogin: context.professionalLogin,
    createNewProfessional: context.createNewProfessional,
    login: context.login,
    logout: context.logout,
  };
};
