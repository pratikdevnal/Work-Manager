import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

//post request function
//data post
//create user
export async function POST(request) {
  //fetch user details from request
  const { name, email, password, about, profileURL } = await request.json();
  // create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  try {
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    console.log(user);
    const createdUser = await user.save();
    const response = NextResponse.json(createdUser, { status: 201 });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user!!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);
  // const jsonData = await request.json();
  // const textData = await request.text();
  // console.log(textData);
  // console.log(jsonData);
  // return NextResponse.json({ message: "posting user data" });
}

export function DELETE(request) {
  console.log("Delete api is called");
  return NextResponse.json(
    {
      message: "deleted !!",
      status: true,
    },
    { status: 201, statusText: "status text" }
  );
}

export function PUT() {}
