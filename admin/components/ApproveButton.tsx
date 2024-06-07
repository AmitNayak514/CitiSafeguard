"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import approveAction from "@/actions/handleReport";

interface ApproveButtonProps {
  id: string;
  userId: string;
}

export const ApproveButton: React.FC<ApproveButtonProps> = ({ id, userId }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = async () => {
    await approveAction(id, { action: "approved", userId: userId });
  };

  if (!mounted) return;

  return <Button onClick={handleClick}>Approve</Button>;
};
