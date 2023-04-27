import React from 'react';
import style from '@/styles/Presentation.module.css'
import logo from '../../../public/Logo_DJ_light.svg';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Presentation(){
    return (
        <section className={`${style.home_container} ${inter.className}`}>
            <div className={style.home_description}>
                <p className={style.home_text_welcome}>Welcome to my portfolio</p>
                <p className={style.home_text_pres}>Hi, I’m Daniela Jácome <br/> Front-end developer</p>
            </div>
            <Image className={style.home_img_logo} alt="logo" src={logo} width={450}
                    height={650}/>
        </section>            
    );
}

export default Presentation;