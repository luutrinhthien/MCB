import React from 'react'
import styles from './Landing.module.css';
import Landing2 from './Landing2';

export default function LandingPage({openModal}) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4900);

    return () => clearTimeout(timeout);
  }, []);

  return (
    // <div className={`flex justify-center items-center min-h-screen `}>
    <div className={`flex justify-center items-center min-h-screen `}>
      <div className={`relative ${styles.animateFadeOut}`} hidden={!isVisible}>
        <img src="/img/landingMobile/background-gradient.png" alt="" />
        <img src="/img/landingMobile/landingRobot.png" className={`absolute top-3 left-3 ${styles.landingRobot}`} alt="" />
      </div>
      <div hidden={isVisible}>
        <Landing2 />
      </div>
      <div className='absolute bottom-4 text-sm'>
        <div onClick={openModal} className={`border border-white p-3 mb-6 text-md text-center ${styles.Landing2} cursor-pointer`} style={{ borderRadius: "30px" }} hidden={isVisible}>
          Ask our Earth Bot to Explore
        </div>
        Copyright ©2023 MultiCurrency Block. All rights reserved
      </div>
    </div>
  )
}
