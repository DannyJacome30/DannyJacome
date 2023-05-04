import React, { useState } from 'react';

import style from '@/styles/ProjectItem.module.css'

import close from '../../../public/close.svg';

import Image from 'next/image';
import Link from 'next/link';

import project from '../../../public/project.jpg';
import ProjectLinks from './ProjectLinks';
import ProjectTech from './ProjectTech';

import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function ProjectDescription({onClose, show}) {

    

    if(!show){
        return null;
    }
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
      };
    return ( 
        <section className={`${style.card_description} ${inter.className}`} >
            <a  onClick={2} href='#'>
                <Image alt="cerrar" className={style.card_description_close} src={close} width={32} height={32}/>
            
            </a>
            
            <h2 className={style.card_description_title}> Mobile Finance</h2>
            <div className={style.card_description_cont} id='description'>
                <Image alt="project" className={style.card_description_proj} src={project} width={240} height={180}/>
                <div className={style.card_description_cont_2}>
                    <p className={style.card_description_descrip}>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                    <ProjectLinks/>
                </div>
            </div>
           
            <ProjectTech/>    
        </section>
     );
}

export default ProjectDescription;