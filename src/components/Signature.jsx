import React, { useEffect, useState } from 'react';
import logoLight from "/assets/cricleBlack.svg";
import logoDark from "/assets/themewhite.svg";
import linkDark from "/assets/link.svg";
import linkLight from "/assets/link-light.svg";
import contactDark from "/assets/contact.svg";
import contactLight from "/assets/contact-light.svg";

const Signature = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const updateMode = () => {
      setIsLightMode(!window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    updateMode();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateMode);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateMode);
    };
  }, []);

  const logoImage = isLightMode ? logoDark : logoLight;
  const linkImage = isLightMode ? linkDark : linkLight;
  const contactImage = isLightMode ? contactDark : contactLight;

  return (
    <div className={`relative lg:w-full md:w-full md:h-[500px] mx:w-full mx:h-[606px] sm:w-[110%] sm:h-[490px] small:w-full small:h-[608px] ${isLightMode ? 'bg-white' : 'bg-[#000000]'}`}>
      <div className={`xl:px-9 xl:py-6 lg:px-5 lg:py-3 mx:px-4 absolute right-6 bottom-6 flex top-[0%] left-[2%]`}>
        <div className='xl:pt-9 xl:pl-40 sxl:pt-9 sxl:pl-20 lg:pt-9 lg:pl-14 md:pt-9 md:pl-10 sm:pt-9 sm:pl-9 mx:pt-7 mx:pl-7 small:pt-14 small:pl-5'>
          <img src={logoImage} alt="logo" className='xl:w-[200px] lg:w-[180px] xl:h-[200px] lg:h-[180px] sm:w-[150px] sm:h-[150px] mx:w-32 mx:h-32' />
        </div>
        <div className={`md:border-l ${isLightMode ? 'border-black' : 'border-white'} md:h-52 sm:h-48 mx:h-52 mt-7 md:ml-16 sm:ml-6 pt-5 mx:ml-4 small:ml-8 relative`}>
          <div className='md:flex sm:block'>
            <h3 className={`text-${isLightMode ? 'black' : 'white'} text-[28px] font-semibold small:leading-[25px] md:pl-11 sm:pl-5 mx:pl-5 font`}>Krishna Patel</h3>
            <div className={`border-r ${isLightMode ? 'border-black' : 'border-white'} opacity-45 h-6 md:pl-10 sm:pl-4 md:block small:hidden `} />
            <h4 className={`md:pl-10 mx:pl-5 md:pt-0 small:pt-5 sm:pt-6 mx:pt-4 font-normal text-[15px] text-${isLightMode ? 'black' : 'white'} font`}>HR,<br className='small:visible mx:hidden' /> Codage Habitation</h4>
          </div>
          <div className='md:ml-11 md:pt-16 mx:pl-5 xl:pl-0 sm:pt-7 small:pt-5 mx:pt-3 small:absolute lg:top-0 lg:left-0 mx:left-[-11rem] mx:top-[9rem] small:top-[12rem] small:left-[-9.5rem]'>
            <h3 className={`font text-${isLightMode ? 'black' : 'white'}`}>315, Fortune Business Hub, Near shell petrol pump, Science city road, Ahmedabad. </h3>
          </div>
          <div className='md:ml-11 mx:pl-5 xl:pl-0 md:pt-7 sm:pt-3 mx:pt-3 md:flex font small:absolute mx:top-[13.5rem] small:top-[19rem] mx:left-[-11rem] small:left-[-9.5rem] sm:top-[14rem] sm:left-[-11rem] lg:top-[6rem] lg:left-0'>
            <a href="mailto:https://codagehabitation.com/" className={`text-${isLightMode ? 'black' : 'white'}`}>https://codagehabitation.com</a>
            <a href="#" className={`md:border-b md:border-b-[#000EE6] text-[#000EE6] md:ml-[21rem] mx:ml-0 sm:ml-12 xl:w-[10rem] small:absolute mx:top-16 small:top-9 sm:top-10 sm:left-[-1.75rem] lg:left-[0rem] sm:pt-0 lg:top-7 small:left-[-0rem] font font-medium`}>Schedule Your Interview</a>
          </div>
          <div className='md:ml-11 pt-4 mx:pl-5 lg:pl-0 lg:absolute lg:top-[10rem] flex items-center'>
            <a href="https://in.linkedin.com/company/codage-habitation" target='_blank' rel="noopener noreferrer"><img src={linkImage} alt="linkedin" className='w-8 cursor-pointer' /></a>
            <a href="#" className={`text-[28px] ml-5 text-${isLightMode ? 'black' : 'white'} font-semibold`}><img src={contactImage} alt="contact" className='w-8 cursor-pointer' /></a>
          </div>
        </div>
      </div>
      <div className={`border-b ${isLightMode ? 'border-black' : 'border-white'} opacity-50 h-1 md:w-[80%] sm:w-[80%] mx:w-[90%] absolute md:top-[68%] md:left-[10%] sm:top-[73%] mx:top-[67%] small:top-[68%] small:w-[90%] small:left-6 sm:left-[7%] `} />
      <div className='absolute lg:top-[75%] lg:left-[7%] sxl:left-[13%] xl:left-[21%] md:top-[73%] md:left-[6%] items-center lg:w-[55.2rem] md:w-[43rem] sm:top-[77%] sm:left-[7%] sm:w-[40rem] mx:top-[70%] small:top-[72%] mx:px-4 small:px-6 sm:px-0'>
        <p className={`text-${isLightMode ? 'black' : 'white'} text-[15px] font-light text-center font`}><span className={`text-${isLightMode ? 'black' : 'white'} font-semibold`}>CONFIDENTIALITY NOTICE:</span>This email was sent to you as you are registered member of Codage Corporation LTD.
          Please do not reply to this email. Emails sent to this address will not be answered.</p>
      </div>
    </div>
  );
};

export default Signature;
