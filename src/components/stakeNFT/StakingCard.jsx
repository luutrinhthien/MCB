import React, { useState, useRef } from 'react'
import BodyCard from './BodyCard'
import styles from './BodyCard.module.css'

export default function StakingCard() {
    const dropdownContainerRef = useRef(null);

    const [isShow, setIsShow] = useState(false)

    const onShowBody = () => {
        setIsShow(!isShow)

        if (dropdownContainerRef.current && !isShow) {
            dropdownContainerRef.current.style.height = '30rem'; // Set the height as needed
        }
        if (dropdownContainerRef.current && isShow) {
            dropdownContainerRef.current.style.height = '8rem'; // Set the height as needed
        }
    }

    return (
        <div className={`mt-4 pt-3 ${styles.dropdownContainer}`}
            ref={dropdownContainerRef}
            style={{
                borderColor: "#ABF20D", borderRadius: "12px", borderBottom: "1px solid #ABF20D",
                width: "100%", borderWidth: (isShow === false ? "0px 0px 1px 0px" : "1px")
            }}>
            <div className='flex pt-1 px-3 justify-between' >
                <div className='flex'>
                    <div style={{ width: "10rem", marginLeft: "-2.5rem", position: "relative", zIndex: "2", maxHeight: "7rem" }}>
                        <img src="/img/staking/cardMBC.png" alt="" />
                    </div>
                    <div style={{ width: "10rem", position: "absolute" }}>
                        <img src="/img/staking/MBCtoken.png" alt="" />
                    </div>

                    <div className=''>
                        <div className='text-3xl font-bold'>
                            FDC-USDT
                        </div>
                        <div className='flex relative mt-3'>
                            <div className='bg-white text-black px-3 rounded-lg border-2 text-xl font-semibold border-black'>5X</div>
                            <div style={{ width: "8rem", position: "absolute", top: "-1.25rem", left: "0.75rem" }}>
                                <img src="/img/staking/MBCtoken.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-xl'>
                    <p>Your Stake</p>
                    <p>???</p>
                    <p>~0USD</p>
                </div>

                <div className='text-xl'>
                    <p>Earned</p>
                    <p>???</p>
                    <p>~0USD</p>
                </div>

                <div className='text-xl'>
                    <p>APR</p>
                    <div className='flex'>
                        <p style={{ color: "#ABF20D", fontWeight: "bold" }}>100%</p>
                        <div className='ml-5 mt-2 cursor-pointer'>
                            <svg width="22" height="21" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6406 3H14.1406C14.5384 3 14.92 3.15804 15.2013 3.43934C15.4826 3.72064 15.6406 4.10218 15.6406 4.5V15C15.6406 15.3978 15.4826 15.7794 15.2013 16.0607C14.92 16.342 14.5384 16.5 14.1406 16.5H5.14062C4.7428 16.5 4.36127 16.342 4.07996 16.0607C3.79866 15.7794 3.64063 15.3978 3.64062 15V4.5C3.64062 4.10218 3.79866 3.72064 4.07996 3.43934C4.36127 3.15804 4.7428 3 5.14062 3H6.64062" stroke="#ABF20D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.8906 1.5H7.39062C6.97641 1.5 6.64062 1.83579 6.64062 2.25V3.75C6.64062 4.16421 6.97641 4.5 7.39062 4.5H11.8906C12.3048 4.5 12.6406 4.16421 12.6406 3.75V2.25C12.6406 1.83579 12.3048 1.5 11.8906 1.5Z" stroke="#ABF20D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='text-xl'>
                    <p>TVL</p>
                    <p>???</p>
                </div>

                <div style={{ userSelect: "none" }}>
                    <div className='text-xl'>Reward</div>
                    <div style={{ width: "8rem", maxHeight: "2rem", marginLeft: "-68%", marginRight: "-5rem" }}>
                        <img src="img/staking/USDT.png" alt="" />
                    </div>
                </div>

                <div className='mt-14 cursor-pointer' onClick={onShowBody}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#ABF20D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div hidden={!isShow}>
                <BodyCard />
            </div>
        </div >
    )
}
