"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";
import { connectDb } from "@/helper/db";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const tempUser = await currentUser();
        setUser({ ...tempUser });
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current  user");
        setUser(null);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
