import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const MainPage = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  } else {
    redirect("/dashboard");
  }
  return <div></div>;
};

export default MainPage;
