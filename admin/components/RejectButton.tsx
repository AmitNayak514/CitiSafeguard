"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import approveAction from "@/actions/handleReport";
import { useUser } from "@clerk/nextjs";

interface RejectButtonProps {
  id: string;
  userId: string;
}

export const RejectButton: React.FC<RejectButtonProps> = ({ id, userId }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = async () => {
    await approveAction(id, { userId: userId, action: "rejected" });
  };

  if (!mounted) return;

  return (
    <Button onClick={handleClick} variant={"destructive"}>
      Reject
    </Button>
  );
};
