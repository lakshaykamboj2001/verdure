import React from 'react'
import PhilosophyBanner from './PhilosophyBanner'
import StichAnticipates from './StichAnticipates'
import ApplyMembership from './ApplyMembership'
import MisionPhilosophy from './MisionPhilosophy'
import VisionPhilosophy from './VisionPhilosophy'
import Manifesto from './Manifesto'

const Philosophy = () => {
  return (
    <div>
        <PhilosophyBanner/>
        <StichAnticipates/>
        <MisionPhilosophy/>
        <VisionPhilosophy/>
        <Manifesto/>
        <ApplyMembership/>
    </div>
  )
}

export default Philosophy