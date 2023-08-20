import React, { useState } from 'react';

const Dropdown = ({ options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block w-full mt-3">
            <button
                type="button"
                onClick={toggleDropdown}
                className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                aria-haspopup="true"
                aria-expanded={isOpen}
                style={{ borderColor: "#ABF20D", borderRadius: "14px", border: "1px solid #ABF20D", backgroundColor: "black", color: "white" }}
            >
                <p className='font-bold'> {selectedOption ?? <span className='text-neutral-600'>Please choose your NFT</span>} </p>
                <svg
                    className="h-5 w-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div
                className={`absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 bg-[#E0FF69] transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-menu-button"
                tabIndex="-1"
                hidden={!isOpen}
                // hidden={!isOpen || options.length == 0 || !options}
                style={{ maxHeight: '200px', overflowY: 'scroll' }}
            >
                <div className="py-1" role="none">
                    {options.length != 0 && options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onSelect(option);
                                toggleDropdown(); // Close the dropdown after selecting an option
                            }}
                            className="block w-full px-4 py-2 text-gray-700 hover:bg-[#ABF20D] hover:text-black"
                            role="menuitem"
                            tabIndex="-1"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
