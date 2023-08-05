import React from 'react'
import styles from './Landing.module.css';

export default function Landing2() {
    return (
        <div className={`${styles.landing2} flex justify-center items-center min-h-screen`}>
            <div className='absolute top-12'>
                <img className='ml-5' src="/img/logo.png" width={"56rem"} height={"32rem"} alt="" />
                <div className='flex mt-3 text-center'>
                    <a className='mr-3 cursor-pointer'>Home</a>
                    <div className='cursor-pointer'>OpenSea</div>
                </div>
            </div>
            <div className='text-4xl text-center'>
                <div>Tokenizing the 2.0 </div>
                <div className='mt-6'>Green Revolution with </div>
                <div className='mt-6'>Blockchain and AI</div>
            </div>
        </div>
    )
}
