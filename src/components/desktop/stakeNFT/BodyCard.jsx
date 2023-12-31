import React, { useState, useEffect, useContext } from 'react'
import styles from './BodyCard.module.css'
import { Web3Button, useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi'
import DropDown from './DropDown';
import { ListNftContext } from '@/pages/staking';
import { useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { NFTaddress, StakingNFTaddress } from "../../../constant/address"
import NFTabi from "../../../constant/NFT.json"
import StakingNFTabi from "../../../constant/StakingNFT.json"

export default function BodyCard() {
    const { open, close } = useWeb3Modal()

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const { listNFT, setListNFT, listNFTStaked, setListNFTStaked, showLoadingModal,
        setShowLoadingModal, showSuccessModal, setShowSuccessModal,
        showErrorModal, setShowErrorModal } = useContext(ListNftContext);
    const { address, isConnected } = useAccount()

    const options = [''];

    const [selectedOptionFDCBalance, setSelectedOptionFDCBalance] = useState();
    const [selectedOptionFDCStaked, setSelectedOptionFDCStaked] = useState();

    const handleSelectFDCBalance = (option) => {
        setSelectedOptionFDCBalance(option);
    };

    const handleSelectFDCStaked = (option) => {
        setSelectedOptionFDCStaked(option);
    };

    useEffect(() => {
        setSelectedOptionFDCBalance()
        setSelectedOptionFDCStaked()
        if (!address) {
            setListNFT([])
        }
    }, [address])


    // handle stake

    const { data, isLoading: loadingApproval, write: approveNFT } = useContractWrite({
        address: NFTaddress,
        abi: NFTabi,
        functionName: 'approve',
    })

    const { isSuccess, isLoading: isWaitForApproval } = useWaitForTransaction({
        hash: data?.hash,
    });

    useEffect(() => {
        if (isSuccess === true) {
            setShowLoadingModal(true)
            writeStake({ args: [selectedOptionFDCBalance] })
        }
    }, [isSuccess]);

    const { data: dataStake, isLoading: loadingStake, write: writeStake } = useContractWrite({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'stake',
    })

    const { isSuccess: isDoneStake, isLoading: isWaitForStake } = useWaitForTransaction({
        hash: dataStake?.hash
    });

    useEffect(() => {
        if (isDoneStake === true) {
            setListNFT(prev => prev.filter((item) => item != selectedOptionFDCBalance))
            setListNFTStaked(prev => [...prev, Number(selectedOptionFDCBalance).toString()])
            setSelectedOptionFDCBalance()
            setSelectedOptionFDCStaked()
            setShowLoadingModal(false)
            setShowSuccessModal(true)
        }
    }, [isDoneStake]);

    // handle stake

    // handle unstake

    const { data: unStakeData, isLoading: loadingUnStake, write: unStake } = useContractWrite({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'unstake',
        args: [selectedOptionFDCStaked]
    })

    const { isSuccess: isDoneUnstake, isLoading: isWaitForUnSTake } = useWaitForTransaction({
        hash: unStakeData?.hash
    });

    useEffect(() => {
        if (isDoneUnstake === true) {
            setListNFTStaked(prev => prev.filter((item) => item != selectedOptionFDCStaked))
            setListNFT(prev => [...prev, Number(selectedOptionFDCStaked).toString()])
            setSelectedOptionFDCBalance()
            setSelectedOptionFDCStaked()
            setShowLoadingModal(false)
            setShowSuccessModal(true)
        }
    }, [isDoneUnstake]);
    // handle unstake

    // read harvest
    const { data: dataHarvest } = useContractRead({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'viewHarvest',
        args: [address],
        watch: true,
    })
    // read harvest

    // handle harvest
    const { data: harvestData, isLoading: loadingHarvest, write: harvest } = useContractWrite({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'harvest',
    })

    const { isSuccess: isDoneHarvest, isLoading: isWaitForHarvest } = useWaitForTransaction({
        hash: harvestData?.hash
    });

    useEffect(() => {
        if (isDoneHarvest === true) {
            setShowLoadingModal(false)
            setShowSuccessModal(true)
        }
    }, [isDoneHarvest]);
    // handle harvest

    useEffect(() => {
        if (isWaitForApproval || isWaitForHarvest || isWaitForStake || isWaitForUnSTake) {
            setShowLoadingModal(true)
        }
    }, [isWaitForApproval, isWaitForHarvest, isWaitForStake, isWaitForUnSTake])
    // console.log(Number(dataHarvest))

    return (
        <div>
            {isClient ? <div className={`flex p-6 justify-between ${styles.dropdownContent}`}>

                <div className='w-[20%]'>
                    <div className='p-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        <div>USDT per day: ~$1.7</div>
                        <div>Withdrawal Fee: 1%</div>
                        <div className='hover:opacity-70 cursor-pointer' onClick={() => { window.open("https://testnet.bscscan.com/address/0xa0F29fa4cb53C9Cc20F1A636DaBD1B4E8a8C91d7#writeContract") }}>Get FDC</div>
                        <div className='hover:opacity-70 cursor-pointer' onClick={() => { window.open("https://testnet.bscscan.com/address/0x8f6EA3C986B17dAf3D78eF4231C34d903ccD4930#code") }}>View Contract</div>
                    </div>
                    <div className='mt-3 p-4 ' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        <div className='flex'>
                            <div style={{ width: "10rem", marginLeft: "-2rem", marginBottom: "-4.5rem", marginTop: "-1rem" }}>
                                <img src="img/staking/MBCtoken.png" alt="" />
                            </div>
                            <p className='mt-[-0.5rem] ml-[-10px]'>Pending Rewards</p>
                        </div>
                        <div className='flex mt-[0px]'>
                            <div>~{(Number(dataHarvest) / (10 ** 18)) || 0} USD</div>
                            <button className='ml-[1vw] text-xl px-3 text-whtie' disabled={!Number(dataHarvest)} style={{ borderRadius: "12px", backgroundColor: (Number(dataHarvest) ? "#ABF20D" : "rgb(115 115 115)") }}
                                onClick={harvest}>
                                Harvest
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-[37%]'>
                    <div className='p-4 py-10' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        <p>FDC Balance: <span>{listNFT?.length || 0}</span> NFT</p>
                        <DropDown
                            options={listNFT || options}
                            selectedOption={selectedOptionFDCBalance}
                            onSelect={handleSelectFDCBalance}
                        />

                        <div className='flex justify-end mt-2 mr-2'>~0FDC</div>

                        {isConnected ? <div className='mt-5 text-xl'>
                            <button className='px-6 py-2 w-full' disabled={!selectedOptionFDCBalance} style={{ backgroundColor: (selectedOptionFDCBalance ? "#ABF20D" : "rgb(115 115 115)"), borderRadius: "12px" }}
                                onClick={() => approveNFT({ args: [StakingNFTaddress, selectedOptionFDCBalance] })}>
                                <p className='text-white'>Stake</p>
                            </button>
                        </div> :
                            <div className='mt-5 text-xl'>
                                <button className='px-6 py-2' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                    onClick={() => open()}>
                                    <p className='text-white'>Connect Wallet</p>
                                </button>
                            </div>}

                    </div>
                </div>

                <div className='w-[37%]'>
                    <div className='p-4 py-10' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        <p>Stake Balance: <span>{listNFTStaked?.length || 0}</span> NFT</p>
                        <DropDown
                            options={listNFTStaked || options}
                            selectedOption={selectedOptionFDCStaked}
                            onSelect={handleSelectFDCStaked}
                        />
                        <div className='flex justify-end mt-2 mr-2'>~0FDC</div>

                        {isConnected ? <div className='mt-5 text-xl'>
                            <button className='px-6 py-2 w-full' disabled={!selectedOptionFDCStaked && selectedOptionFDCStaked != 0} style={{ backgroundColor: (selectedOptionFDCStaked || selectedOptionFDCStaked == 0 ? "#ABF20D" : "rgb(115 115 115)"), borderRadius: "12px" }}
                                onClick={unStake}>
                                <p className='text-white'>Unstake</p>
                            </button>
                        </div> :
                            <div className='mt-5 text-xl'>
                                <button className='px-6 py-2' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                                    onClick={() => open()}>
                                    <p className='text-white'>Connect Wallet</p>
                                </button>
                            </div>}

                    </div>
                </div>


            </div> : "Error!"}
        </div>
    )
}
