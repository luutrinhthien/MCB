import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import LandingPageMobile from '@/components/landingPageMobile/Landing'
import LandingPage from '@/components/landingPage/Landing'
import Nav from '@/components/navbar/Nav'
import Staking from '@/components/staking/Staking'
import Modal from '@/components/landingModal/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [nav, setNav] = useState("home")

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className='md:hidden visible'>
        <LandingPageMobile openModal={openModal} />
      </div>
      <div className='md:block hidden'>
        <Nav nav={nav} setNav={setNav} />
        {nav === "home" ? <LandingPage openModal={openModal} /> : (nav === "openSea" ? <LandingPage /> : <Staking />)}
      </div>

      <div className="flex items-center justify-center ">
        <Modal showModal={showModal} setShowModal={setShowModal}>
        </Modal>
      </div>

    </>
  )
}
