"use client";
import { getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import { connectDb } from "@/helper/db";
import Task from "./Task";
import { toast } from "react-toastify";

import { deleteTask } from "@/services/taskService";

connectDb();
const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(taskId) {
    try {
      const result = deleteTask(taskId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != taskId);
      setTasks(newTasks);
      toast.success("task is deleted");
    } catch (error) {
      toast.error("Error deleting task");
    }
  }
  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center">Your tasks ({tasks.length})</h1>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
