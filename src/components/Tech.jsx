import React from 'react'

import Ball from '../components/canvas/Ball'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')