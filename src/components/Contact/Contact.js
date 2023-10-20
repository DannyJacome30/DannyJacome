import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from '@/styles/Contact.module.css'
import linkedin from '../../../public/Linkedin.svg';
import github from '../../../public/links/githubL.svg';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Contact() {
    return ( 
        <section id='contact_me' className={`${style.contact_container} ${inter.className}`}>
            <h1 className={style.contact_tittle}>Contact me</h1>
            <div className={style.contact_list}>
            <Link className={style.contact_item} target="_blank" href='https://www.linkedin.com/in/daniela-jacome30/'>
                <Image alt='Linkedin' src={linkedin} height={30} width={30}/>
                Linkedin
            </Link>
            <Link className={style.contact_item} target="_blank" href='https://github.com/DannyJacome30'>
                <Image alt='Github' src={github} height={30} width={30}/>
                Github
            </Link>
        </div>
        </section>
        
     );
}

export default Contact;