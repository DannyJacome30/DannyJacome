import React, { useState } from 'react';
import style from '@/styles/ProjectList.module.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


function ProjectTable({projectList}) {

    const [filteredProjects, setFilteredProjects] = useState(projectList);

    const handleMouseClick = (categoria) => {
        if (categoria === 'All') {
          setFilteredProjects(projectList);
        } else {
          const filteredProject = projectList.filter((project) =>
            project.tags.includes(categoria)
          );
          setFilteredProjects(filteredProject);
        }
      };

    const mapProject = () => {
        return filteredProjects.map(
        (element)=>(
            <ProjectItem key={element.id} element={element} />
            ));
    };

    
    return ( 
        <section id='projects' className={`${style.project_list_container} ${inter.className}`}>
            <h2 className={style.project_list_title}>
                Projects
            </h2>
            <div className={style.project_list_menu_cont}>
                <div className={style.project_list_menu}>
                    <button id='all' className={style.project_list_menu_item} onClick={() => handleMouseClick('All')} >
                        All
                    </button>
                    <button id='all' className={style.project_list_menu_item} onClick={() => handleMouseClick('App Mobile')}>
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
                {mapProject()}
                
            </div>
            
        </section>
     );
}

export default ProjectTable;