import React from 'react';
import style from '@/styles/ProjectList.module.css'

import project from '../../../public/project.jpg';

import Image from 'next/image';

import ProjectDescription from './ProjectDescription';

function ProjectItem() {
    return ( 
        <>
             <div>
                <h4>Project 1</h4>
                <Image alt="proyecto" className={style.card_figure} src={project} width={300} height={200}/>
            </div>
            <ProjectDescription/>    
        </>
     );
}

export default ProjectItem;