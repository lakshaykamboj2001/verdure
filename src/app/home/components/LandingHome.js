import React from 'react'
import Banner from "./Banner";
import TextContent from "./TextContent";
import FashionCategories from "./FashionCategories";
import QuietCollection from './QuietCollection';
import MembershipSection from './MembershipSection';

const LandingHome = () => {
  return (
    <div>
          <Banner />
          <TextContent />
          <FashionCategories />
          <QuietCollection/>
          <FashionCategories/>
          <MembershipSection/>
    </div>
  )
}

export default LandingHome