import React, { useState, useEffect, useContext } from 'react'
import styles from './BodyCard.module.css'
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi'
import DropDown from './DropDown';
import { ListNftContext } from '@/pages/staking';
import { useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { NFTaddress, StakingNFTaddress } from "../../../constant/address"
import NFTabi from "../../../constant/NFT.json"
import StakingNFTabi from "../../../constant/StakingNFT.json"

export default function BodyCard() {
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
            showSuccessModal(true)
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
            {isClient ? <div className={` p-6 justify-between ${styles.dropdownContent}`}>
                <div className='w-[100%]'>
                    <div className='p-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        USDT per day: ~$1.7
                        Withdrawal Fee: 1%
                        Get FDC
                        View Contract
                        View Exchange
                    </div>
                    <div className='mt-3 p-4 ' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
                        <div className='flex'>
                            <div style={{ width: "10rem", marginLeft: "-15%", marginBottom: "-30%", marginTop: "-8%" }}>
                                <img src="img/staking/MBCtoken.png" alt="" />
                            </div>
                            <p className='mt-[-10px] ml-[-1rem]'>Pending Rewards</p>
                        </div>
                        <div className='flex mt-[0px] ml-3'>
                            <div>~{(Number(dataHarvest) / (10 ** 18)) || 0} USD</div>
                            <button className='ml-[2rem] text-xl px-3 text-black' disabled={!Number(dataHarvest)} style={{ borderRadius: "12px", backgroundColor: (Number(dataHarvest) ? "#ABF20D" : "rgb(115 115 115)") }}
                                onClick={harvest}>
                                Harvest
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-3 w-[100%]'>
                    <div className='p-4 py-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
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
                                <p className='text-black'>Stake</p>
                            </button>
                        </div> : <Web3Button />}

                    </div>
                </div>

                <div className='mt-3 w-[100%]'>
                    <div className='p-4 py-4' style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D" }}>
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
                                <p className='text-black'>Unstake</p>
                            </button>
                        </div> : <Web3Button />}

                    </div>
                </div>


            </div> : "Error!"}
        </div>
    )
}
