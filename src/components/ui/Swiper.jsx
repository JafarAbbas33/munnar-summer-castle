// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/css/swiper.css';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/images/Munnar-Summer-Castle.jpg';
import slide2 from '../../assets/images/Munnar-Summer-Castle-1.jpg';
import slide3 from '../../assets/images/Munnar-Summer-Castle2.jpg';
import slide4 from '../../assets/images/Munnar-Summer-Castle3.jpg';
import slide5 from '../../assets/images/Munnar-Summer-Castle.png';
import slide6 from '../../assets/images/Munnar-Summer-Castle2.png';
import slide7 from '../../assets/images/Munnar-Summer-Castle3.png';

function Slide({ slideBackground }) {
    return (
        <div className='rounded-lg' style={{ 
            backgroundImage: `url(${slideBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div className='relative rounded-lg h-full bg-gradient-to-tr from-black to-60% to-transparent w-full'>
                <h1 className='absolute bottom-0 left-0 text-white text-2xl mb-6 text-start ps-8'>Munnar Summer Castle</h1>
            </div>
        </div>
    )
}

export default () => {
    return (
        <Swiper
            spaceBetween={20}
            // slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            loop={true}
            className='pb-12 h-[70vh] w-full'
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {/* <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide1} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide2} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide3} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide4} /></SwiperSlide> */}

            <SwiperSlide><Slide slideBackground={slide1} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide2} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide3} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide4} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide5} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide6} /></SwiperSlide>
            <SwiperSlide><Slide slideBackground={slide7} /></SwiperSlide>
            
            {/* <Slide slideBackground={slide2} /> */}
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide5} /></SwiperSlide> */}
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide6} /></SwiperSlide> */}
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide7} /></SwiperSlide> */}
        </Swiper>
    );
};
