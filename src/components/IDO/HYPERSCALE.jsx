import React from 'react'
import SocialMedia from './Utils/SocialMedia'
import Active from './Utils/Active'

function HYPERSCALE() {
    return (
        <div
            style={{ border: "1px solid rgb(171, 242, 13)", borderRadius: "12px" }}
            className='md:w-[45%] w-[100%] p-4 mx-auto text-[18px]'
        >
            <div className='flex m-4'>
                <div className='w-[72px] flex items-center justify-center'>
                    <img className='items-center' style={{ margin: "0 auto" }} src="img/upcoming/left.png" alt="" />
                </div>
                <div className="text-lime-400 text-[20px] space-y-2 ml-8">
                    <div className='flex font-bold'>
                        <div>HYPERSCALE</div>
                    </div>
                    <SocialMedia />
                    <div className='flex ml-4'>
                        <Active />
                        <div className='ml-2'>Coming</div>
                    </div>
                </div>
            </div>
            <div className='text-[18px] leading-[24px] font-medium h-[160px] mt-8'>
                HyperScale aims to become the market leader in next generation data center solutions by providing unmatched performance, scalability, energy efficiency, and versatility through its state-of-the-art infrastructure and strategic partnerships.
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <div className='text-[16px]'>Swap rate</div>
                    <div className='font-bold text-[20px] text-lime-400'>TBA</div>
                </div>
                <div class="flex-1 pl box-border">
                    <div className='text-[16px] text-right pr-8'>Cap</div>
                    <div className='flex font-bold text-[20px] text-lime-400 justify-end'>
                        <div className='font-bold'>500,000</div>
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

export default HYPERSCALE