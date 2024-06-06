"use server";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";

const sendUser = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const data = {
    userId: userId,
  };
  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, data);
};

export default sendUser;
