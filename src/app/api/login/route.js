import { getResponseMessage } from "@/helper/responseMessage";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDb();

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user == null) {
      throw new Error("Invalid User");
    }
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Invalid Password");
    }

    const token = jwt.sign(
      {
        _id: user.id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json({
      message: "Login success!!",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
