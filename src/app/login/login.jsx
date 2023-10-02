"use client";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    if (loginData.email.trim() === "" || loginData.email == null) {
      toast.warning("Email is required", {
        position: "top-center",
      });
      return;
    }
    if (loginData.password.trim() === "" || loginData.password == null) {
      toast.warning("Password is required", {
        position: "top-center",
      });
    }

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("logged in", {
        position: "top-center",
      });
      context.setUser(result.user);
      //redirect to home page after login
      router.push("/show-tasks");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5">
        <div className="flex justify-center m-8"></div>
        <div className="py-5">
          <h1 className="text-3xl text-center">Login</h1>
          <form action="#!" className="mt-5" onSubmit={loginFormSubmitted}>
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-400-100 border-gray-800"
                placeholder="email address"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    email: event.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>
            {/* password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-400-100 border-gray-800"
                placeholder="New password"
                id="user_password"
                name="user_password"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>
            <div className="mt-3 text-center">
              <button
                className="px-2 py-3 bg-green-600 rounded hover:bg-green-400 "
                type="submit"
              >
                Login
              </button>
              <button
                className="ms-3 px-2 py-3 bg-orange-600 rounded hover:bg-orange-400 "
                type="button"
                // onClick={resetForm}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
