import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] '
      >
        I am currently pursuing a degree in Bachelor of Technology in Computer Science at the Indian Institute of Information Technology-Nagpur. Throughout my academic career, I have developed a deep understanding of programming languages such as C, C++, JavaScript, and TypeScript as well as experience with tools like React.js, Next.js, Express, Node.js, MongoDB, and MySQL. In addition, I have worked on several personal projects and participated in coding competitions, which have given me valuable experience working on real-world projects and collaborating with team members. Let's work together to bring your idea to life!
      </motion.p>
      <div className='mt-20 flex items-center justify-center flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")