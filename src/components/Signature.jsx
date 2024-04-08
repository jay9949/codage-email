import React, { useState } from 'react';
import logoLight from "/assets/cricleBlack.svg";
import logoDark from "/assets/themewhite.svg";
import linkDark from "/assets/link.svg";
import linkLight from "/assets/link-light.svg";
import contactDark from "/assets/contact.svg";
import contactLight from "/assets/contact-light.svg";
import sun from "/assets/sun-icon.svg"
import moon from "/assets/moon-icon.svg"

const Signature = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const logoImage = isLightMode ? logoDark : logoLight;
  const linkImage = isLightMode ? linkDark : linkLight;
  const contactImage = isLightMode ? contactDark : contactLight;
  const btnImage = isLightMode ? moon : sun;

  return (
    <div className={`relative lg:w-full md:w-full md:h-[500px] small:w-full small:h-[500px] sm:w-[110%] sm:h-[490px] ${isLightMode ? 'bg-white' : 'bg-[#000000]'}`}>
      <div className={`xl:px-9 xl:py-6 lg:px-5 lg:py-3 absolute right-6 bottom-6 flex top-[6%] left-[2%]`}>
        <div className='xl:pt-9 xl:pl-40 sxl:pt-9 sxl:pl-20 lg:pt-9 lg:pl-14 md:pt-9 md:pl-10 sm:pt-9 sm:pl-9'>
          <img src={logoImage} alt="logo" className='xl:w-[200px] lg:w-[180px] xl:h-[200px] lg:h-[180px] sm:w-[150px] sm:h-[150px]' />
        </div>
        <div className={`border-l ${isLightMode ? 'border-black' : 'border-white'} md:h-52 sm:h-48 mt-7 md:ml-16 sm:ml-6 pt-2`}>
          <div className='md:flex sm:block'>
            <h3 className={`text-${isLightMode ? 'black' : 'white'} text-[28px] font-semibold leading-[19.5px] md:pl-11 sm:pl-5 font`}>Krishna Patel</h3>
            <div className={`border-r ${isLightMode ? 'border-r-black opacity-100' : 'border-r-white '} opacity-45 h-6 md:pl-10 sm:pl-4 md:block sm:hidden `} />
            <h4 className={`md:pl-10 sm:pl-5 md:pt-0 sm:pt-6 font-normal text-[15px] text-${isLightMode ? 'black' : 'white'} font`}>HR, Codage Habitation</h4>
          </div>
          <div className='md:ml-11 md:pt-12 sm:ml-5 sm:pt-5'>
            <h3 className={`font text-${isLightMode ? 'black' : 'white'}`}>315, Fortune Business Hub, Near shell petrol pump, Science city road, Ahmedabad. </h3>
          </div>
          <div className='md:ml-11 sm:ml-5 md:pt-7 sm:pt-3 md:flex font'>
            <a href="mailto:https://codagehabitation.com/" className={`text-${isLightMode ? 'black' : 'white'}`}>https://codagehabitation.com</a>
            <div className={`md:border-r ${isLightMode ? 'md:border-r-black opacity-100' : 'md:border-r-white '} opacity-45 h-6 md:pl-10 sm:pl-0 md:visible sm:hidden`} />
            <a href="#" className={`md:border-b md:border-b-[#000EE6] text-[#000EE6] md:ml-10 sm:ml-4 font font-medium`}>Slot Your Interview</a>
          </div>
          <div className='md:ml-11 pt-4 sm:ml-5 flex items-center'>
            <a href="https://in.linkedin.com/company/codage-habitation" target='_blank'><img src={linkImage} alt="linkedin" className='w-8 cursor-pointer' /></a>
            <a href="#" className={`text-[28px] ml-5 text-${isLightMode ? 'black' : 'white'} font-semibold`}><img src={contactImage} alt="linkedin" className='w-8 cursor-pointer' /></a>
          </div>
        </div>
      </div>
      <div className={`border-b ${isLightMode ? 'border-b-black' : 'border-b-white'} opacity-50 h-1 md:w-[80%] sm:w-[90%] absolute md:top-[68%] md:left-[10%] sm:top-[60%] sm:left-[5%]`} />
      <div className='absolute lg:top-[75%] lg:left-[7%] sxl:left-[13%] xl:left-[21%] md:top-[73%] md:left-[6%] items-center lg:w-[55.2rem] md:w-[43rem] sm:top-[65%] sm:left-[4%] sm:w-[40rem]'>
        <p className={`text-${isLightMode ? 'black' : 'white'} text-center font font-normal tracking-[1px] `}><span className={`text-${isLightMode ? 'black' : 'white'} font-semibold`}>CONFIDENTIALITY NOTICE:</span> This email is for the use of the intended recipient(s) only. If you have received this email in error, please notify me immediately and then delete it. Copyright © 2024 CODAGE HABITATION. All Rights Reserved</p>
      </div>

      <button onClick={toggleMode} className={`absolute top-4 right-4 px-4 py-2 ${isLightMode ? 'bg-black text-white' : 'bg-white text-black'}  rounded-md`}><img src={btnImage} alt='sun' className='w-6 h-6' /></button>
    </div>
  );
}

export default Signature;