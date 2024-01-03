import React from 'react'
import SocialMedia from './Utils/SocialMedia'
import Active from './Utils/Active'

function MUSHCAPBIO() {
    return (
        <div
            style={{ border: "1px solid rgb(171, 242, 13)", borderRadius: "12px" }}
            className='md:w-[45%] w-[100%] md:mt-0 mt-8 p-4 mx-auto text-[18px]'
        >
            <div className='flex m-4'>
                <div className='w-[72px] flex items-center justify-center'>
                    <img className='items-center' style={{ margin: "0 auto" }} src="img/upcoming/right.png" alt="" />
                </div>
                <div className="text-lime-400 text-[20px] space-y-2 ml-8">
                    <div className='flex font-bold'>
                        <div>MUSHCAPBIO</div>
                    </div>
                    <SocialMedia />
                    <div className='flex ml-4'>
                        <Active />
                        <div className='ml-2'>Coming</div>
                    </div>
                </div>
            </div>
            <div className='text-[18px] leading-[24px] font-medium h-[160px] mt-8'>
                Mushroom cultivation in the field of biotechnology holds immense financial viability beyond just consumption. The diverse applications of mushrooms in medicine, biofuel production, biodegradable textiles, alternative construction materials, and eco-friendly packaging solutions contribute to a thriving market with promising economic prospects.
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <div className='text-[16px]'>Swap rate</div>
                    <div className='font-bold text-[20px] text-lime-400'>TBA</div>
                </div>
                <div class="flex-1 pl box-border">
                    <div className='text-[16px] text-right pr-8'>Cap</div>
                    <div className='flex font-bold text-[20px] text-lime-400 justify-end'>
                        <div className='font-bold'>100,000</div>
                        <div className=''>USDT</div>
                    </div>
                </div>
                <div class="flex-1">
                    <div className='text-[16px] text-right'>Access</div>
                    <div className='flex font-bold text-[20px] text-lime-400 justify-end'>
                        <div className='font-bold'>Exclusive</div>
                    </div>
                </div>
            </div>
            <div className='text-[16px] my-4'>
                    <div>Progress</div>
                    <div className='h-[8px] w-[26px] bg-lime-400 rounded-[4px] my-[0.5rem]'></div>
                        <div>0.00 %</div>
                </div>
        </div>
    )
}

export default MUSHCAPBIO