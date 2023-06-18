'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TitleProps {
    line1: string
    line2: string
}

const sentenceTransition = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}
const letterTransition = {
    hidden: { opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0
    }

}

const Title: React.FC<TitleProps>  = ({ line1, line2 }) => {
  return (
    <>
        <motion.article
            className = 'text-center'
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{delay: 0.6, type: 'spring', when: 'beforeChildren', duration: 0.5, staggerChildren: 0.2}}>
            <motion.h3
                className = 'font-bold'
                variants = {sentenceTransition}
                initial = 'hidden'
                animate = 'visible'>
                {line1.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-5xl'
                            key = {char + i}
                            variants = {letterTransition}
                        >
                            {char}
                        </motion.span>
                    )
                })}
                <br />
                {line2.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-3xl'
                            key = {char + i}
                            variants = {letterTransition}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h3>
        </motion.article>
    </>
  )
}

export default Title