import React, { useContext } from "react";
import { ListNftContext } from "../../pages/staking/index"

export default function Modal() {

    const { showErrorModal, setShowErrorModal } = useContext(ListNftContext)

    return (
        <>
            {
                showErrorModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] outline-none focus:outline-none backdrop-blur-sm backdrop-brightness-75"
                            onClick={() => setShowErrorModal(false)}
                        >
                            <div className="relative w-auto my-6 mx-auto md:w-[50%] w-[90%]">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowErrorModal(false)}
                                        >
                                            <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                X
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 mx-auto text-red-500 font-bold text-3xl">
                                        Error !
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowErrorModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
        </>
    );
}