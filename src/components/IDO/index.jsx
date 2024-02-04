import React, { useState, useEffect } from 'react'
import { useContractRead, useAccount } from 'wagmi'
import { Web3Button, useWeb3Modal } from '@web3modal/react';
import Special from './Special';
import HYPERSCALE from './HYPERSCALE';
import MUSHCAPBIO from './MUSHCAPBIO';
import { MCB, USDT, ICO } from "../../constant/address"
import ERC20 from "../../constant/ERC20.json"
import ICO_ABI from "../../constant/ICO.json"
import Menu from './Menu';

export default function IDO() {

  const { open, close } = useWeb3Modal()

  const { address } = useAccount()

  const [isClient, setIsClient] = useState(false)

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient ?
        <div>
          <div className='mt-4 ml-14 flex justify-between md:mr-14 mr-2 text-2xl'>
            <div style={{ width: "3rem" }}>
              <img src="/img/logo.png" alt="" />
            </div>
            <div className='md:flex hidden space-x-4'>
              {/* <a className={`cursor-pointer `} href='/' >Home</a> */}
              {/* <div className={`cursor-pointer `} >OpenSea</div>
              <a className={`cursor-pointer`} href='/staking'>Staking</a> */}
              {/* <div className={`cursor-pointer font-bold`} href='/IDO'>IDO</div> */}
            </div>

            {address ? <div className='mt-0 mb-5 flex'>
              <Web3Button avatar='hide' />
            <svg
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="h-6 w-6 ml-4 md:hidden block"
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
              :
              <div className='md:mt-5 mt-0 text-xl flex'>
                <button className='px-4 py-1' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                  onClick={() => open()}>
                  <p className='text-black'>Connect Wallet</p>
                </button>
            <svg
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="h-6 w-6 ml-4 md:hidden block"
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
              </div>}
              {showMobileMenu && <Menu setShowMobileMenu={setShowMobileMenu} />}
          </div>
          <div className='mt-12 mx-auto'>
            {/* <img src="/img/logo.png" className='mx-auto' width={"240px"} alt="" />
            <div className='text-center mt-6 text-[24px]'>We architect momentum for the leading Blockchain companies</div> */}
            <img className='md:block hidden' src="/img/MCBcard.png" width={"full"} alt="" />
            <img className='md:hidden block' src="/img/Gitbook.png" width={"full"} alt="" />
            <div className="w-[full] relative bg-lime-400 bg-opacity-10 text-center py-5">
              <div className="w-[full]">
                {/* <div className="text-center text-lime-400 text-[40px] font-bold font-['Darker Grotesque']">Your Gateway to DePIN Token Offerings</div> */}
                <div className="text-center text-lime-400 text-[40px] font-bold font-['Darker Grotesque']">Exclusive access to the RWA and DePIN of Sustainability</div>
              </div>
              <div className="w-[full]">
                <div className="md:w-[600px] w-[full] mx-auto">
                  <div className=" text-center text-white text-[20px] font-normal font-['Darker Grotesque']">Discover, Participate, and Invest in Mega Projects</div>
                  <div className=" text-center text-white text-[20px] font-normal font-['Darker Grotesque']">with MCB's Platform. Join the Future of</div>
                  <div className=" text-center text-white text-[20px] font-normal font-['Darker Grotesque']">Decentralized Finance Today!</div>
                </div>
              </div>
            </div>
            <div className="my-3 mb-8 text-center text-lime-400 text-[48px] font-bold">Special</div>
            <Special />
            <div className="mt-8 mb-4 text-center text-lime-400 text-[36px] font-bold">Upcoming Projects</div>
            <div className='md:flex block w-[80%] mx-auto'>
              <HYPERSCALE />
              <MUSHCAPBIO />
            </div>
            <div className='w-[100%] md:mt-[307px] mt-[100px]'>
              <img src="/img/Upcoming/footerIDO.png" className='ml-auto md:block hidden' alt="footer" />
              <div className='md:hidden block w-[90%] mx-auto'>
                <div className='text-[#ABF20D] text-[36px] font-bold mb-6'>Launch a project on MCB now!</div>
                <div className='text-[20px] mb-4'>MCB transcends the traditional role of a token launchpad. While we excel in token sales and marketing, our commitment goes far beyond that. MCB actively engages in real operations and project development work, ensuring that the projects we support not only raise funds successfully but also thrive in their operational endeavors.</div>
                <button className='px-4 py-1 mb-6' style={{ backgroundColor: "#ABF20D", borderRadius: "12px" }}
                  onClick={() => open()}>
                  <p className='text-black'>Apply to Launch</p>
                </button>
              </div>
            </div>
            <div className='md:h-[307px] h-[1228px] mb-[64px] grid grid-cols-4 gap-2 px-2' style={{ backgroundColor: "rgba(20, 29, 2, 1)" }}>
              <div className='md:col-span-1 col-span-4 mx-auto text-center mt-[64px]'>
                <svg className='mx-auto' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1138_357)">
                    <g clip-path="url(#clip1_1138_357)">
                      <path d="M72.8026 18.1187L71.6206 18.4934L65.3254 19.0542L63.5473 21.8937L62.257 21.4837L57.2472 16.9668L56.5203 14.6178L55.5469 12.1128L52.3982 9.28837L48.6834 8.56152L48.5979 10.2617L52.2372 13.8129L54.0178 15.9105L52.0159 16.9567L50.3861 16.4763L47.9441 15.4578L48.027 13.4885L44.8229 12.1706L43.759 16.8008L40.5297 17.5326L40.8491 20.1156L45.0567 20.9254L45.7836 16.7983L49.2568 17.3113L50.8716 18.257H53.462L55.2351 21.8082L59.9357 26.5767L59.5912 28.4303L55.8009 27.9474L49.2518 31.2547L44.5362 36.911L43.9224 39.416H42.2299L39.076 37.9623L36.0127 39.416L36.7748 42.6478L38.1077 41.1111L40.4517 41.0382L40.2883 43.9405L42.2299 44.5089L44.1689 46.6869L47.3354 45.7966L50.952 46.3675L55.1521 47.4968L57.2496 47.7433L60.8059 51.7798L67.6695 55.8165L63.2304 64.2972L58.5448 66.4752L56.7668 71.3217L49.9862 75.8488L49.2644 78.4593C66.598 74.2844 79.4926 58.7139 79.4926 40.0976C79.4876 31.9664 77.0229 24.3987 72.8026 18.1187Z" fill="#ABF20D" />
                      <path d="M44.5339 60.746L41.6568 55.4116L44.2975 49.9088L41.6568 49.119L38.6916 46.1412L32.1223 44.6674L29.9417 40.1051V42.8138H28.9809L23.3196 35.1379V28.8327L19.1698 22.0849L12.5805 23.2594H8.14139L5.90803 21.7957L8.75757 19.5371L5.91558 20.1936C2.4901 26.0436 0.493164 32.8316 0.493164 40.1026C0.493164 61.9155 18.1764 79.6062 39.9918 79.6062C41.6718 79.6062 43.3192 79.4579 44.9489 79.2616L44.5365 74.4756C44.5365 74.4756 46.3498 67.3681 46.3498 67.1266C46.3473 66.8827 44.5339 60.746 44.5339 60.746Z" fill="#ABF20D" />
                      <path d="M15.1701 13.3326L22.1871 12.3543L25.4214 10.5812L29.0607 11.6299L34.8754 11.3081L36.8673 8.17682L39.7722 8.65468L46.8269 7.99323L48.771 5.85042L51.5123 4.01947L55.3906 4.60296L56.804 4.38919C51.6959 1.98481 46.012 0.593994 39.9885 0.593994C27.7276 0.593994 16.7647 6.1824 9.52637 14.9573H9.54649L15.1701 13.3326ZM41.6584 4.52248L45.6926 2.3017L48.2831 3.79815L44.5332 6.65271L40.9517 7.01237L39.3396 5.9661L41.6584 4.52248ZM29.7096 4.84691L31.4902 5.58885L33.8216 4.84691L35.0917 7.04758L29.7096 8.46103L27.1215 6.94697C27.119 6.94697 29.6517 5.31723 29.7096 4.84691Z" fill="#ABF20D" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1138_357">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1138_357">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className='text-[20px] font-[700] mt-1.5' style={{ color: "rgba(171, 242, 13, 1)" }}>Exposure</div>
                <div className='text-[16px] font-[400] mt-9'>Get exposure to the millions of MCB users around the world</div>
              </div>
              <div className='md:col-span-1 col-span-4 mx-auto text-center mt-[64px]'>
                <svg className='mx-auto' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1138_365)">
                    <g clip-path="url(#clip1_1138_365)">
                      <path d="M30.0968 40.3951C32.5737 37.9182 34.1424 34.4506 34.1424 30.5702C34.1424 29.1666 33.7296 27.5979 33.0691 25.9467C32.326 24.2129 31.3352 22.479 30.1794 20.6626C30.1794 20.5801 30.0968 20.5801 30.0968 20.4975C27.7025 16.8648 24.5652 13.3146 21.9231 10.2598L20.2718 8.36084L18.6206 10.2598C13.5017 16.2043 6.40137 24.378 6.40137 30.5702C6.40137 34.368 7.97005 37.8357 10.4469 40.3951C12.9238 42.872 16.3914 44.4407 20.2718 44.4407C24.0698 44.4407 27.5374 42.872 30.0968 40.3951Z" fill="#ABF20D" />
                      <path d="M67.1663 0.930189L66.7534 0.434814L66.3407 0.930189C63.2859 4.48038 59.0752 9.35157 59.0752 12.8192C59.0752 14.9658 59.9008 16.8648 61.3043 18.2683C62.7079 19.6719 64.6069 20.4975 66.7534 20.4975C68.9001 20.4975 70.7991 19.6719 72.2026 18.2683C73.6062 16.8648 74.4317 14.9658 74.4317 12.8192C74.4317 9.35157 70.2211 4.48038 67.1663 0.930189Z" fill="#ABF20D" />
                      <path d="M40.6648 12.4062C39.4264 13.8924 38.0228 15.4611 36.6192 17.1949L34.4726 19.6717C35.4633 21.2404 36.289 22.8091 36.9494 24.3778C37.8577 26.5245 38.353 28.5885 38.353 30.57C38.353 35.5238 36.3715 40.0647 33.069 43.3671C29.7665 46.6697 25.3081 48.6512 20.2718 48.6512C19.1159 48.6512 18.0427 48.5686 16.9694 48.3209C16.5565 48.2383 16.2263 48.1558 15.8134 48.0732C15.6483 48.7338 15.4832 49.3942 15.3181 50.0547C15.0704 51.2932 14.9053 52.449 14.9053 53.6875C14.9053 60.7879 17.795 67.2278 22.4185 71.9338C27.1245 76.6398 33.5644 79.447 40.6648 79.447C47.7651 79.447 54.205 76.5574 58.9111 71.9338C63.6172 67.3103 66.4243 60.7879 66.4243 53.6875C66.4243 42.3764 53.7922 27.8455 44.7103 17.2775C43.3068 15.4611 41.9858 13.8924 40.6648 12.4062Z" fill="#ABF20D" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1138_365">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1138_365">
                      <rect width="69.1358" height="80" fill="white" transform="translate(5.43164)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className='text-[20px] font-[700] mt-1.5' style={{ color: "rgba(171, 242, 13, 1)" }}>Liquidity</div>
                <div className='text-[16px] font-[400] mt-9 leading-[24px]'>Projects that are launched on Launchpad will be listed and have world-class liquidity in multiple trading pairs.</div>
              </div>
              <div className='md:col-span-1 col-span-4 mx-auto text-center mt-[64px]'>
                <svg className='mx-auto' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1138_374)">
                    <g clip-path="url(#clip1_1138_374)">
                      <path d="M72.6058 34.8175C70.1984 34.8175 68.0997 36.4996 67.6058 38.8607H60.7539C60.507 34.0767 58.6089 29.5243 55.3681 25.9903L60.2138 21.1447C62.5595 22.6879 65.7077 22.0551 67.2509 19.7094C68.7941 17.3638 68.1614 14.2156 65.8157 12.6724C63.47 11.1292 60.3219 11.762 58.7787 14.1077C57.683 15.7743 57.6521 17.9193 58.7014 19.6015L53.8095 24.4934C50.2446 21.299 45.6922 19.4471 40.9237 19.2311V12.3793C43.7014 11.8699 45.5379 9.20022 45.0131 6.42245C44.4885 3.64467 41.8651 1.82368 39.1027 2.34837C36.3404 2.87306 34.4885 5.52738 35.0132 8.30516C35.3836 10.2805 36.8651 11.8545 38.8095 12.3329V19.2619C34.0873 19.5398 29.5965 21.4378 26.0934 24.6323L21.2478 19.7867C22.8218 17.4564 22.22 14.2773 19.8743 12.7033C17.5286 11.1292 14.365 11.7311 12.791 14.0767C11.2169 16.4224 11.8188 19.586 14.1644 21.1601C15.8311 22.2866 17.9916 22.3329 19.6891 21.2836L24.5811 26.1601C21.3867 29.7094 19.5194 34.2619 19.3187 39.0459H12.4824C12.0194 36.623 9.9206 34.8792 7.45146 34.8484C4.62739 34.8329 2.32801 37.1014 2.31258 39.9255C2.29714 42.7496 4.56566 45.049 7.38973 45.0644C7.40517 45.0644 7.4206 45.0644 7.45146 45.0644C9.79714 45.0953 11.8651 43.4904 12.4051 41.2064H19.3033C19.5656 45.9286 21.4484 50.4194 24.6429 53.9225L19.8281 58.7527C17.4669 57.1632 14.2725 57.7959 12.683 60.157C11.0934 62.5181 11.7261 65.7126 14.0873 67.302C16.4484 68.8916 19.6429 68.2589 21.2323 65.8978C22.3589 64.2156 22.4051 62.0397 21.3404 60.3113L26.1861 55.4657C29.7046 58.6446 34.2262 60.4965 38.9484 60.7434V67.5645C36.1861 68.1662 34.4422 70.8823 35.0286 73.6447C35.6305 76.407 38.3466 78.1508 41.1088 77.5645C43.8712 76.9626 45.615 74.2465 45.0286 71.4842C44.612 69.5243 43.0687 67.9966 41.1088 67.5645V60.7434C45.8928 60.4965 50.4298 58.5983 53.9638 55.3885L58.7941 60.2188C57.2509 62.5799 57.899 65.7434 60.2602 67.302C62.6212 68.8453 65.7848 68.1972 67.3434 65.8361C68.8866 63.4749 68.2385 60.3113 65.8773 58.7527C64.1953 57.657 62.0348 57.6262 60.3373 58.7064L55.4916 53.8452C58.6706 50.3267 60.5225 45.8051 60.7694 41.0675H67.6366C68.2385 43.8144 70.97 45.5582 73.7168 44.9564C76.4638 44.3546 78.2076 41.623 77.6057 38.8762C77.0811 36.4842 74.9977 34.8175 72.6058 34.8175ZM37.0811 7.3638C37.0811 5.728 38.4083 4.41627 40.0286 4.41627C41.6644 4.41627 42.9762 5.74343 42.9762 7.3638C42.9762 8.9996 41.649 10.3113 40.0286 10.3113C38.4083 10.3113 37.0811 8.98417 37.0811 7.3638ZM40.0286 58.5829C29.7508 58.5829 21.433 50.2496 21.433 39.9873C21.433 29.7249 29.7663 21.3916 40.0286 21.3916C50.291 21.3916 58.6243 29.7249 58.6243 39.9873C58.6243 50.2496 50.291 58.5675 40.0286 58.5829Z" fill="#ABF20D" />
                      <path d="M45.4923 48.1352C44.659 49.1692 43.5325 49.9254 42.1436 50.3884V53.5056H38.1466V50.5118C36.5417 50.1723 35.338 49.4933 34.5356 48.5056C33.6714 47.4254 33.2393 46.1291 33.2393 44.6167H38.301C38.3935 46.0211 38.9646 46.731 40.0448 46.731C41.1713 46.731 41.7424 46.1445 41.7424 44.9872C41.7424 44.2001 41.3103 43.5519 40.4461 43.0273C40.1219 42.8421 39.6898 42.626 39.1189 42.3946L37.5911 41.7773C36.9893 41.5149 36.4799 41.268 36.0634 41.0057C35.5386 40.6816 35.0911 40.3267 34.7361 39.9409C33.8719 38.984 33.4398 37.7495 33.4398 36.2218C33.4398 33.1044 35.014 31.0983 38.1775 30.2341V27.2402H42.1745V30.2341C44.9677 30.8822 46.3411 32.7032 46.2948 35.7124V35.8514H41.7115C41.6343 34.6013 41.0942 33.984 40.0757 33.984C39.0108 33.984 38.4708 34.5396 38.4708 35.6507C38.4708 36.4378 38.9646 37.1014 39.9677 37.6569C40.3071 37.8575 40.7547 38.0427 41.2794 38.2433L42.4831 38.6909C43.8102 39.2001 44.8442 39.9255 45.6003 40.8514C46.4337 41.8545 46.8503 43.0273 46.8503 44.3853C46.8041 45.7896 46.372 47.0396 45.4923 48.1352Z" fill="#ABF20D" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1138_374">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1138_374">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className='text-[20px] font-[700] mt-1.5' style={{ color: "rgba(171, 242, 13, 1)" }}>Token Distribution</div>
                <div className='text-[16px] font-[400] mt-9 leading-[24px]'>Your token will immediately be distributed to a large user base that hold your token.</div>
              </div>
              <div className='md:col-span-1 col-span-4 mx-auto text-center mt-[64px]'>
                <svg className='mx-auto' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1138_382)">
                    <g clip-path="url(#clip1_1138_382)">
                      <path d="M74.743 36.1478C72.6437 17.8355 56.9937 3.39771 37.8203 3.39771C17.3512 3.39771 0.628906 19.9596 0.628906 40.4348C0.628906 60.9039 17.3451 77.4718 37.8203 77.4718C47.7147 77.4718 57.017 73.6197 64.0088 66.6233L60.7356 63.35C54.6162 69.4716 46.4783 72.8422 37.8203 72.8422C19.9106 72.8422 5.25854 58.3511 5.25854 40.4348C5.25854 22.525 19.9039 8.02734 37.8203 8.02734C54.4352 8.02734 68.0891 20.4235 70.0933 36.3213C67.5523 37.3542 65.7523 39.8419 65.7523 42.7495C65.7523 43.4202 65.7523 55.1503 65.7523 54.3236H70.382V49.694H75.0116V54.3236H79.6412C79.6412 53.6529 79.6412 41.9229 79.6412 42.7495C79.6412 39.637 77.5698 37.0275 74.743 36.1478Z" fill="#ABF20D" />
                      <path d="M14.9062 38.1199H28.6061C28.9807 27.6877 31.8981 17.2866 37.8204 17.2866C25.8499 17.2866 16.0871 26.4554 14.9062 38.1199Z" fill="#ABF20D" />
                      <path d="M37.8199 21.9163C36.7112 21.9163 33.6803 27.521 33.2715 38.1199H42.3686C41.9596 27.521 38.9288 21.9163 37.8199 21.9163Z" fill="#ABF20D" />
                      <path d="M37.8203 17.2866C43.7427 17.2866 46.6599 27.6877 47.0346 38.1199H60.7345C59.5536 26.4554 49.7908 17.2866 37.8203 17.2866Z" fill="#ABF20D" />
                      <path d="M14.9062 42.7495C16.0871 54.414 25.8499 63.5829 37.8204 63.5829C31.8981 63.5829 28.9807 53.1818 28.6061 42.7495H14.9062Z" fill="#ABF20D" />
                      <path d="M60.7345 42.7495H47.0346C46.6599 53.1818 43.7427 63.5829 37.8203 63.5829C49.7908 63.5829 59.5536 54.414 60.7345 42.7495Z" fill="#ABF20D" />
                      <path d="M37.8201 58.9533C38.9289 58.9533 41.9598 53.3484 42.3686 42.7495H33.2715C33.6805 53.3484 36.7113 58.9533 37.8201 58.9533Z" fill="#ABF20D" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1138_382">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1138_382">
                      <rect width="80" height="75.0617" fill="white" transform="translate(0 2.46924)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className='text-[20px] font-[700] mt-1.5' style={{ color: "rgba(171, 242, 13, 1)" }}>Future Synergy</div>
                <div className='text-[16px] font-[400] mt-9 leading-[24px]'>Project will receive extensive support and advice even after listing, having access to all areas of the MCB ecosystem.</div>
              </div>
            </div>
          </div>
        </div> : <div>"Waiting..."</div>}
    </div>
  )
}
