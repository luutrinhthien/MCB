import React from 'react'
import styles from './Landing.module.css';

export default function LandingPage({ openModal }) {

  return (
    <div className={`flex justify-center items-center min-h-screen`}>
      {/* <div className={`flex justify-center items-center`}> */}
      <div className={`flex ${styles.landing2}`}>
        <div className='text-4xl mt-20 text-justify ml-3'>
          <p className='leading-none' style={{ marginTop: "15vh", maxWidth: "28rem", wordSpacing: "4px", fontSize: "56px" }}>Tokenizing the 2.0 Green Revolution with Blockchain and AI</p>
          <div onClick={openModal} className={` shadow-md shadow-zinc-200 border border-gray-400 p-0 mt-6 text-center cursor-pointer`} style={{ borderRadius: "10px", background: 'radial-gradient(55.70% 2.06% at 128.83% 1.02%, black 0%, black 38%, rgba(95.62, 95.62, 95.62, 0) 100%)' }}>
            <p style={{ color: "GrayText", fontSize: 22 }}>Ask our Earth Bot to Explore ...</p>
          </div>
          <div className='flex justify-between mt-8'>
            <img width={"140rem"} src="/img/landing/MediCann.png" className='mr-3' alt="" />
            <img width={"140rem"} src="/img/landing/MushCapBio.png" className='mr-3' alt="" />
            <img width={"140rem"} src="/img/landing/BCM.png" className='mr-3' alt="" />
          </div>
        </div>
        <div className={`relative`}>
          <div className='' style={{ width: "40vw" }}>
            <img src="/img/landing/robotHome.png" alt="" />
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 text-sm'>
        Copyright ©2023 MultiCurrency Block. All rights reserved
      </div>
    </div>
  )
}
