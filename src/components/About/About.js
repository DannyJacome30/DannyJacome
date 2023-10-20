import React from 'react';

import style from '@/styles/About.module.css'

import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })
function About() {
    return ( 
        <section id='about_me' className={`${inter.className} ${style.about_container}`}>
            <h1>About me</h1>
            <p className={style.about_text}>
            Hello! I'm Daniela Jacome. I'm  an enthusiastic junior developer with a huge passion for the world of technology and programming. Since discovering my passion for computer science, what excites me the most is the opportunity to learn and grow every day. I'm always looking for new ways to expand my knowledge and improve my skills, which is why I have obtained certifications. I'm a computer science engineer graduate from the National Polytechnic School. My educational background has provided me with a strong foundation in computer science, and my diverse experiences have shaped me into a well-rounded and adaptable professional.
            <br/><br/>
            In additional, I've had the opportunity of working on projects with PYMES. These experiences have been invaluable, these teach me that there's always more to learn in the ever-evolving field of technology. They've also given me a unique perspective on the importance of effective communication. This has honed my ability to communicate effectively with high-level executives. Selling ideas and solutions to decision-makers requires not only technical expertise, also the ability to translate complex concepts into clear, business-focused language. 
            <br/><br/>
            I'm excited about the opportunities that the future holds and eager to be part of innovative teams seeking creative solutions to technological challenges. If you're looking for someone dedicated, motivated, and willing to learn, I'd be delighted to be part of your team!

            Thank you for visiting my portfolio and getting to know a bit more about me. If you'd like to get in touch or discuss collaboration opportunities, please feel free to chat me through my social media profiles.
            <br/><br/>
            To learn more about me, my education, experience, additional certifications, projects I have been a part of, and references, you can click the "Download CV" button. It is my resume, a complete document that provides a detailed description
            <br/><br/>
            I look forward to the next opportunity to work together and do amazing things!
            </p>
            <button className={style.about_btn}>Download CV</button>
        </section>
     );
}

export default About;