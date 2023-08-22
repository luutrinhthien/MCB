import React, { useState, useRef, useEffect } from 'react'
import BodyCard from './BodyCard'
import styles from './BodyCard.module.css'
import { useContractRead, useAccount } from 'wagmi'
import { NFTaddress, StakingNFTaddress } from "../../../constant/address"
import NFTabi from "../../../constant/NFT.json"
import StakingNFTabi from "../../../constant/StakingNFT.json"

export default function StakingCard() {

    const { address } = useAccount()

    const dropdownContainerRef = useRef(null)

    const [isShow, setIsShow] = useState(false)

    const onShowBody = () => {
        setIsShow(!isShow)

        if (dropdownContainerRef.current && !isShow) {
            dropdownContainerRef.current.style.height = '60rem'; // Set the height as needed
        }
        if (dropdownContainerRef.current && isShow) {
            dropdownContainerRef.current.style.height = '8rem'; // Set the height as needed
        }
    }

    // read total earned
    const { data: totalEarn } = useContractRead({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'totalEarn',
        args: [address],
        watch: true,
    })
    const [totalEarning, setTotalEarning] = useState(0)
    useEffect(() => {
        setTotalEarning((Number(totalEarn) / (10 ** 18)))
    }, [totalEarn])
    // read total earned

    return (
        <>
            <div className={`mt-4 pt-3 ${styles.dropdownContainer}`}
                ref={dropdownContainerRef}
                style={{
                    borderColor: "#ABF20D", borderRadius: "12px", borderBottom: "1px solid #ABF20D",
                    width: "100%", borderWidth: (isShow === false ? "0px 0px 1px 0px" : "1px")
                }}>
                <div className='flex pt-1 px-3 justify-between cursor-pointer'
                    onClick={onShowBody}>
                    <div className='flex'>
                        <div style={{ width: "9rem", marginLeft: "-2.5rem", position: "relative", zIndex: "2", maxHeight: "7rem" }}>
                            <img src="/img/staking/cardMBC.png" alt="" />
                        </div>
                        <div style={{ width: "9rem", position: "absolute" }}>
                            <img src="/img/staking/MBCtoken.png" alt="" />
                        </div>

                        <div className='ml-1'>
                            <div className='text-2xl font-bold'>
                                FDC-USDT
                            </div>
                            <div className='flex relative mt-3'>
                                <div className='bg-white text-black px-3 rounded-lg border-2 text-xl font-semibold border-black'>5X</div>
                                <div style={{ width: "7rem", position: "absolute", top: "-1rem", left: "1rem" }}>
                                    <img src="/img/staking/MBCtoken.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-14' >
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#ABF20D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div hidden={!isShow}>
                    <BodyCard />
                </div>
            </div >
        </>
    )
}
