import React from 'react';

import style from '@/styles/ProjectItem.module.css'

import github from '../../../public/Github.svg';
import video from '../../../public/video.svg';
import page from '../../../public/page.svg';

import Image from 'next/image';
import Link from 'next/link';

const gitL = (gi) => {
    if(gi!=""){
       // console.log("GIT")
        return(
            <li>
                <Link href={gi}>
                    <Image alt="github" src={github} className={style.link_icon_project} width={40} height={40}/> 
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
                <Link href={pg}>
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
            <Link href={vd}>
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
               
                                   
            </ul>
        </div>
     );
}

export default ProjectLinks;