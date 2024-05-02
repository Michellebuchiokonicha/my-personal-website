// icons
import React, { useState } from 'react';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import CountUp from 'react-countup'

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key='' />,
          <FaCss3  key=''/>,
          <FaJs  key=''/>,
          <FaReact key=''/>,
          <SiNextdotjs  key='' />,
          <SiFramer  key=''/>,
          <FaPython  key=''/>,
          <FaPhp  key=''/>
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma  key=''/>, <SiAdobephotoshop  key=''/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'WTM High Impact Award - Awardee by Google',
        stage: '2023',
      },
      {
        title: 'Community Recognition - Awardee Google Developers Group',
        stage: '2024',
      },
      {
        title: 'Emerging Software Engineer of the year - Techtrend Africa',
        stage: '2021',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer - Fugoku',
        stage: '2024 - Present',
      },
      {
        title: 'Founder - Aricah',
        stage: '2021 - Present',
      },
      {
        title: 'Software Engineer - Landmark Africa',
        stage: '2022 - 2024',
      },
      {
        title: 'Software Engineer - Kwek',
        stage: '2021 - 2022',
      },
      {
        title: 'Frontend Engineer - HNG Internship',
        stage: '2021 - 2021',
      },
      {
        title: 'Ambassador - Google Women Techmakers',
        stage: '2021 - 2021',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Microbiology - University of Nigeria, Nsukka',
        stage: '2013 - 2018',
      },
      {
        title: 'Software Development - Zuri Training Institute',
        stage: '2021 - 2021',
      },
      {
        title: 'Software Development - FreeCode Camp',
        stage: '2021 - 2022',
      },
      {
        title: 'Intro to computer science - Harvard CS50',
        stage: '2022 -2023',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial = 'hidden'
    animate='show'
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
        variants={fadeIn('right', 0.2)} 
        initial = 'hidden'
        animate='show'
        exit='hidden'
         className='h2'>I  am<span className='text-accent'> Software </span>Engineer </motion.h2>
        <motion.p
        variants={fadeIn('right', 0.4)} 
        initial = 'hidden'
        animate='show'
        exit='hidden'
         className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          I design and maintain applications. I design and maintain applications for various clients and industries, using various technologies.
           I am passionate about creating digital products with thoughtful user experience and resolving issues with simple and critical solutions. 
          
              {/* I have been nominated as the Software Developer (Front-end) of the year for my work on Web3/ DAO, e-commerce, and crypto-friendly
              applications. I am currently aligning my career towards software engineering management, as I have strong communication and technical skills, as well as experience
               in leading groups and managing project teams. */}
            </motion.p>
            {/* counters */}
            <motion.div
            variants={fadeIn('right', 0.6)} 
            initial = 'hidden'
            animate='show'
            exit='hidden'
             className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6'>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
                   after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={4} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
                   after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={14} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied clients 
                  </div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
                   after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={15} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished projects
                  </div>
                </div>
                {/* awards */}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={3} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Winning awards
                  </div>
                </div>
              </div>
            </motion.div>
      </div>
      <motion.div
      variants={fadeIn('left', 0.4)} 
      initial = 'hidden'
      animate='show'
      exit='hidden'
       className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
        {aboutData.map((item, itemIndex) => {
          return (
          <div 
          key={itemIndex} 
          className={`${index === itemIndex && 
            'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
          cursor-pointer capitalize xl:text-lg 
          relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
          onClick={() => setIndex(itemIndex)}>
            {item.title}
            </div>
          )
        })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
            max-w-max gap-x-2 items-center text-white/60'>
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div className=''>{item.stage}</div>
             <div className='flex gap-x-4'>
               {/* ic */}
               {item.icons?.map((icon, itemIndex) => {
                return <div className='text-2xl' key={''}>{icon}</div>
              })}
             </div>
            </div>
          )
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
