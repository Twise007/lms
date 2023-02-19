import React from 'react'
import { Wave } from '../components/Styles'

const Waves = () => {
  return (
    <div>
      <Wave>
      {/* gotten from https://www.shapedivider.app/ */}
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </Wave>

      <Wave>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </Wave>
    </div>
  )
}

export default Waves