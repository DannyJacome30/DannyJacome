import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import style from '@/styles/ProjectItem.module.css'

import project from '../../../public/project.jpg';

import Image from 'next/image';

import ModalDescription from './ModalDescription';

import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function ProjectItem() {
    const [modalProject, setModalProject] = useState(false);
    return ( 
        <>
             <section onClick={()=>setModalProject(true)} className={style.card_container}>
                <h4>Project 1</h4>
                <Image alt="proyecto" className={style.card_figure} src={project} width={300} height={200}/>
            </section>
            {modalProject && createPortal(
                <ModalDescription onClose={()=>setModalProject(false)} show={modalProject}/>,
                document.body
            )}    
        </>
     );
}

export default ProjectItem;