import React from 'react';
import style from '@/styles/Navbar.module.css'
import logoDark from '../../../public/Logo_DJ_dark.svg';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
    return ( 
        <header className={`${style.navbar_header} ${inter.className}`}>
            <nav className={style.navbar_nav}>
                <Image className={style.navbar_img_logo} alt="logo" src={logoDark} width={70}
                    height={52}/>
                    
                <a className={style.navbar_item} href="#about_me">About me</a> 
                <a className={style.navbar_item} href="#projects">Projects</a>
                <a className={style.navbar_item} href="#contact_me">Contact me</a>
            </nav>
        </header>
     );
}

export default Navbar;