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
    const [input, setInput] = React.useState('')

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        // Check if the input is a valid number but a float number
        if (/^[0-9]*$/.test(inputValue)) {
            setInput(inputValue);
        }
    }

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

    // const { data: getPricePerSlot } = useContractRead({
    //     address: ICO,
    //     abi: ICO_ABI,
    //     functionName: 'getPricePerSlot',
    //     watch: true,
    // })

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
        args: [ICO, BigInt((Number(input) / Number(rate) || 0) * 10 ** 25 / 10 ** 7)],
    })

    const { isSuccess, isLoading: isWaitForApproval } = useWaitForTransaction({
        hash: approve?.hash,
    });

    const { data: buy, isLoading: loadingBuy, write: buyUSDT } = useContractWrite({
        address: ICO,
        abi: ICO_ABI,
        functionName: 'buyToken',
        args: [BigInt((Number(input) / Number(rate) || 0) * 10 ** 25 / 10 ** 7)],
    })

    const formatNumber = (num) => {
        return (num).toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
    const { isSuccess: buyDone } = useWaitForTransaction({
        hash: buy?.hash,
    });

    React.useEffect(() => {
        if (buyDone) {
            setInput('')
        }
    }, [buyDone])

    const [progress, setProgress] = React.useState("1%")

    const divStyle = {
        width: progress,
    };

    React.useEffect(() => {
        if (totalSold) {
            const percent = (Number(totalSold) / (20000000 * 10 ** 18)) * 100
            // console.log("C: ",percent+"%")
            if (percent < 1) {
                setProgress("1%")
            } else {
                setProgress(percent + "%")
            }
        }
    }, [totalSold])

    return (
        <div
            style={{ border: "1px solid rgb(171, 242, 13)", borderRadius: "12px" }}
            className='md:w-[50%] w-[95%] p-4 mx-auto text-[18px]'
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
            <div>MCB Ventures DAO is at the forefront of transforming G2G projects using RWA and DePIN models. We facilitates a decentralized, robust, and smooth operation, eliminating the necessity for central trust or permissions in serving multi-trillion-dollar real-world economies.</div>
            <div className='text-[20px] font-bold my-2'>Current round: SEED $50,000 USDT</div>
            <div className='flex ml-4'>
                <Active />
                <div className='ml-2 font-bold text-lime-400 text-[20px]'>Open</div>
            </div>
            <div class="flex space-x-4">
                <div class="md:block block">
                    <div className='text-[20px]'>Swap rate (estimate)</div>
                    <div className='font-bold text-[24px] text-lime-400'><span className='font-black'>{1 / Number(rate)}</span> USDT per MCB</div>
                </div>
                <div class="md:flex-1 block pl box-border">
                    <div className='text-[20px] text-right pr-8'>Sold</div>
                    <div className='flex font-bold text-[24px] text-lime-400 md:justify-end justify-center'>
                        <div className='font-black'>{formatNumber(Number(totalSold) / 10 ** 18)}</div>
                        <div className='mt-4'>MCB</div>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <div class="md:flex-1 block">
                        <div className='text-[20px] text-right'>Remaining</div>
                        <div className='flex font-bold text-[24px] text-lime-400 justify-end'>
                            <div className='font-black'>{formatNumber(Number(balanceOfThis) / 10 ** 18).toString()}</div>
                            <div className='mt-4'>MCB</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex justify-normal'>
                    <div class="md:flex-1 block text-left">
                        <div className='text-[20px] text-left'>Remaining</div>
                        <div className='flex font-bold text-[24px] text-lime-400 justify-end'>
                            <div className='font-black text-left'>{formatNumber(Number(balanceOfThis) / 10 ** 18).toString()}</div>
                            <div className='mt-4 text-left'>MCB</div>
                        </div>
                    </div>
                </div>
            <div className='text-[16px] my-4'>
                <div>Progress</div>
                {totalSold && <div className={`h-[8px] bg-lime-400 rounded-[4px] my-[0.5rem] `}
                    style={divStyle}
                ></div>}
                <div className='flex justify-between'>
                    <div>{Math.floor(Number(totalSold) / (20000000 * 10 ** 18) * 1000000) / 1000000 * 100}%</div>
                    <div className='flex'>{formatNumber(Number(totalSold) / 10 ** 18)} <span className='mt-[0.75rem] mx-1'>/</span> 20,000,000 MCB</div>
                </div>
            </div>
            {/* <div className='flex'>
                <div className='w-[25%]'>
                    <div>Total slot</div>
                    <div className='font-bold text-[24px] text-lime-400'>{Number(totalSlot)}</div>
                </div>
                <div className='w-[25%]'>
                    <div className='text-[20px] text-center'>Token per Slot</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-start'>
                        <div className='font-black'>{formatNumber(Number(tokenPerSlot)/10**18)}</div>
                        <div className='mt-4'>MCB</div>
                    </div>
                </div>
                <div className='w-[25%] md:hidden block'>
                </div>
                <div className='w-[25%]'>
                    <div className='text-[20px] text-center'>Price per Slot</div>
                    <div className='flex font-bold text-[24px] text-lime-400 justify-center'>
                        <div className='font-black'>${formatNumber(Number(getPricePerSlot)/10**18)}</div>
                        <div className='mt-4'>USDT</div>
                    </div>
                </div>
            </div> */}
            <div>
                <div className='flex justify-center my-1'>
                    <div className='text-[24px] font-bold'>Your Account</div>
                    <svg className='mt-2 ml-1' width="20" height="19" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.55957 6L8.55957 10L12.5596 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='border rounded-[16px] p-3 text-[20px] md:w-[60%] w-[90%] mx-auto my-3'>
                    <div className='font-bold flex'>
                        <div>Balance: </div>
                        <div className='text-[16px] mt-1 ml-1'>
                            <div> {formatNumber(Number(balanceOfUSDT) / (10 ** 18)) || "???"} USDT</div>
                            <div> {formatNumber(Number(balanceOfMCB) / (10 ** 18)) || "???"} MCB</div>
                        </div>
                    </div>
                    <div className='text-center text-lime-400 font-bold'>
                        {isAllowToTrade ? 'Sale now open.' : 'Sale is not open.'}
                    </div>
                    {address ?
                        <div className='mt-1 text-center font-bold'>
                            <div className='flex p-1 px-2 mb-2 relative' style={{ borderColor: "#ABF20D", borderRadius: "12px", border: "2px solid #ABF20D", width: "100%", height: "3rem" }}>
                                <input value={input} onChange={handleInputChange}
                                    type="text"
                                    placeholder='Enter MCB amount...'
                                    className=' bg-black rounded-xl p-1 px-4 focus:border-transparent focus:outline-none font-bold w-[85%]'
                                />
                                <div className='mt-0.5 mr-4 text-lime-400 font-bold absolute right-0'>MCB</div>
                            </div>
                            {rate && input && <div className='mb-2 text-right'>With {formatNumber(Number(input) / Number(rate))} USDT</div>}
                            {!rate || !input && <div className='mb-2 text-right'>With ??? USDT</div>}
                            {isAllowToTrade ?
                                (input && input != 0 ? Number(AllowanceOfUSDT) < Number((Number(input) / Number(rate)) * 10 ** 18) ?
                                    <div>
                                        <button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                            onClick={approveUSDT}>
                                            <p className='text-black'>Approve</p>
                                        </button> </div> :
                                    (<button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                        onClick={buyUSDT}>
                                        <p className='text-black'>Buy</p>
                                    </button>)
                                    :
                                    <button className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                        onClick={approveUSDT}>
                                        <p className='text-black'>Approve</p>
                                    </button>
                                )
                                :
                                <div className='px-4 py-3 w-[100%]' style={{ backgroundColor: "#cccccc", borderRadius: "12px", cursor: "not-allowed" }}>
                                    <p className='text-black'>Wait to open trading</p>
                                </div>}
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