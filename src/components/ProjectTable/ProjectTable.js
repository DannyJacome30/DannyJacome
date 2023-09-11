import React, { useState } from 'react';
import style from '@/styles/ProjectList.module.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
let filteredProject;

function ProjectTable({projectList}) {

    const [projectFilter, setProjectFilter] = useState(false);
    let project;
    var handleMouseClick = (categoria) => {
        filteredProject = projectList.filter((project) =>
            project.tags.includes(categoria)
        );
        setProjectFilter(true);
    };

    const mapProject = (filteredProject) => filteredProject?.map(
        (element)=>(
           // console.log(Object.entries(element))
            <ProjectItem element={element}/>
            )
    );
    
    if(!projectFilter){
        filteredProject =projectList
    }
    console.log(filteredProject)
    return ( 
        <section id='projects' className={`${style.project_list_container} ${inter.className}`}>
            <h2 className={style.project_list_title}>
                Projects
            </h2>
            <div className={style.project_list_menu_cont}>
                <div className={style.project_list_menu}>
                    <button id='all' className={style.project_list_menu_item} onClick={() => setProjectFilter(false)} >
                        All
                    </button>
                    <button id='all' className={style.project_list_menu_item}>
                        Mobile Apps
                    </button>   
                    <button id='all' className={style.project_list_menu_item} onClick={() => handleMouseClick("App Desktop")}>
                        Custom Software
                    </button>   
                    <button id='all' className={style.project_list_menu_item} onClick={() => handleMouseClick("UI/UX")}>
                        UX and Design
                    </button>
                </div>
            </div>
            
            <div className={style.project_list_cards_cont} id='ProjectList' >
                {mapProject(filteredProject)}
                
            </div>
            
        </section>
     );
}

export default ProjectTable;