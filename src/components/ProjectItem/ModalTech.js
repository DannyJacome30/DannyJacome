import React, { useState } from 'react';

import style from '@/styles/ProjectItem.module.css'

import Image from 'next/image';

import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*TEMPORAL */
import icon from '../../../public/icons/java.svg';
//<Image alt={selectedButtonId} className={style.tech_item} src={icon} width={52} height={52}/>


const mapTech = (list) => list.map(
    (element)=>(
        <li> <p> {element} </p> </li>
        )
    )

function ProjectDescription({selectedButtonId,element}) {
    if(selectedButtonId=="Languajes"){
        return(
            <div className={`${style.tech_container} ${inter.className}`} >
                <ul id={"list_tech_ul"}>
                {mapTech(element.lang)}
                </ul>
            </div>
        )
    }else if(selectedButtonId=="Frameworks") {
        return(
            <div className={`${style.tech_container} ${inter.className}`} >
                <ul id={"list_tech_ul"}>
                {mapTech(element.fram)}
                </ul>
            </div>
        )
    }else if(selectedButtonId=="Tech") {
        return(
            <div className={`${style.tech_container} ${inter.className}`} >
                <ul id={"list_tech_ul"}>
                {mapTech(element.tech)}
                </ul>
            </div>
        )
    }
    

}

export default ProjectDescription;