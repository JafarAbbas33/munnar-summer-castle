import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../assets/css/swiper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide1 from '../../assets/images/Munnar-Summer-Castle.jpg';
import slide4 from '../../assets/images/Munnar-Summer-Castle3.jpg';
import slide6 from '../../assets/images/Munnar-Summer-Castle2.png';

function Slide({ slideBackground }) {
    return (
        <div className='rounded-lg' style={{
            backgroundImage: `url(${slideBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%'
        }}>
            {/* <div className='relative rounded-lg h-full bg-gradient-to-tr from-black to-60% to-transparent w-full'>
                <h1 className='absolute bottom-0 left-0 text-white text-2xl mb-6 text-start ps-8'>Munnar Summer Castle</h1>
            </div> */}
        </div>
    )
}

export default function SwiperAboutAdvanced() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="h-[60vh]"
            >
                <SwiperSlide><Slide slideBackground={slide1} /></SwiperSlide>
                <SwiperSlide><Slide slideBackground={slide4} /></SwiperSlide>
                <SwiperSlide><Slide slideBackground={slide6} /></SwiperSlide>
            </Swiper>
        </>
    );
}
