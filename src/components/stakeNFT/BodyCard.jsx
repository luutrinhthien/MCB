import React, { useState } from 'react'
import styles from './BodyCard.module.css'

export default function BodyCard() {

    const [inputFDC, setInputFDC] = useState("")
    const [inputStake, setInputStake] = useState("")

    return (
        <div className={`flex p-6 justify-between ${styles.dropdownContent}`}>
            <div className='w-[18%]'>
                <div className='p-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                    USDT per day: ~$1.7
                    Withdrawal Fee: 1%
                    Get FDC
                    View Contract
                    View Exchange
                </div>
                <div className='mt-3 p-4 ' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                    <div className='flex'>
                        <div style={{ width: "10rem", marginLeft: "-25%", marginBottom: "-30%", marginTop: "-10%" }}>
                            <img src="img/staking/MBCtoken.png" alt="" />
                        </div>
                        <p className='mt-[-1px] ml-[-10px]'>Pending Rewards</p>
                    </div>
                    <div className='flex mt-[0px]'>
                        <div>-0USD</div>
                        <button className='ml-[1vw] text-xl px-5 ' style={{ borderRadius: "12px", backgroundColor: "#ABF20D" }}>Harvet</button>
                    </div>
                </div>
            </div>

            <div className='w-[38%]'>
                <div className='p-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                    <p>FDC Balance:</p>
                    <div className='flex p-1 px-3 mt-3 relative' style={{ borderColor: "#ABF20D", borderRadius: "18px", border: "1px solid #ABF20D", width: "100%", height: "3rem" }}>
                        <input value={inputFDC} onChange={(e) => setInputFDC(e.target.value)} type="text" placeholder='0.0'
                            className=' bg-black rounded-xl p-1 px-4 focus:border-transparent focus:outline-none font-bold'
                        />
                        <button className='absolute right-6 top-2 text-xl'> Max</button>
                    </div>
                    <div className='flex justify-end mt-2 mr-2'>-0FDC</div>

                    <div className='flex justify-between mt-4'>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>25%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>50%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>75%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>100%</button>
                    </div>

                    <div className='mt-5 text-xl'>
                        <button className=' px-6 py-2' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}>
                            <p>Connect wallet</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-[38%]'>
                <div className='p-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                    <p>Stake Balance:</p>
                    <div className='flex p-1 px-3 mt-3 relative' style={{ borderColor: "#ABF20D", borderRadius: "18px", border: "1px solid #ABF20D", width: "100%", height: "3rem" }}>
                        <input value={inputStake} onChange={(e) => setInputStake(e.target.value)} type="text" placeholder='0.0'
                            className=' bg-black rounded-xl p-1 px-4 focus:border-transparent focus:outline-none font-bold'
                        />
                        <button className='absolute right-6 top-2 text-xl'> Max</button>
                    </div>
                    <div className='flex justify-end mt-2 mr-2'>-0FDC</div>

                    <div className='flex justify-between mt-4'>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>25%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>50%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>75%</button>
                        <button className=' text-xl px-[1.5rem] py-1 ' style={{ borderRadius: "18px", backgroundColor: "#ABF20D" }}>100%</button>
                    </div>

                    <div className='mt-5 text-xl'>
                        <button className=' px-6 py-2' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}>
                            <p>Connect wallet</p>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
