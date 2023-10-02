// /tasks

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("error in getting data", 404, false);
  }
}

// create a task
export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  // fetching Logged in User id
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });

    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to create task", 500, false);
  }
}
