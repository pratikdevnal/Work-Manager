"use client";
import React, { useState } from "react";
import signUpBanner from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://pbs.twimg.com/profile_images/1619973018448707586/l17etWN9_400x400.png",
  });

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl:
        "https://pbs.twimg.com/profile_images/1619973018448707586/l17etWN9_400x400.png",
    });
  };

  const doSignUp = async (event) => {
    event.preventDefault();
    console.log(data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Username is required", {
        position: "top-center",
      });
      return;
    }
    if (data.email.trim() === "" || data.email == null) {
      toast.warning("Email is required", {
        position: "top-center",
      });
      return;
    }
    if (data.password.trim() === "" || data.password == null) {
      toast.warning("Password is required", {
        position: "top-center",
      });
    }
    try {
      const result = await signUp(data);
      console.log(result);
      toast.success("Signup Successfull", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("error while signup!!", {
        position: "top-center",
      });
    }

    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl:
        "https://pbs.twimg.com/profile_images/1619973018448707586/l17etWN9_400x400.png",
    });
  };

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5">
        <div className="flex justify-center m-8">
          <Image src={signUpBanner} alt="No image" style={{ width: "40%" }} />
        </div>
        <div className="py-5">
          <h1 className="text-3xl text-center">Signup</h1>
          <form action="#!" className="mt-5" onSubmit={doSignUp}>
            {/* username */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-400-100 border-gray-800"
                placeholder="Enter Here"
                id="user_name"
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
              />
            </div>
            {/* email */}
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
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            {/* about */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2"
              >
                About
              </label>
              <textarea
                type="text"
                className="w-full p-3 rounded-xl bg-gray-800 focus:ring-gray-400-100 border-gray-800"
                placeholder="Enter Here"
                id="user_about"
                name="user_about"
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
                rows={8}
              />
            </div>
            <div className="mt-3 text-center">
              <button
                className="px-2 py-3 bg-green-600 rounded hover:bg-green-400 "
                type="submit"
              >
                Signup
              </button>
              <button
                className="ms-3 px-2 py-3 bg-orange-600 rounded hover:bg-orange-400 "
                type="button"
                onClick={resetForm}
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

export default Signup;
