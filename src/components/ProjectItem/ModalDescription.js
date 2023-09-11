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

function ProjectDescription({element, onClose, show}) {

    

    if(!show){
        return null;
    }
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
      };
    return ( 
        <section className={`${style.card_description} ${inter.className}`} >
            <a  onClick={handleCloseClick}>
                <Image alt="cerrar" className={style.card_description_close} src={close} width={32} height={32}/>
            </a>
            
            <h2 className={style.card_description_title}>  {element.name}</h2>
            <div className={style.card_description_cont} id='description'>
                <Image alt="project" className={style.card_description_proj} src={project} width={240} height={180}/>
                <div className={style.card_description_cont_2}>
                    <p className={style.card_description_descrip}>{element.description}</p>
                    <ProjectLinks element={element}/>
                </div>
            </div>
           
            <ProjectTech element={element}/>    
            
        </section>
     );
}

export default ProjectDescription;