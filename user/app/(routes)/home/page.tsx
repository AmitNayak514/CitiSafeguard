"use client";
import sendUser from "@/actions/sendUser";
import { useAuth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { userId } = useAuth();
  const router = useRouter();
  if (!userId) redirect(`/sign-in`);
  useEffect(() => {
    sendUser();
  }, [userId, router]);
  return <div>Home</div>;
};

export default HomePage;
