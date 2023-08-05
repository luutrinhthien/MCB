import React, { useState } from 'react'
import Source from './Source'

export default function ResultChild() {

    const [showSource, setShowSource] = useState(false)

    const handleSeeSource = () => {
        setShowSource(prev => !prev)
    }

    return (
        <div>
            <div className='m-4'>
                <div className='font-bold my-3'>What is MCB</div>
                <div>
                    MCB is a blockchain-based platform that aims to provide a comprehensive and much-needed ecosystem of services for the agriculture industry. It has five core modules: Launchpad, Marketplace, DeFi/GameFi/SocialFi, E-Commerce, and Venture Capital, which provide a promising path for the agriculture industry's future growth and success. MCB also has a native token called MCB token that can be used for various purposes such as accessing exclusive content, participating in governance, and receiving rewards.
                </div>
                <div className='my-4 mb-6'>
                    <ul className='flex flex-wrap'>
                        <li className='bg-zinc-800 px-3 m-1 cursor-pointer'>What is the purpose of the MCB platform?</li>
                        <li className='bg-zinc-800 px-3 m-1 cursor-pointer'>What are the five core modules of MCB?</li>
                        <li className='bg-zinc-800 px-3 m-1 cursor-pointer'>What is MCB token used for?</li>
                    </ul>
                </div>
            </div>
            <div className={`border-t p-4 hover:text-blue-800  ${showSource === true ? "text-blue-800" : ""}`}
                style={{ userSelect: "none" }}>
                <p className='cursor-pointer flex' onClick={handleSeeSource}>Answer based on 15 sources &nbsp; {showSource === false ? `>` : <svg className='mt-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="rgb(30 64 175)" strokeWidth="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}</p>
                {showSource && <Source />}
            </div>
        </div>
    )
}
