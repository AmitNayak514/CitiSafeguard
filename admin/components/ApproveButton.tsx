"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import approveAction from '@/actions/approve'

export const ApproveButton = (id: string) => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true);
  },[]) ;

  const handleClick = async () => {
    await approveAction(id, {reportId: id, action: "approved"});
  }

  if(!mounted) return;

  return (
    <Button onClick={handleClick}>Approve</Button>
  )
}
