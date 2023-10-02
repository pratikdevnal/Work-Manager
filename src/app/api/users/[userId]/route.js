import { NextResponse } from "next/server";
import { User } from "@/models/user";

export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    const user = await User.findOne({
      _id: userId,
    }).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get user",
      success: false,
    });
  }
};

export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({ message: "user deleted!!", success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "unable to delete user",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.about = about;
    user.password = password;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "user unable to update",
      status: false,
    });
  }
}
