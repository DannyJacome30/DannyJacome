import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home2.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Presentation from '@/components/Presentation/Presentation'
import Contact from '@/components/Contact/Contact'
import ProjectList from '@/components/ProjectsList/ProjectsList'
import About from '@/components/About/About'
import Layout from '@/components/Layout/Layout '

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
        <Presentation/>
        <About/>
        <ProjectList/>
        <Contact/>
    </Layout>
      
    </>
  )
}
