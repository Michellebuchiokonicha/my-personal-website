// icons
import {Swiper, SwiperSlide} from 'swiper/react'
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import Link from 'next/link';

// import moduls
import {FreeMode, Pagination, freeMode, pagination} from 'swiper'

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Web Development',
    description: 'Checkout my Github and the projects I have built',
    link: 'https://github.com/michellebuchiokonicha',
    name: 'Github'
  },
  {
    icon: <RxPencil2 />,
    title: 'Technical Writing',
    description: 'Checkout my blog',
    link: 'https://dev.to/michellebuchiokonicha',
    name: 'Blog'
  },
  {
    icon: <RxDesktop />,
    title: 'UI/UX Design',
    description: 'Check us out on Dribble',
    link: 'https://dribbble.com/Buchi_Michelle',
    name: 'Aricah'
  },
  {
    icon: <RxDesktop />,
    title: 'My Community: Aricah',
    description: 'Check us out on LinkedIn',
    link: 'https://www.linkedin.com/company/79571718/admin/feed/posts/',
    name: 'Aricah'
  },
  {
    icon: <RxReader />,
    title: 'My Youtube Channel',
    description: 'Checkout my Youtube channel',
    link: 'https://www.youtube.com/channel/UCS5-SujFZvqPmofowcbQA6g',
    name: 'Youtube'
  },
  {
    icon: <RxRocket />,
    title: 'My email for collaborations',
    description: 'Send a mail',
    link: 'mailto:michelleokonicha@gmail.com',
    name: 'Email'
  },
];

const ServiceSlider = () => {
  return (
    <div>
      <h4 className='h4 text-center text-bold-40'>Hold down and Swipe to see other offerings</h4>
        <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    }
    
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0,15)]
             h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
             sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
              {/* link starts */}
              <Link
        className='relative flex items-center group hover:text-accent transition-all duration-300'
         href={item.link}>{item.name}
          {/* tooltip */}
      
          
          </Link>
              {/* link ends */}
              </div>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 
              group-hover:text-accent transition-all duration-300' />
            </div>
          </SwiperSlide>
        )
      })
    }
    
  </Swiper>
    </div>

  );
};

export default ServiceSlider;
