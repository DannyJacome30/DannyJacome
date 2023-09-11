import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Inter} from 'next/font/google'
import style from '@/styles/ProjectItem.module.css'

import ModalTech from './ModalTech';

import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
function ProjectTech({element}) {

    const [modalTech, setModalTech] = useState(false);
    const [selectedButtonId, setSelectedButtonId] = useState(null);   
    
    const handleMouseEnter = (buttonId) => {
        setSelectedButtonId(buttonId);
        setModalTech(true);
    };
    
    const handleMouseLeave = () => {
        setSelectedButtonId(null);
        setModalTech(false);
    };

    return ( 
        <div className={style.tech_list}>
            <button id='Languajes' className={style.tech_list_btn} onMouseEnter={() => handleMouseEnter('Languajes')} onMouseLeave={handleMouseLeave}>
                Languages
            </button>
                
            <button id='Frameworks' className={style.tech_list_btn} onMouseEnter={() => handleMouseEnter('Frameworks')} onMouseLeave={handleMouseLeave}>
                Frameworks
            </button>
                
            <button id='Technologies' className={style.tech_list_btn} onMouseEnter={() => handleMouseEnter('Tech')} onMouseLeave={handleMouseLeave}>
                Technologies
            </button>
   
            {modalTech && createPortal(
                <ModalTech selectedButtonId={selectedButtonId} onShow={modalTech} element={element}/>,
                document.getElementById('description')
            )}   
           
            
            
        </div>
     );
}

export default ProjectTech;