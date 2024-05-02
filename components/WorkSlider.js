// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'The Hospitality Institute',
          path: '/project2.png',
          link: 'https://www.app.thi-ng.org/',
        },
        {
          title: 'Kwek Market',
          path: '/project3.png',
          link: 'https://kwekmarket.com/',
        },
        {
          title: 'Bizpoke Dashboard',
          path: '/project1.png',
          link: 'https://bizpoke-dashboard-buchi.netlify.app/',
        },
        {
          title: 'Fugoku',
          path: '/project8.png',
          link: 'https://www.app.fugoku.com/login',
        },  
      ],
    },
    {
      images: [
        {
          title: 'Girls like Me',
          path: '/project5.png',
          link: 'https://girls-like-me-africa.netlify.app/',
        },
        {
          title: 'Zuri Chat',
          path: '/project4.png',
          link: 'https://zurichat.netlify.app/',
        },
        {
          title: 'Hotel',
          path: '/project6.png',
          link: 'https://landmarkhotel.netlify.app/',
        },
        {
          title: 'CSR Dashboard',
          path: '/project7.png',
          link: 'https://csr.landmarkbeach.ng/',
        },
      ],
    },
  ],
};



// icons
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';
import Link from 'next/link';


import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination';

// import moduls
import { Pagination} from 'swiper'
import {} from 'react-icons/bs'

// icons
import {BsArrowRight} from 'react-icons/bs'

const WorkSlider = () => {
  return (
  <div>
  <h4 className='h4 text-center text-bold-40'>Hold down and Swipe left to see other offerings</h4>
  <Swiper 
  spaceBetween={10}

   pagination={{
     clickable: true
   }}
   modules={[ Pagination]}
   className='h-[280px] sm:h-[480px]'
   >
    {
      workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
              <div key={index} className='relative rounded-lg overflow-hidden flex
              items-center justify-center group'>
                <div className='flex items-center justify-center relative 
                overflow-hidden group'>
                  <Image src={image.path} width={500} height={300} alt="" />
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent 
                  via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all
                   duration-700'></div>
                   {/* title */}
                   <div className='absolute bottom-0 translate-y-full 
                   group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                   transition-all duration-300'>
                     <Link
                     className='relative flex items-center group hover:text-accent transition-all duration-300'
                     href={image.link}>
                    <div className='flex items-center gap-x-2
                    text-[13px] tracking-[0.2em]'>
                    {/* title part */}
                      <div className='delay-100'>
                     
                      {image.title}
                        </div>
                      <div className='translate-y-[500%]
                      group-hover:translate-y-0 transition-all 
                      duration-300 delay-150'>
                        PROJECT</div>
                      <div className='text-xl translate-y-[500%] 
                      group-hover:translate-y-0 transition-all 
                      duration-300 delay-200'><BsArrowRight /></div>
                    </div>
                    </Link>
                   </div>
                </div>
              </div>
              )
            })}
            </div>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  </div>
  );
};

export default WorkSlider;

