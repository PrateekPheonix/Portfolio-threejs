import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import { experiences } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from '../utils/motion'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What have I done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")