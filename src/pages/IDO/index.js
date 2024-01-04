import IDO from '@/components/IDO'
import React from 'react'
import { createContext, useState, useEffect } from "react";
import { useNetwork, useSwitchNetwork, useAccount } from 'wagmi'

export default function index() {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  
  useEffect(() => {
    if (chain) {
      if (chain.id !== 56) {
        switchNetwork?.(56);
      }
    }
  }, [chain?.id, address, switchNetwork]);
  return (
    <div>
        <IDO/>
    </div>
  )
}
