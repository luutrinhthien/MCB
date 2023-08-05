import React from 'react'

export default function DefaultChild({ setInput }) {
    return (
        <ul className='m-4'>
            <li className='font-bold pl-1'>You might be interested in</li>
            <li onClick={() => setInput("What is MCB?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>What is MCB?</li>
            <li onClick={() => setInput("What is the purpose of tokenizing the 2.0 Green Revolution?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>What is the purpose of tokenizing the 2.0 Green Revolution?</li>
            <li onClick={() => setInput("How will tokenizing the Green Revolution benefit NFT owners?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>How will tokenizing the Green Revolution benefit NFT owners?</li>
            <li onClick={() => setInput("How will blockchain technology be used in premium grade cultivation project?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>How will blockchain technology be used in premium grade cultivation project?</li>
            <li onClick={() => setInput("How will the project ensure that the GroSeries NFTs are secured?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>How will the project ensure that the GroSeries NFTs are secured?</li>
            <li onClick={() => setInput("What types of rewards can be offered to NFT owners?")} className='hover:bg-zinc-800 p-1 cursor-pointer'>What types of rewards can be offered to NFT owners?</li>
        </ul>
    )
}
