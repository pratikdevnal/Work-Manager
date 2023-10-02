"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  }
  return (
    <nav className="bg-blue-600 h-20 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context.user && (
            <>
              {" "}
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-tasks" className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context.user && (
            <>
              <li>
                <Link href="#!">{context.user.name}</Link>
              </li>
              <li>
                <Link href="#!" onClick={doLogout}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-200">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
