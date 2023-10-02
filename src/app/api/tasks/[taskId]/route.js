// api/tasks/{taskId}

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
connectDb();

//get single task
export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task!!", 404, false);
  }
}

// export async function POST() {}

// update a task
export async function PUT(request, { params }) {
  const { taskId } = params;
  try {
    let task = await Task.findById(taskId);
    const { title, content, status } = await request.json();
    (task.title = title), (task.content = content), (task.status = status);
    const updatedtask = await task.save();
    return NextResponse.json(updatedtask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("error in updating task !!!", 500, false);
  }
}

// delete a task
export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;
    await Task.deleteOne({
      _id: taskId,
    });
    return getResponseMessage("task deleted successfully", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to delete task", 500, false);
  }
}
