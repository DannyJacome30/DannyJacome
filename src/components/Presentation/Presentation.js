import React from 'react';

import style from '@/styles/Presentation.module.css';

import Image from 'next/image';

import { Inter } from 'next/font/google';

import logo from '../../../public/Logo_DJ_light.svg';
import down from '../../../public/arrow.svg';

const inter = Inter({ subsets: ['latin'] })

function goto(e){
    window.location.href="#about_me";
    e.preventDefault();
    e.stopPropagation();
}
function Presentation(){
    return (
        <section className={`${inter.className}`}>
            <div className={style.home_container} >
                <div className={style.home_description}>
                    <p className={style.home_text_welcome}>Welcome to my portfolio</p>
                    <p className={style.home_text_pres}>Hi, I’m Daniela Jácome <br/> Front-end developer</p>
                </div>
                <Image className={style.home_img_logo} alt="logo" src={logo} width={450}
                        height={650}/>
            </div>
            <div className={style.home_img_arrow_cont}>
                <Image alt='next' onClick={goto} className={style.home_img_arrow} src={down} width={40} height={40}/>
            </div>
        </section>            
    );
}

export default Presentation;