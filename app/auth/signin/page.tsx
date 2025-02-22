"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomInput from "@/app/components/CustomInput";
import AuthButton from "@/app/components/AuthButton";
import { loginUser } from "@/lib/api";

const Signin = () => {
  const router = useRouter();

  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null); 

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setError(null); 

    try {
      await loginUser(emailInputValue, passwordInputValue); 
      router.push("/dashboard"); 
    } catch (err) {
      setError("Invalid email or password. Please try again."); 
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div style={{ width: "30%" }}>
        <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomInput
                value={emailInputValue}
                name={"email"}
                placeholder={"Enter your email"}
                onChange={(e) => setEmailInputValue(e.target.value)}
                type={"text"}
                required={true}
                id={"email"}
                htmlFor={"email"}
                label={"E-mail"}
              />

              <CustomInput
                value={passwordInputValue}
                name={"password"}
                placeholder={"Enter your password"}
                onChange={(e) => setPasswordInputValue(e.target.value)}
                type={"password"} 
                required={true}
                id={"password"}
                htmlFor={"password"}
                label={"Password"}
              />

              
              <AuthButton buttonAction={"Sign In"} />
            </form>

            
            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <span
                className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={() => {
                  router.push("/auth/signup");
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
