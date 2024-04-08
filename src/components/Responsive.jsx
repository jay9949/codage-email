import React, { useState } from 'react';
import logoDark from "/assets/themewhite.svg";
import logoLight from "/assets/cricleBlack.svg";
import linkLight from "/assets/link.svg";
import linkDark from "/assets/link-light.svg";
import contactLight from "/assets/contact.svg";
import contactDark from "/assets/contact-light.svg";

const Responsive = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const backgroundColor = theme === 'dark' ? 'bg-black' : 'bg-white';
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className={`${backgroundColor} ${textColor} relative small:min-h-screen `}>
            <button onClick={toggleTheme} className={`absolute top-1 right-4 p-2 ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}>Toggle Theme</button>
            <div className={`border-r border-current absolute top-[2.75rem] left-4`}>
                <img src={theme === 'dark' ? logoLight : logoDark} alt="logo" className={`mr-5`} />
            </div>

            <div className={`absolute top-[3.50rem] left-[13rem] ${textColor}`}>
                <h3 className={`text-[28px] font-semibold leading-[19.5px] font`}>Krishna Patel</h3>
                <h4 className={`font-semibold text-[15px] font pt-5`}>HR, Codage Habitation</h4>
                <h3 className={`font text-[12px] pt-4 pr-2 font-medium`}>315, Fortune Business Hub, Near shell petrol pump, Science city road, Ahmedabad. </h3>
            </div>

            <div className={`border-t border-current absolute top-[14.50rem] left-4 w-[24rem] pl-2 ${textColor}`}>
                <div className='pt-7 flex'>
                    <a href="mailto:https://codagehabitation.com/" className={`${textColor}`}>https://codagehabitation.com</a>
                    <img src={theme === 'dark' ? linkDark : linkLight} alt="link" className='pl-[6rem]' />
                </div>
                <div className='flex pt-4'>
                    <a href="#" className={`border-b border-b-[#000EE6] text-[#000EE6] font font-medium`}>Slot Your Interview</a>
                    <img src={theme === 'dark' ? contactDark : contactLight} alt="contact" className='pl-[9.7rem]' />
                </div>
            </div>
            <div className={`absolute top-[24rem] left-2 right-2 pt-7 ${textColor}`}>
                <p className={`text-center font-normal tracking-[1px] `}><span className={`font-semibold`}>CONFIDENTIALITY NOTICE:</span> This email is for the use of the intended recipient(s) only. If you have received this email in error, please notify me immediately and then delete it. Copyright © 2024 CODAGE HABITATION. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Responsive;
