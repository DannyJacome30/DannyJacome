import React, { useState } from 'react';

import style from '@/styles/ProjectItem.module.css'

import Image from 'next/image';

import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*TEMPORAL */
import icon from '../../../public/icons/java.svg';

function ProjectDescription({onTouchMove, show, nameList}) {

    if(!show){
        return null;
    }

    return ( 
        <div className={`${style.tech_container} ${inter.className}`} >
            <Image alt={nameList} className={style.tech_item} src={icon} width={52} height={52}/>
            <Image alt={nameList} className={style.tech_item} src={icon} width={52} height={52}/>
        </div>
     );
}

export default ProjectDescription;