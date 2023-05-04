import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import style from '@/styles/ProjectItem.module.css'

import ModalTech from './ModalTech';

import Link from 'next/link';

function ProjectTech() {

    const [modalTech, setModalTech] = useState(false); 
    return ( 
        <div>
            <ul className={style.tech_list}>
                <li>
                    <Link href='/'>
                        <button className={style.tech_list_btn} onClick={()=>setModalTech(true)}>
                            Languages
                        </button>
                        {modalTech && createPortal(
                            <ModalTech onTouchMove={()=>setModalTech(false)} show={modalTech} nameList={'Languages'}/>,
                            document.getElementById('description')
                        )}
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <button className={style.tech_list_btn}>
                            Frameworks
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <button className={style.tech_list_btn}> 
                            Technologies
                        </button>
                    </Link>
                </li>     
            </ul>
            <span>
                
            </span>
        </div>
     );
}

export default ProjectTech;