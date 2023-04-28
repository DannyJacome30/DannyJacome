import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import style from '@/styles/ProjectItem.module.css'

import project from '../../../public/project.jpg';

import Image from 'next/image';

import ProjectDescription from './ProjectDescription';


function ProjectItem() {
    const [modalProject, setModalProject] = useState(false);
    return ( 
        <>
             <section onClick={()=>setModalProject(true)}>
                <h4>Project 1</h4>
                <Image alt="proyecto" className={style.card_figure} src={project} width={300} height={200}/>
            </section>
            {modalProject && createPortal(
                <ProjectDescription onClose={()=>setModalProject(false)}/>,
                document.body    
            )}
            
        </>
     );
}

export default ProjectItem;