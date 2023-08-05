import React, { useState } from 'react'

export default function Nav({ nav, setNav }) {

    return (
        <div className='mt-4 ml-14 flex justify-between mr-14 text-2xl'>
            <div style={{ width: "3rem" }}>
                <img src="/img/logo.png" alt="" />
            </div>
            <div className='flex space-x-5'>
                <div className={`cursor-pointer ${nav === "home" ? "font-bold" : ""}`} onClick={() => setNav("home")}>Home</div>
                <div className={`cursor-pointer ${nav === "openSea" ? "font-bold" : ""}`} onClick={() => setNav("openSea")}>OpenSea</div>
                <div className={`cursor-pointer ${nav === "staking" ? "font-bold" : ""}`} onClick={() => setNav("staking")}>Staking</div>
            </div>
            {/* {nav === "staking" &&
                <div>
                    <button className='text-black px-3 py-1' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}>
                        <p>Connect wallet</p>
                    </button>
                </div>
            } */}
        </div>
    )
}
