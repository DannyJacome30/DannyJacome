import React from 'react';

import style from '@/styles/ProjectItem.module.css'

import github from '../../../public/Github.svg';
import video from '../../../public/video.svg';
import page from '../../../public/page.svg';

import Image from 'next/image';
import Link from 'next/link';

function ProjectLinks() {
    return ( 
        <div>
            <ul className={style.links_list}>
                <li>
                    <Link href='https://github.com/DannyJacome30'>
                        <Image alt="github" src={github} className={style.link_icon_project} width={40} height={40}/> 
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image alt="page" src={page} width={47} height={47}/>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image alt="video" src={video} width={47} height={47}/>
                    </Link>
                </li>
                                   
            </ul>
        </div>
     );
}

export default ProjectLinks;