import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from '@/styles/Contact.module.css'
import linkedin from '../../../public/Linkedin.svg';
import github from '../../../public/Github.svg';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Contact() {
    return ( 
        <div className={`${style.contact_container} ${inter.className}`}>
            <h2 className={style.contact_tittle}>Contact me</h2>
            <div className={style.contact_list}>
            <Link className={style.contact_item} href='https://www.linkedin.com/in/daniela-jacome30/'>
                <Image alt='Linkedin' src={linkedin} height={30} width={30}/>
                Linkedin
            </Link>
            <Link className={style.contact_item} href='https://github.com/DannyJacome30'>
                <Image alt='Github' src={github} height={30} width={30}/>
                Github
            </Link>
        </div>
        </div>
        
     );
}

export default Contact;