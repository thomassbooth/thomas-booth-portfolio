'use client'

import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Personals = () => {
  return (
    <aside className = 'hidden md:block fixed bottom-0 left-0'>
        <motion.div className = 'flex flex-col items-center gap-5 pl-3 sm:pl-6 md:pl-20 2xl:pl-40'
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{duration: 1}}
            exit={{ opacity: 0 }}>
            <MdOutlineKeyboardArrowUp size = {20}/>
            <FaTwitter onClick = {() => {window.open('https://twitter.com/thomassbooth')}} size = {20} className = 'hover:text-pastel-blue-dark-100 duration-500 hover:-translate-y-0.5 transition-all cursor-pointer'/>
            <FaLinkedin onClick = {() => {window.open('https://www.linkedin.com/in/thomas-booth-08baa6151/')}} size = {20} className = 'hover:text-pastel-blue-dark-100 duration-500 hover:-translate-y-0.5 transition-all cursor-pointer'/>
            <FaGithub onClick = {() => {window.open('https://github.com/thomassbooth')}} size = {20} className = 'hover:text-pastel-blue-dark-100 duration-500 hover:-translate-y-0.5 transition-all cursor-pointer'/>
            <FiInstagram onClick = {() => {window.open('https://www.instagram.com/thomassboothh/')}} size = {20} className = 'hover:text-pastel-blue-dark-100 duration-500 hover:-translate-y-0.5 transition-all cursor-pointer'/>
            <div className = 'h-12 w-0.5 rounded-full bg-pastel-brown-dark'/>
        </motion.div>
    </aside>
  )
}

export default Personals