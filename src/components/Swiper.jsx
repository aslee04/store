import React, { useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperImage1 from '../assets/swiper-1.png'
import SwiperImage2 from '../assets/swiper-2.png'
import SwiperImage3 from '../assets/swiper-3.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

export default () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3} loop navigation modules={[Navigation]} className='myswiper'>
      <SwiperSlide className=''>
        <img className='' src={SwiperImage1} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>Cute Multi Color Polak Dot Sweater <br /> $54</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={SwiperImage2} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>Square Neck Adjustable Shoulder Straps Dress <br /> $31</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={SwiperImage3} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>A V-neckline Drawstring Ruched Top <br /> $31</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={SwiperImage1} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>Cute Multi Color Polak Dot Sweater <br /> $54</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={SwiperImage2} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>Cute Multi Color Polak Dot Sweater <br /> $31</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={SwiperImage3} alt={'Swiper Image'} style={{ userSelect: 'none' }} />
        <p className='text-base mt-[23px]'>Cute Multi Color Polak Dot Sweater <br /> $31</p>
      </SwiperSlide>
    </Swiper>
  )
}
