import React from 'react'
import Banner from "./Banner";
import TextContent from "./TextContent";
import FashionCategories from "./FashionCategories";
import QuietCollection from './QuietCollection';
import MembershipSection from './MembershipSection';
import LuxuryShowcase from './LuxuryShowcase';

const LandingHome = () => {
  return (
    <div>
          <Banner />
          <TextContent />
          <FashionCategories />
          <QuietCollection/>
          <LuxuryShowcase/>
          <FashionCategories/>
          <MembershipSection/>
    </div>
  )
}

export default LandingHome