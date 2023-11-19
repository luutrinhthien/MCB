import React from 'react'
import SocialMedia from './Utils/SocialMedia'
import Active from './Utils/Active'
import { Web3Button, useWeb3Modal } from '@web3modal/react';
import { MCB, USDT, ICO } from "../../constant/address"
import ERC20 from "../../constant/ERC20.json"
import ICO_ABI from "../../constant/ICO.json"
import {
    useContractRead, useAccount,
    useContractWrite, useWaitForTransaction
} from 'wagmi'

function Special() {
    const { address } = useAccount()
    const { open, close } = useWeb3Modal()

    const { data: balanceOfMCB } = useContractRead({
        address: MCB,
        abi: ERC20,
        functionName: 'balanceOf',
        args: [address],
        watch: true,
    })

    const { data: balanceOfThis } = useContractRead({
        address: MCB,
        abi: ERC20,
        functionName: 'balanceOf',
        args: [ICO],
        watch: true,
    })

    const { data: balanceOfUSDT } = useContractRead({
        address: USDT,
        abi: ERC20,
        functionName: 'balanceOf',
        args: [address],
        watch: true,
    })

    const { data: AllowanceOfUSDT } = useContractRead({
        address: USDT,
        abi: ERC20,
        functionName: 'allowance',
        args: [address, ICO],
        watch: true,
    })

    const { data: rate } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'rate',
        watch: true,
    })

    const { data: isAllowToTrade } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'isAllowToTrade',
        watch: true,
    })

    const { data: slotUsed } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'slotUsed',
        args: [address],
        watch: true,
    })

    const { data: whitelist } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'whitelist',
        args: [address],
        watch: true,
    })

    const { data: totalSlot } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'totalSlot',
        watch: true,
    })

    const { data: tokenPerSlot } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'tokenPerSlot',
        watch: true,
    })

    const { data: getPricePerSlot } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'getPricePerSlot',
        watch: true,
    })

    const { data: totalSold } = useContractRead({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'totalSold',
        watch: true,
    })

    const { data: approve, isLoading: loadingApproval, write: approveUSDT } = useContractWrite({
        address: USDT,
        abi: ERC20,
        functionName: 'approve',
        args: [ICO, Number(getPricePerSlot)],
    })

    const { isSuccess, isLoading: isWaitForApproval } = useWaitForTransaction({
        hash: approve?.hash,
    });

    const { data: buy, isLoading: loadingBuy, write: buyUSDT } = useContractWrite({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'buyToken',
        args: [Number(getPricePerSlot)],
    })

    // console.log("success approve: ",  Number(AllowanceOfUSDT)/10**18, Number(getPricePerSlot))
    return (
        <div
            style={{ border: "1px solid rgb(171, 242, 13)", borderRadius: "12px" }}
            className='w-[50%] p-4 mx-auto text-[18px]'
        >
            <div className='flex m-4'>
                <div className='w-[72px] flex items-center justify-center'>
                    <img className='items-center' style={{ margin: "0 auto" }} src="img/logo.png" alt="" />
                </div>
                <div className="text-lime-400 text-[20px] space-y-2 ml-8">
                    <div className='flex font-bold'>
                        <div>MultiCurrency Block</div>
                        <div className='w-[26px] ml-2'>
                            <img className='' src="img/metaMask.png" alt="" />
                        </div>
                    </div>
                    <SocialMedia />
                    <div className='flex ml-4'>
                        <Active />
                        <div className='ml-2'>Open</div>
                    </div>
                    <div className='flex'>
                        <img width="26px" className='' src="img/BSC.png" alt="" />
                        <div className='mt-1 ml-2 text-[12px]'>BSC</div>
                    </div>
                </div>
            </div>
            <div>MCB Ventures DAO is transforming the supply production sector with its cutting-edge AgFinTech ecosystem. Leveraging blockchain and crypto-economic mechanisms, our DePINs framework of IoTs and Next-Gen RFIDs allow individuals from around the globe to earn together when creating, managing, and overseeing physical infrastructure networks.</div>
            <div className='text-[20px] font-bold my-2'>Current round: PRE-SEED $250,000 USDT</div>
            <div className='flex ml-4'>
                <Active />
                <div className='ml-2 font-bold text-lime-400 text-[20px]'>Open</div>
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <div className='text-[20px]'>Swap rate (estimate)</div>
                    <div className='font-bold text-[24px] text-lime-400'><span className='font-black'>{1 / Number(rate)}</span> USDT per MCB</div>
                </div>
                <div class="flex-1 pl box-border">
                    <div className='text-[20px] text-right pr-8'>Sold</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-end'>
                        <div className='font-black'>{Number(totalSold)}</div>
                        <div className='mt-4'>MCB</div>
                    </div>
                </div>
                <div class="flex-1">
                    <div className='text-[20px] text-right'>Remaining</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-end'>
                        <div className='font-black'>{(Number(balanceOfThis) / 10 ** 18).toString()}</div>
                        <div className='mt-4'>MCB</div>
                    </div>
                </div>
            </div>
            <div className='text-[16px] my-4'>
                <div>Progress</div>
                <div className='h-[8px] bg-lime-400 rounded-[4px] my-[0.5rem]'></div>
                <div className='flex justify-between'>
                    <div>0.00 %</div>
                    <div className='flex'>0.00 <span className='mt-[0.75rem] mx-1'>/</span> 100,000,000 MCB</div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[25%]'>
                    <div>Total slot</div>
                    <div className='font-bold text-[24px] text-lime-400'>{Number(totalSlot)}</div>
                </div>
                <div className='w-[25%]'>
                    <div className='text-[20px] text-center'>Token per Slot</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-start'>
                        <div className='font-black'>{Number(tokenPerSlot)/10**18}</div>
                        <div className='mt-4'>MCB</div>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div className='text-[20px] text-center'>Price per Slot</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-center'>
                        <div className='font-black'>${Number(getPricePerSlot)/10**18}</div>
                        <div className='mt-4'>USDT</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center my-1'>
                    <div className='text-[24px] font-bold'>Your Account</div>
                    <svg className='mt-2 ml-1' width="20" height="19" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.55957 6L8.55957 10L12.5596 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='border rounded-[16px] p-3 text-[20px] w-[60%] mx-auto my-3'>
                    <div className='font-bold flex'>
                        <div>Balance: </div>
                        <div className='text-[16px] mt-1 ml-1'>
                            <div> {Number(balanceOfUSDT) / (10 ** 18) || "???"} USDT</div>
                            <div> {Number(balanceOfMCB) / (10 ** 18) || "???"} MCB</div>
                        </div>
                    </div>
                    <div className='text-center text-lime-400 font-bold'>
                        {isAllowToTrade ? 'Sale now open.' : 'Sale have not open'}
                    </div>
                    {address ?
                        !slotUsed ?
                            <div className='mt-1 text-center font-bold'>
                                {whitelist ?
                                    (isAllowToTrade ?
                                        Number(AllowanceOfUSDT) !== Number(getPricePerSlot) ?
                                            <button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                                onClick={approveUSDT}>
                                                <p className='text-black'>Approve</p>
                                            </button> :
                                            (<button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                                onClick={buyUSDT}>
                                                <p className='text-black'>Buy</p>
                                            </button>)
                                        :
                                        <div className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#cccccc", borderRadius: "12px", cursor: "not-allowed" }}>
                                            <p className='text-black'>Wait to open trading</p>
                                        </div>)
                                    :
                                    (<div className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#cccccc", borderRadius: "12px", cursor: "not-allowed" }}>
                                        <p className='text-black'>You are not in white list</p>
                                    </div>)
                                }
                            </div>
                            :
                            <div className='px-4 py-3 w-[100%] mt-1 text-center font-bold' style={{ backgroundColor: "#cccccc", borderRadius: "12px", cursor: 'not-allowed' }}>
                                <p className='text-black'>Already buy</p>
                            </div>
                        :
                        <div className='mt-1 text-xl'>
                            <button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                onClick={() => open()}>
                                <p className='text-black'>Connect Wallet</p>
                            </button>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Special