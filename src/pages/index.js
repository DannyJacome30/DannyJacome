import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home2.module.css'
import db from '@/database/db.js'
import Presentation from '@/components/Presentation/Presentation'
import Contact from '@/components/Contact/Contact'
import ProjectTable from '@/components/ProjectTable/ProjectTable'
import About from '@/components/About/About'
import Layout from '@/components/Layout/Layout '

const inter = Inter({ subsets: ['latin'] })
const bd2 = new db();
const projectList = bd2.getAll();
export default function Home() {
  
  return (
    <>
    <Layout>
        <Presentation/>
        <About/>
        <ProjectTable projectList={projectList[0]}/>
        <Contact/>
    </Layout>
      
    </>
  )
}
