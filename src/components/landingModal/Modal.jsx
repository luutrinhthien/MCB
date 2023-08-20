import { useState, useEffect } from 'react';
import styles from './Modal.module.css'
import DefaultChild from './defaultChild';
import LoadingChild from './LoadingChild';
import ResultChild from './ResultChild';

const Modal = ({ showModal, setShowModal }) => {
    const [isMounted, setIsMounted] = useState(false);

    const [input, setInput] = useState("")

    const [isFinding, setIsFinding] = useState(false)
    const [isResult, setIsResult] = useState(false)

    useEffect(() => {
        let timer1
        if (isFinding === false) { }
        else
            timer1 = setTimeout(() => setIsResult(true), 2000)

        return () => {
            clearTimeout(timer1);
        };
    }, [isFinding])

    useEffect(() => {
        if (input === "") {
            setIsFinding(false)
            setIsResult(false)
        } else {
            setIsFinding(true)
        }
    }, [input])

    useEffect(() => {
        setIsMounted(showModal);

        const handleScroll = (event) => {
            event.preventDefault();
        };

        document.body.style.overflowY = showModal ? 'hidden' : 'auto';
        document.addEventListener('scroll', handleScroll, { passive: false });

        return () => {
            document.body.style.overflowY = 'auto';
            document.removeEventListener('scroll', handleScroll);
        };
    }, [showModal]);

    const closeModal = () => {
        setIsMounted(false);
        setIsFinding(false)
        setIsResult(false)
        setInput("")

        setTimeout(() => {
            setShowModal(false);
        }, 300);
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-75 ${isMounted ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300`}
                        onClick={closeModal}
                    ></div>
                    <div className={`bg-black rounded-xl shadow-md relative z-10 overflow-y-auto max-h-[90vh] md:w-2/5 w-4/5 text-lg ${styles.modalChatBot}`}>
                        <div className='rounded-xl border border-white' >
                            <div className='border-b border-white'>
                                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Ask a question ...' className='w-full bg-black rounded-xl p-1 px-4 focus:border-transparent focus:outline-none font-bold' />
                            </div>
                            {!isFinding && !isResult && <DefaultChild setInput={setInput} />}
                            {isFinding && !isResult && <LoadingChild />}
                            {isResult && <ResultChild />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;