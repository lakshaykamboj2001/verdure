import React from 'react'
import IndividualMemebership from './IndividualMemebership'
import GroupMembership from './GroupMembership'
import ReadyApply from '../membership/ReadyApply'
import MembershipBanner from '../membership/MembershipBanner'

const individual = () => {
  return (
    <div>
        <IndividualMemebership />
        <GroupMembership />
        <ReadyApply/>
        <GroupMembership />
    </div>
  )
}

export default individual