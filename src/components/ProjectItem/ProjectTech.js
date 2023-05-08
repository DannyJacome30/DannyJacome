import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import style from '@/styles/ProjectItem.module.css'

import ModalTech from './ModalTech';

import Link from 'next/link';

function ProjectTech() {

    const [modalTech, setModalTech] = useState(false);

    return ( 
        <div className={style.tech_list}>
            <button id='Languajes' className={style.tech_list_btn} onMouseEnter={()=>setModalTech(true)} onMouseLeave={()=>setModalTech(false)}>
                            Languages
            </button>
                
            <button id='Frameworks' className={style.tech_list_btn} onMouseEnter={()=>setModalTech(true)} onMouseLeave={()=>setModalTech(false)}>
                            Frameworks
            </button>
                
            <button id='Technologies' className={style.tech_list_btn} onMouseEnter={()=>setModalTech(true)} onMouseLeave={()=>setModalTech(false)}>
                            Technologies
            </button>
               
            {modalTech && createPortal(
                <ModalTech nameList={'Languages'} onShow={modalTech}/>,
                document.getElementById('description')
            )}   
        </div>
     );
}

export default ProjectTech;