import React from 'react'
import MembershipBanner from './MembershipBanner'
import JourneyPath from './JourneyPath'
import IndividualMemebership from './IndividualMemebership'
import GroupMembership from './GroupMembership'
import ReadyApply from './ReadyApply'
import DiscoverMembership from './DiscoverMembership'

const Membership = () => {
  return (
    <div>
        <MembershipBanner />
        <JourneyPath/>
        <IndividualMemebership/>
        <GroupMembership/>
        <DiscoverMembership/>
        <ReadyApply/>
    </div>
  )
}

export default Membership