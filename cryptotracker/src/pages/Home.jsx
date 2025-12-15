import React from 'react';
import Headerindex from '../compontes/common/Header/Headerindex';
import Maincomindex from '../compontes/landingpage/Maincom/Maincomindex';
import Heroindex from '../compontes/common/Hero/Heroindex';
import Hero2index from '../compontes/common/Hero2/Hero2index';
import TestimonialSlider from '../compontes/common/TestimonialSlider/TestimonialSlider';
import Marquee from '../compontes/common/Marquee/Marquee';
import Footerindex from '../compontes/common/Footer/Footerindex';
import AccordionTransitionfrombottom from '../compontes/common/AccordionTransition/AccordionTransition';

const Home = () => {
  return (
    <div>
      <Headerindex/>
      <Maincomindex/>
      <Hero2index/>
      <Heroindex/>
      <TestimonialSlider/>
      <Marquee/>
      <AccordionTransitionfrombottom/>
      <Footerindex/>
    </div>
  );
};

export default Home;
