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

function Slide(slideBackground) {
    // Create a new slide where the background is the slideBackground and a text is displayed on the bottom left corner with a gradient black background
    return (
        <SwiperSlide style={{ backgroundImage: `url(${slideBackground})` }}>
            <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent'>
                <h1 className='text-white text-2xl'>Munnar Summer Castle</h1>
            </div>
        </SwiperSlide>
    )
}

export default () => {
    return (
        <Swiper
            // spaceBetween={50}
            // slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='pb-8'
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide1} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide2} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide3} /></SwiperSlide>
            <SwiperSlide><img className='max-w-96 object-center rounded-lg' src={slide4} /></SwiperSlide>
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide5} /></SwiperSlide> */}
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide6} /></SwiperSlide> */}
            {/* <SwiperSlide><img className='max-w-96 object-cover object-center rounded-lg' src={slide7} /></SwiperSlide> */}
        </Swiper>
    );
};
