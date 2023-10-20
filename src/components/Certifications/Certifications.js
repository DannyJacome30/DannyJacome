import React from 'react';

import style from '@/styles/Certifications.module.css'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function Certifications(certifList){
   
    const mapCertif = (certificationL) => certificationL?.map(
        (element)=>(
            <tr> 
                <td> 
                    <a href={element.certificado} target="_blank"> {element.name}</a>
                </td>
                <td> {element.horas}</td>
                <td> {element.ent}</td>
                <td> {element.fecha}</td>
                <td> {element.habilidades}</td>  
            </tr>
        )         
    )   
         
       

          
    return(
        <section id="certifications"  className={`${style.certifications_cont} ${inter.className}`}> 
            <h1>Certifications</h1>
            <table id="certif" className={style.certfications_list}>
                <thead>
                    <tr>
                        <th>Certificate</th>
                        <th>Hours</th>
                        <th>Entity</th>
                        <th>Date</th>
                        <th>Hability</th>
                    </tr>
                </thead>
                <tbody>
                    {mapCertif(certifList.projectList)}
                
                </tbody>
            </table>
        </section>
    )
}

export default Certifications;