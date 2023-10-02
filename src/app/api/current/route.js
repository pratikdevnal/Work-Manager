// import { NextResponse } from "next/server";
// // const jwt = require("jsonwebtoken");
// import jwt from "jsonwebtoken";

// import { User } from "@/models/user";
// import { connectDb } from "@/helper/db";
// connectDb();
// export async function GET(request) {
//   const authToken = request.cookies.get("authToken")?.value;
//   console.log(authToken);
//   let data = undefined;
//   if (authToken != "") {
//     data = jwt.verify(authToken, process.env.JWT_KEY);
//   }
//   console.log(data);
//   const user = await User.findById(data._id).select("-password");
//   return NextResponse.json(user);
// }

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

// Connect to the database
connectDb();

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log("authToken:", authToken);

  if (!authToken) {
    // If there's no authToken, return an error response
    return NextResponse.error("Authentication token is missing", 401);
  }

  // Verify the JWT token
  const data = jwt.verify(authToken, process.env.JWT_KEY);

  console.log("Decoded JWT data:", data);

  // Fetch user data from the database
  const user = await User.findById(data._id).select("-password");

  if (!user) {
    // If the user doesn't exist, return an error response
    return NextResponse.error("User not found", 404);
  }

  // Return the user data as a JSON response
  return NextResponse.json(user);
}
