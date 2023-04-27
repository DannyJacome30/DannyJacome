import React from 'react';
import style from '@/styles/ProjectList.module.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import project from '../../../public/project.jpg';
import close from '../../../public/close.png';
const inter = Inter({ subsets: ['latin'] })
  
function ProjectList() {
    return ( 
        <section className={`${style.project_list_container} ${inter.className}`}>
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
            <div className={style.project_list_cards_cont}>
                <article className={style.project_list_card}>
                    <div>
                        <h4>Project 1</h4>
                        <Image alt="proyecto" className={style.card_figure} src={project} width={300} height={200}/>
                    </div>
                    <span className={style.card_description}>
                        <div className={style.card_description_container_title}>
                        <Image alt="cerrar" className={style.card_figure_close} src={close} width={100} height={100}/>
                            <h2 className={style.card_description_container_title_tit}>Mobile Finance</h2>
                        </div>
                        <p className={style.card_description_descrip}>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                    </span>
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