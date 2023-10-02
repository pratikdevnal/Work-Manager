"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const Task = ({ task, deleteTaskParent }) => {
  return (
    <div
      className={`shadow-lg mt-2 rounded-md  ${
        task.status == "completed" ? "bg-green-800" : "bg-red-400"
      } `}
    >
      <div className="p-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <RxCross1
            className="cursor-pointer w-4 h-4 hover:border-2"
            onClick={() => {
              deleteTaskParent(task._id);
            }}
          />
        </div>
        <p className="font-normal">{task.content}</p>
        <p className="text-left">Status: {task.status.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Task;
