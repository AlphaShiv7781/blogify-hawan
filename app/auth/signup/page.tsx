"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomInput from "@/app/components/CustomInput"; 
import AuthButton from "@/app/components/AuthButton";
  
const Signup = () => {

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const [inputValue , setInputValue]= useState<string>(""); 


  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <div className="flex justify-center mt-16">
      <div style={{ width: '30%' }}>
        <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">


              <CustomInput value={inputValue}
              name={"name"}
              placeholder={"Enter your name"}
              onChange={(e) => setInputValue(e.target.value)}
              type={"text"}
              required={true}
              id={"name"} htmlFor={"Name"} label={"Name"}              /> 
              


              <CustomInput value={inputValue}
              name={"email"}
              placeholder={"Enter your email"}
              onChange={(e) => setInputValue(e.target.value)}
              type={"text"}
              required={true}
              id={"email"} htmlFor={"Email"} label={"E-mail"}              /> 

              


               <CustomInput 
                value={inputValue}
                name={"password"}
                placeholder={"Enter your password"}
                onChange={(e) => setInputValue(e.target.value)}
                type={"text"}
                required={true}
                id={"password"} htmlFor={"password"} label={"Password"}                />  

              <AuthButton buttonAction={"Sign up"} /> 
              
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <span className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={()=>{router.push('/auth/signin')}}>
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
