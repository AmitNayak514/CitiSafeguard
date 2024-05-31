import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const MainPage: React.FC = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  } else {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-3 p-12 pt-6">Redirecting To Auth</div>
    </div>
  );
};

export default MainPage;
