'use client'

import { Roboto_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
const roboto = Roboto_Mono({ weight: '400', subsets: ['latin'] })

interface titleProps {
    title: string
    pageNo: string
    slideDirection?: 'left' | 'right' | 'up' | 'down'
}

const Title: React.FC<titleProps> = ({title, pageNo, slideDirection}) => {

  let initialAnimation = {}

  switch (slideDirection) {
    case 'left':
      initialAnimation = { opacity: 0, x: '10%'}
      break;
    case 'right':
      initialAnimation = { opacity: 0, x: '-10%'}
      break;
    case 'up':
      initialAnimation = { opacity: 0, y: '20%'}
      break;
    case 'down':
      initialAnimation = { opacity: 0, y: '-20%'}
      break;
    default:
      initialAnimation = { opacity: 0 }
      break;
  }

  return (
    <>
        <motion.h1 
            className = 'font-black text-3xl flex items-center gap-4'
            initial = {initialAnimation}
            animate = {{opacity: 1, x: '0%', y: '0%'}}
            transition = {{ delay: 0.5}}>
            <span className = {`${roboto.className} opacity-40 font-bold text-2xl`}>
                {pageNo}.
            </span>
            {title}
        </motion.h1>

    </>
  )
}

export default Title