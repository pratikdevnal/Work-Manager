import React from "react";

async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
}
export default async function About() {
  // await takeTime();
  // throw new Error("This is manual error");
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
}
