import React, { useState } from 'react'
import StakingCard from './StakingCard';
import { useAccount } from 'wagmi'
import { Web3Button, useWeb3Modal } from '@web3modal/react';
import ListNFT from './ListNFT';
import LoadingModal from "../../modal/LoadingModal"
import SuccessModal from "../../modal/SuccessModal"
import ErrorModal from "../../modal/ErrorModal"

export default function Staking() {
  const { open, close } = useWeb3Modal()

  const { address } = useAccount()

  const [input, setInput] = useState("")

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      {<LoadingModal />}
      {<SuccessModal />}
      {<ErrorModal />}
      <ListNFT />

      <div className='mt-4 ml-14 flex justify-between mr-14 text-2xl'>
        <div style={{ width: "3rem" }}>
          <img src="/img/logo.png" alt="" />
        </div>
        <div className='flex space-x-5'>
          <a className={`cursor-pointer `} href='/' >Home</a>
          <div className={`cursor-pointer `} >OpenSea</div>
          <div className={`cursor-pointer font-bold`} >Staking</div>
        </div>

        {address ? <div className='mt-5'><Web3Button avatar='hide' balance="show" /></div>
          :
          <div className='mt-5 text-xl'>
            <button className='px-4 py-1' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
              onClick={() => open()}>
              <p className='text-black'>Connect Wallet</p>
            </button>
          </div>}

      </div>
      <div className='mt-10 mx-auto' style={{ width: "70%" }}>
        <h1 className='mb-3 ml-4' style={{ fontSize: "64px", fontWeight: "bold" }}>Stake To Earn</h1>

        <div className='flex justify-between mx-4'>
          <div className='flex p-1 px-3' style={{ borderColor: "#ABF20D", borderRadius: "12px", border: "2px solid #ABF20D", width: "28vw", height: "3rem" }}>
            <div className='' style={{ width: "2rem", height: "2rem" }}>
              <img src="/img/staking/search.png" alt="" />
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Search...'
              className=' bg-black rounded-xl p-1 px-4 focus:border-transparent focus:outline-none font-bold'
            />
          </div>

          <div className='flex justify-evenly	ml-10' style={{ borderColor: "#ABF20D", borderRadius: "12px", border: "2px solid #ABF20D", width: "9rem", height: "3rem" }}>
            <p className='mt-1'>Sort by</p>
            <p style={{ backgroundColor: "#ABF20D", fontWeight: "thin" }} className='my-2'>|</p>
            <div className='mt-1 flex'>
              <p>Hot &nbsp;</p>
              <svg className='mt-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className='flex'>
            <label className="relative inline-block w-10 h-6 mt-2 ">
              <input
                type="checkbox"
                className="hidden"
                checked={isOn}
                onChange={handleToggle}
              />
              <div className="toggle absolute w-11 ml-1 h-6 rounded-full cursor-pointer" style={{ backgroundColor: "#525252" }}></div>
              <div
                style={{ marginTop: "1.5px", backgroundColor: (isOn ? "#ABF20D" : "white") }}
                className={`cursor-pointer dot absolute w-5 h-5 rounded-full transition-transform ${isOn ? 'transform translate-x-7' : 'bg-gray-100 translate-x-1'
                  }`}
              />
            </label>
            <p className='ml-4 mt-1' style={{ color: "#ABF20D" }}>Staked Only</p>
          </div>

          <div className=' flex justify-around' style={{ borderColor: "#ABF20D", borderRadius: "12px", border: "2px solid #ABF20D", width: "5rem", height: "2.75rem" }}>
            <div className='mt-2' style={{ width: "1.5rem", height: "1.5rem" }}>
              <img src="img/staking/3bar.png" alt="" />
            </div>
            <div className='pt-2' style={{ width: "1.5rem", height: "1.5rem" }}>
              <img src="img/staking/4square.png" alt="" />
            </div>
          </div>

        </div>

        <div className='my-4 mt-12'>
          <StakingCard />
        </div>

        <div className='text-center mt-8 mb-4 text-sm'>
          Copyright ©2023 MultiCurrency Block. All rights reserved
        </div>
      </div>
    </div>
  )
}
