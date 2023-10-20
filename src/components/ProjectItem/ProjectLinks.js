import React from 'react';

import style from '@/styles/ProjectItem.module.css'

import github from '../../../public/links/githubD.svg';
import video from '../../../public/links/videoD.svg';
import page from '../../../public/links/arrowD.svg';
import figma from '../../../public/links/figmaD.svg';
import api from '../../../public/links/apiD.svg';

import Image from 'next/image';
import Link from 'next/link';

const gitL = (gi) => {
    if(gi!=""){
       // console.log("GIT")
        return(
            <li>
                <Link href={gi} target='_blank'>
                    <Image alt="github" src={github} className={style.link_icon_project} width={40} height={40}/> 
                </Link>
            </li> 
        );
    }
}

const figmaL = (fig) => {
    if(fig!=""){
       // console.log("GIT")
        return(
            <li>
                <Link href={fig} target='_blank'>
                    <Image alt="figma" src={figma} className={style.link_icon_project} width={40} height={40}/> 
                </Link>
            </li> 
        );
    }
}

const apiL = (ap) => {
    if(ap!=""){
       // console.log("GIT")
        return(
            <li>
                <Link href={ap} target='_blank'>
                    <Image alt="figma" src={api} className={style.link_icon_project} width={40} height={40}/> 
                </Link>
            </li> 
        );
    }
}

const pageL = (pg) => {
    if(pg!=""){
        console.log("PG")
        return(
            <li>
                <Link href={pg} target='_blank'>
                    <Image alt="page" src={page} width={47} height={47}/>
                </Link>
            </li>
        );
    }
}

const videoL = (vd) => {
    if(vd!=""){
        console.log("VD")
        return(
            <li>
            <Link href={vd} target='_blank'>
                <Image alt="video" src={video} width={47} height={47}/>
            </Link>
        </li>
        );
    }
}

function ProjectLinks({element}) {

    
    return ( 
        <div>
            <ul className={style.links_list}>
                {gitL(element.github)}
                {pageL(element.page)}
                {videoL(element.video)}
                {figmaL(element.figma)}
                {apiL(element.api_use)}
                                   
            </ul>
        </div>
     );
}

export default ProjectLinks;