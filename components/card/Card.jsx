import Image from "next/image"
import { useState } from "react"

import styles from './card.module.css'

import { motion } from "framer-motion"
import cls from 'classnames'


const Card = ({ imgUrl = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80", size = 'medium', id }) => {

  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    'large': styles.lgItem,
    'medium': styles.mdItem,
    'small': styles.smItem
  }

  const handleError = () => { // default img if error
    setImgSrc('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')
  }

  const scale = id === 0 ? { scaleY: 1.05 } : { scale: 1.05 }


  return (
    <div className={styles.container} >
      <motion.div className={cls(styles.imgMotionWrapper, classMap[size])} whileHover={{
        ...scale
      }}>
        <Image src={imgSrc} layout="fill" className={styles.cardImg} onError={handleError} />
      </motion.div>
    </div>
  )
}

export default Card