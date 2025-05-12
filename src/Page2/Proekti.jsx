import React from 'react'
import ProjectCards from './ProjectCards'
import HouseSearch from './HouseSearch';
import PodarokProekt from './PodarokProekt';
import Karta from './Karta';
import SubscriptionBox from './SubscriptionBox';
import Footer from '../Layout/Footer';

function Proekti() {
  return (
    <div>
      <ProjectCards />
      <HouseSearch />
      <PodarokProekt />
      <Karta />
      <SubscriptionBox />
      <Footer />
    </div>
  )
}

export default Proekti;