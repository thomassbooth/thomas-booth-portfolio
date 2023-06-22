'use client'

import { TbBrandNextjs } from 'react-icons/tb'
import { SiDjango, SiFastapi, SiKubernetes, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si'
import { FaNodeJs, FaReact, FaLaravel, FaDocker, FaAws } from 'react-icons/fa'
import ListItem from './ListItem'
import List from './List'

const TechClient = () => {
  return (
    <div className = ''>
        <p className = 'm-8 text-lg'>
            I enjoy working with cutting edge technology and im permenatly chasing the latest tech to give users and myself a more forfilling experience.
        </p>
        <article className = 'flex flex-row justify-evenly'>
            <List title = 'Typescript & Javascript' direction = 'up'>
                <ListItem tech = 'NextJS' icon = {TbBrandNextjs}/>
                <ListItem tech = 'NodeJS' icon = {FaNodeJs}/>
                <ListItem tech = 'ReactJS' icon = {FaReact}/>
            </List>
            <List title = 'Python' direction = 'down'>
                <ListItem tech = 'Django' icon = {SiDjango}/>
                <ListItem tech = 'FastAPI' icon = {SiFastapi}/>
            </List>
            <List title = 'PHP' direction = 'down'>
                <ListItem tech = 'Laravel' icon = {FaLaravel}/>
            </List>
            <List title = 'Cloud + Infastructure' direction = 'up'>
                <ListItem tech = 'Docker' icon = {FaDocker}/>
                <ListItem tech = 'AWS' icon = {FaAws}/>
                <ListItem tech = 'PostgreSQL' icon = {SiPostgresql} />
                <ListItem tech = 'MongoDB' icon = {SiMongodb} />
                <ListItem tech = 'Redis' icon = {SiRedis} />
                <ListItem tech = 'Kubernetes' icon = {SiKubernetes} />
            </List>
        </article>

    </div>
  )
}

export default TechClient