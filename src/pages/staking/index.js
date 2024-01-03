import React from 'react'
import Staking from '@/components/desktop/stakeNFT/Staking'
import StakingMobile from '@/components/mobile/stakeNFTMobile/Staking'
import { createContext, useState, useEffect } from "react";
import { useNetwork, useSwitchNetwork, useAccount } from 'wagmi'

export const ListNftContext = createContext();

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const [listNFT, setListNFT] = useState([]);
  const [listNFTStaked, setListNFTStaked] = useState([]);
  const [fetchAgainList, setFetchAgainList] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);


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
    <ListNftContext.Provider value={{
      listNFT, setListNFT, listNFTStaked, setListNFTStaked, fetchAgainList,
      setFetchAgainList, showSuccessModal, setShowSuccessModal, showLoadingModal, setShowLoadingModal,
      showErrorModal, setShowErrorModal
    }}>
      {isClient ?
        <div className='md:hidden visible'>
          <StakingMobile />
        </div> : <div></div>}
      {isClient ? <div className='md:block hidden'>
        <Staking />
      </div> : <div></div>}
    </ListNftContext.Provider>
  )
}
