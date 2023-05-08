import React from 'react';

import style from '@/styles/About.module.css'

import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })
function About() {
    return ( 
        <section id='about_me' className={`${inter.className} ${style.about_container}`}>
            <h2 className={style.about_title}>About me</h2>
            <p className={style.about_text}>
            Lorem ipsum dolor sit amet consectetur. Pellentesque id lobortis mauris porta ac lectus ac id ut. Urna dolor mattis tellus sapien integer sem vulputate ultricies. Nisl adipiscing maecenas tempor nibh et. Eleifend bibendum malesuada non ligula malesuada eu lobortis elit. A velit fermentum ultricies magna quisque nibh urna. Aliquam cursus suspendisse est urna sed ullamcorper. In ac consectetur amet nullam laoreet bibendum. Sagittis auctor dignissim placerat volutpat placerat est mi feugiat. Dolor facilisis cras netus velit vivamus blandit tincidunt. Sit dignissim amet morbi etiam quisque imperdiet fringilla. Lectus sed hendrerit facilisis libero. Arcu ipsum a elementum at. Amet quisque morbi consequat ac non sed.
Diam quis placerat habitant amet nunc ullamcorper. Sit nulla nibh metus vulputate sit nibh pellentesque.
            </p>
            <button className={style.about_btn}>Download CV</button>
        </section>
     );
}

export default About;