import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import { useEffect, useState, useContext } from 'react';
import { useAccount } from 'wagmi'
import { ListNftContext } from '@/pages/staking';
import { useContractRead } from 'wagmi'
import { NFTaddress, StakingNFTaddress } from "../../../constant/address"
import NFTabi from "../../../constant/NFT.json"
import StakingNFTabi from "../../../constant/StakingNFT.json"

function ListNFT() {
    const { listNFT, setListNFT, listNFTStaked, setListNFTStaked } = useContext(ListNftContext);

    const { address } = useAccount()


    //NFT Staked
    const { data, isError, isLoading } = useContractRead({
        address: StakingNFTaddress,
        abi: StakingNFTabi,
        functionName: 'listNFTStakedOfUser',
        args: [address],
        // watch: true,
    })

    const func = async () => {

        if (!Moralis.Core.isStarted) {
            await Moralis.start({ apiKey: "EIBDKi3YKtDTKYKiQe3X4srciNbHoiUz5nKf3WYvGlkvlLmJnK9gtoF2oVqXZBGw" });
        }

        if (address) {
            const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
                chain: EvmChain.BSC_TESTNET,
                address: address,
                tokenAddresses: ["0xa0F29fa4cb53C9Cc20F1A636DaBD1B4E8a8C91d7"],
            });

            const arrayOfTokenIds = nftList.raw.result.map((obj) => obj.token_id);

            setListNFT(arrayOfTokenIds)
        }

    }

    useEffect(() => {
        const IntData = data?.map(bigInt => Number(bigInt).toString());
        setListNFTStaked(IntData)
    }, [data])

    useEffect(() => {
        func()
        const IntData = data?.map(bigInt => Number(bigInt).toString());
        console.log("CHECK DATA:  ", IntData)
        setListNFTStaked(IntData)
        console.log("See data: ", listNFTStaked)
    }, [address])

    return (
        <div className='hidden'>
            <h3>ListNFT content</h3>
        </div>

    );
}

export default ListNFT