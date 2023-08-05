import React, { useState } from 'react'
import ComingSoon from './ComingSoon';

export default function Home() {

    const [hoveredDiv, setHoveredDiv] = useState(1);

    return (
        <div className='w-[95%] mx-auto'>
            <div className='flex mt-12'>
                <div className='w-[30%] text-xl mt-5'>
                    <p>STAKING</p>
                    <p>PROGRAM</p>
                </div>
                <div className='w-[70%]'>
                    <p className='font-bold' style={{ fontSize: "4rem" }}>Stake to Earn</p>
                    <p className='mt-[-1.5rem] text-gray-400' style={{ fontSize: "2rem" }}>Follow our 3 simple steps</p>
                    <div className='mt-6 w-[70%]' style={{ border: "1px solid #ABF20D", borderRadius: "12px" }}>

                        <div className=' grid grid-cols-3'>
                            <div className='col-span-2'>
                                <div className='' style={{ borderRadius: "12px" }}>
                                    <div className='flex' onMouseEnter={() => setHoveredDiv(1)} >
                                        <p hidden={hoveredDiv === 1} className='text-5xl font-bold mx-4 p-2'>01</p>
                                        <p hidden={hoveredDiv === 1} className='text-3xl mt-1.5 p-2'>Accquire your NFTs</p>
                                    </div>
                                    <div hidden={hoveredDiv !== 1} style={{ backgroundColor: "#ABF20D", color: "black", borderTopLeftRadius: "12px" }} className='p-4'>
                                        <p className='text-5xl font-bold mx-4 my-2'>01</p>
                                        <p className='text-3xl font-bold mx-4'>Acquire your NFTs</p>
                                        <p style={{ minHeight: "3em" }} className='ml-4'>Visit our Collection on OpenSea and acquire your favourite NFTs</p>
                                        <div onClick={() => window.location.href = '/staking'} style={{ backgroundColor: "black", color: "white", borderRadius: "18px", width: "70%" }}
                                            className='pl-5 py-1 relative mt-4 ml-4 cursor-pointer'>
                                            Explore MCB Collections
                                            <a href='/staking' className='absolute top-1 right-1 cursor-pointer'>
                                                <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#ABF20D" />
                                                    <path d="M22.2353 12.5147C22.2353 12.1005 21.8995 11.7647 21.4853 11.7647L14.7353 11.7647C14.3211 11.7647 13.9853 12.1005 13.9853 12.5147C13.9853 12.9289 14.3211 13.2647 14.7353 13.2647H20.7353V19.2647C20.7353 19.6789 21.0711 20.0147 21.4853 20.0147C21.8995 20.0147 22.2353 19.6789 22.2353 19.2647L22.2353 12.5147ZM13.5303 21.5303L22.0156 13.045L20.955 11.9844L12.4697 20.4697L13.5303 21.5303Z" fill="black" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='flex' onMouseEnter={() => setHoveredDiv(2)} >
                                        <p hidden={hoveredDiv === 2} className='text-5xl font-bold mx-4 p-2'>02</p>
                                        <p hidden={hoveredDiv === 2} className='text-3xl mt-1.5 p-2'>Stake your NFTs</p>
                                    </div>
                                    <div hidden={hoveredDiv !== 2} style={{ backgroundColor: "#ABF20D", color: "black" }} className='p-4 relative'>
                                        <div className='absolute right-2 top-1'>
                                            <ComingSoon />
                                        </div>
                                        <p className='text-5xl font-bold mx-4 my-2'>02</p>
                                        <p className='text-3xl font-bold mx-4'>Stake your NFTs</p>
                                        <p style={{ minHeight: "3em" }} className='ml-4'>Connect your wallet and stake your NFTs</p>
                                        <div style={{ backgroundColor: "black", color: "white", borderRadius: "18px", width: "70%" }}
                                            className='pl-5 py-1 relative mt-4 ml-4'>
                                            Connect Your Wallet
                                            <div className='absolute top-1 right-1 cursor-pointer'>
                                                <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#ABF20D" />
                                                    <path d="M17 23.44V18.8H12.44V17.32H17V12.8H18.48V17.32H23.12V18.8H18.48V23.44H17Z" fill="black" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex' onMouseEnter={() => setHoveredDiv(3)}>
                                        <p hidden={hoveredDiv === 3} className='text-5xl font-bold mx-4 p-2'>03</p>
                                        <p hidden={hoveredDiv === 3} className='text-3xl mt-1.5 p-2'>Start Earning</p>
                                    </div>
                                    <div hidden={hoveredDiv !== 3}
                                        style={{ backgroundColor: "#ABF20D", color: "black", borderBottomLeftRadius: "12px" }}
                                        className='p-4 relative'>
                                        <div className='absolute right-2 top-1'>
                                            <ComingSoon />
                                        </div>
                                        <p className='text-5xl font-bold mx-4 my-2'>03</p>
                                        <p className='text-3xl font-bold mx-4'>Start Earning</p>
                                        <p style={{ minHeight: "3em" }} className='ml-4'>Our NFTs will grant access to Royalty and Reward Pools, to be opened soon</p>
                                        <div style={{ backgroundColor: "black", color: "white", borderRadius: "18px", width: "70%" }}
                                            className='pl-5 py-1 relative mt-4 ml-4 '>
                                            Explore MCB Reward Pools
                                            <div className='absolute top-1 right-1 cursor-pointer'>
                                                <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#ABF20D" />
                                                    <path d="M17.06 25.18L17.12 23.24C16.4267 23.1867 15.7667 23.02 15.14 22.74C14.5267 22.46 14.0133 22.06 13.6 21.54C13.2 21.0067 12.9733 20.3267 12.92 19.5L14.18 19.34C14.18 19.3667 14.1933 19.48 14.22 19.68C14.2467 19.8667 14.3133 20.1 14.42 20.38C14.5267 20.6467 14.7 20.9133 14.94 21.18C15.18 21.4333 15.52 21.6533 15.96 21.84C16.4 22.0133 16.9667 22.1 17.66 22.1C18.2333 22.1 18.7067 22.0333 19.08 21.9C19.4533 21.7533 19.74 21.5733 19.94 21.36C20.14 21.1467 20.28 20.94 20.36 20.74C20.44 20.5267 20.4867 20.3533 20.5 20.22C20.5133 19.7533 20.3867 19.38 20.12 19.1C19.8667 18.82 19.52 18.5933 19.08 18.42C18.64 18.2467 18.16 18.0933 17.64 17.96C17.12 17.8267 16.6 17.6867 16.08 17.54C15.5733 17.38 15.1067 17.18 14.68 16.94C14.2533 16.6867 13.9133 16.36 13.66 15.96C13.4067 15.56 13.2933 15.0467 13.32 14.42C13.36 13.5933 13.7267 12.9267 14.42 12.42C15.1133 11.9133 16.0133 11.6267 17.12 11.56L17.06 9.56H18.32L18.26 11.58C18.9133 11.6467 19.5067 11.8267 20.04 12.12C20.5733 12.4133 20.9867 12.82 21.28 13.34C21.5867 13.86 21.7333 14.4867 21.72 15.22L20.48 15.36C20.4933 14.7867 20.3867 14.3267 20.16 13.98C19.9467 13.6333 19.6667 13.3733 19.32 13.2C18.9867 13.0133 18.6467 12.8867 18.3 12.82C17.9533 12.7533 17.66 12.72 17.42 12.72C16.66 12.72 16.0133 12.8867 15.48 13.22C14.9467 13.5533 14.6733 13.9933 14.66 14.54C14.6467 15.0067 14.7667 15.38 15.02 15.66C15.2867 15.94 15.6333 16.1667 16.06 16.34C16.5 16.5 16.98 16.6467 17.5 16.78C18.0333 16.9 18.5533 17.0333 19.06 17.18C19.58 17.3267 20.0533 17.5267 20.48 17.78C20.92 18.02 21.26 18.3467 21.5 18.76C21.7533 19.16 21.8667 19.68 21.84 20.32C21.8133 20.88 21.6333 21.3667 21.3 21.78C20.98 22.1933 20.5533 22.52 20.02 22.76C19.4867 23 18.9 23.1533 18.26 23.22L18.32 25.18H17.06Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {hoveredDiv == 1 && <div className='col-span-1'>
                                <img src="img/preStaking/pic1.png" style={{ width: "100%", height: "100%", objectFit: "cover", borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }} alt="" />
                            </div>}
                            {hoveredDiv == 2 && <div className='col-span-1'>
                                <img src="img/preStaking/pic2.png" style={{ width: "100%", height: "100%", objectFit: "cover", borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }} alt="" />
                            </div>}
                            {hoveredDiv == 3 && <div className='col-span-1'>
                                <img src="img/preStaking/pic3.png" style={{ width: "100%", height: "100%", objectFit: "cover", borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }} alt="" />
                            </div>}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
