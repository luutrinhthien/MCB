import React from 'react';
import styles from './Menu.module.css'

const Menu = ({ setShowMobileMenu }) => {
    return <div className={`px-2 py-3 space-y-2 font-medium text-slate-700 absolute right-0 left-0 top-0 bottom-0 ${styles.slideIn}`} style={{ backgroundColor: "black", zIndex: "100" }}>
        <div className='flex justify-end'>
            <svg
                onClick={() => setShowMobileMenu(prev => !prev)}
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </div>
        <a
            href='/'
            className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Home
        </a>
        <a
            onClick={() => setShowMobileMenu(prev => !prev)}
            className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Staking
        </a>
        <a
            onClick={() => setShowMobileMenu(prev => !prev)}
            className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Open Sea
        </a>
    </div>
}

export default Menu;