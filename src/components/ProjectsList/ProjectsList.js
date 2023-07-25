import React from 'react';

import style from '@/styles/ProjectList.module.css'

import { Inter} from 'next/font/google'

import ProjectItem from '../ProjectItem/ProjectItem';

const inter = Inter({ subsets: ['latin'] })
  
function ProjectList() {
    return ( 
        <section id='projects' className={`${style.project_list_container} ${inter.className}`}>
            <h2 className={style.project_list_title}>
                Projects
            </h2>
            <div className={style.project_list_menu_cont}>
                <ul className={style.project_list_menu}>
                    <li>
                        <a href='#' className={style.project_list_menu_item}>All</a>
                    </li>
                    <li>
                        <a href='#' className={style.project_list_menu_item}>Mobile Apps</a>
                    </li>
                    <li>
                        <a href='#' className={style.project_list_menu_item}>Custom Software</a>
                    </li>
                    <li>
                        <a href='#' className={style.project_list_menu_item}>UX and Design</a>
                    </li>
                </ul>
            </div>
            <div className={style.project_list_cards_cont} >
                <article className={style.project_list_card} id='projects-container'>
                   <ProjectItem/>
                </article>
                <div className={style.project_list_card}>
                    Project 2
                </div>
                <div className={style.project_list_card}>
                    Project 3
                </div>
            </div>
        </section>
     );
}

export default ProjectList;