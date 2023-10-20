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
    let descrip=element.description.replace(/\n/g, '\n');


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
            
            <h2 className={style.card_description_title}>  {element.name.toUpperCase()}</h2>
            <div className={style.card_description_cont}>
                <div className={style.card_description_cont_3}> 
                    <Image alt="project" className={style.card_description_proj} src={element.image} width={320} height={180}/>
                    <ProjectLinks element={element}/>
                </div>
                <div className={style.card_description_cont_2}>
                    <p className={style.card_description_cont_2_text}>{descrip}</p>
                </div>
            </div>
            <div id='description'>
                <ProjectTech element={element} />
            </div>
                
            
        </section>
     );
}

export default ProjectDescription;