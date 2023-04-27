import React from 'react';

import style from '@/styles/ProjectItem.module.css'

import Link from 'next/link';

function ProjectTech() {
    return ( 
        <div>
            <ul className={style.tech_list}>
                <li>
                    <Link href='/'>
                        <button className={style.tech_list_btn}>
                            Languages
                        </button>
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