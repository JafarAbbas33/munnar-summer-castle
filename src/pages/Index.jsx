import { FaCar, FaHeartbeat, FaLeaf, FaParking, FaPersonBooth, FaTree, FaWifi } from "react-icons/fa";
import Header from "../components/ui/Header";
import Swiper from "../components/ui/Swiper";
import { FaBowlFood, FaPeopleGroup } from "react-icons/fa6";
// import SwiperAbout from "../components/ui/SwiperAbout";
import SwiperAboutAdvanced from "../components/ui/SwiperAboutAdvanced";

import multiCuisineIcon from '../assets/images/Multi-cuisine-restaurant.png';
import dinerImg from '../assets/images/dinner.png';
import campFIreImg from '../assets/images/Camp-fire.png';
import wifiImg from '../assets/images/wifi.png';
import parkingImg from '../assets/images/parking.png';
import conferenceImg from '../assets/images/Conference.png';
import bookNowImg from '../assets/images/5-new.png';

import munnarCastleLogo from '../assets/images/LOGO1.png';

import { MdLocalLaundryService } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Highlights', href: '/packages' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Book Now', href: '/book' },
    { label: 'Contact Us', href: '/contact' }
];

function Index() {
    const welcomeSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const highlightsSectionRef = useRef(null);
    const roomsSectionRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    const onNavItemClick = (event) => {
        const { key } = event.currentTarget.dataset;
        if (key === 'Home') {
            welcomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (key === 'About Us') {
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (key === 'Highlights') {
            highlightsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (key === 'Rooms') {
            roomsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (key === 'Book Now') {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (key === 'Contact Us') {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <Header welcomeSectionRef={welcomeSectionRef} aboutSectionRef={aboutSectionRef} highlightsSectionRef={highlightsSectionRef} roomsSectionRef={roomsSectionRef} footerRef={footerRef} />
            <section ref={welcomeSectionRef} className="pt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 p-4 pb-0 lg:pb-4 m-4 mb-0 lg:mb-4">
                    <Swiper />
                </div>
                <div data-aos={"fade-left"} className="col-span-1 p-4 m-4 mt-0 lg:mt-28">
                    <h2 className="text-4xl font-bold text-secondary-bg">
                        Welcome to the Tea Country
                    </h2>
                    <p className="font-normal text-lg  mt-8">
                        You really can’t overstate the reason for visiting Munnar, a sprawling hill station that excels in Natural Splendour. Anachal in Munnar is carpeted in greens and florals, a chilly Western Ghats climate with dappled forests.
                    </p>
                    <p className="font-normal text-lg">
                        All these elements combined Munnar Summer Castle is hands-down the best option for your stay during your high- range vacation.
                    </p>
                </div>
            </section>

            <hr className="border-gray-400 opacity-60 mx-12 lg:mx-80 mt-4" />

            <section ref={aboutSectionRef} className="py-1 lg:py-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div data-aos={"fade-right"} className="col-span-1 px-4 py-2 lg:py-4 mx-4 my-0 lg:my-4 mt-6 lg:mt-16">
                    <h2 className="text-4xl font-bold text-secondary-bg">
                        About
                    </h2>
                    <p className="font-normal text-lg mt-8">
                        Munnar Summer Castle is a relaxing womb-like space in a clever landscape that blends fine into the picturesque Munnar Mountains. All the top tourist sites lie within a 20 to 45-minute drive away. A gem that manages to combine the standards of a boutique hotel with the kind of relaxed intimacy and commendable personal service. Great views and an atmosphere worth forfeiting the day’s sightseeing. Munnar Summer Castle is ‘the’ place for both Honey Mooners and family. There is something for everyone in this cosy nook.
                    </p>
                    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 py-8 lg:py-3 mt-8 mx-6 rounded-2xl lg:rounded-full bg-gray-500 bg-opacity-20">
                        <div className="col-span-1 text-center">
                            <FaWifi className="mx-auto text-primary-bg size-6 mb-2" />
                            Wifi
                        </div>
                        <div className="col-span-1 text-center">
                            <FaBowlFood className="mx-auto text-primary-bg size-6 mb-2" />
                            Food
                        </div>
                        <div className="col-span-1 text-center">
                            <FaCar className="mx-auto text-primary-bg size-6 mb-2" />
                            Pickup and drop
                        </div>
                    </div>
                </div>
                <div className="col-span-1 p-4 m-4">
                    <SwiperAboutAdvanced />
                </div>
            </section>

            {/* EROORRORORORROR */}
            <section ref={highlightsSectionRef} className="pt-14 mx-6 lg:mx-32">
                <h2 className="text-center text-4xl lg:text-5xl font-bold text-secondary-bg">
                    Our Highlights
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1 p-4 m-4 mx-auto mt-14">
                        <img className="w-96" src={multiCuisineIcon} alt="Multi-cuisine restaurant" />
                    </div>
                    <div className="col-span-1 p-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Multi-cuisine restaurant
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            Munnar Summer Castle has an incredible multi-cuisine restaurant. We serve the best food prepared with carefully handpicked local ingredients. Our predominantly white walled décor adds more elegance to the dinning with beautiful mountain views.                    </p>
                        <p className="font-normal text-lg mt-4">
                            We serve the best Gujarathi Cuisine in the whole of Munnar. All of it prepared by our own in-house Gujarathi Chef. Let your menu be anything, come prepared to feast on a wide range of choices from Arabic to south Indian to Traditional Kerala recipes to satisfy your taste buds.                    </p>
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1  order-2 lg:order-1 py-4 px-2 lg:px-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Lawn
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            A lawn large enough to hold Bonfire, music or themed dinner for 80 guests, upon request. Our lawn is the perfect space for setting up candle lit dinner for honey moon couples. It will be undoubtedly your most precious memory with the greens and sky as your witness and backdrop.
                        </p>
                    </div>
                    <div className="col-span-1  order-1 lg:order-2 py-4 px-2 lg:px-4 mx-auto mt-14">
                        <img className="w-96" src={dinerImg} alt="Multi-cuisine restaurant" />
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1 py-4 px-2 lg:px-4 mx-auto mt-14">
                        <img className="w-96" src={campFIreImg} alt="Multi-cuisine restaurant" />
                    </div>
                    <div className="col-span-1 py-4 px-2 lg:px-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Camp fire with music & Barbeque on request
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            A lawn large enough to hold Bonfire, music or themed dinner for 80 guests, upon request. Our lawn is the perfect space for setting up candle lit dinner for honey moon couples. It will be undoubtedly your most precious memory with the greens and sky as your witness and backdrop.
                        </p>
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1  order-2 lg:order-1 py-4 px-2 lg:px-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Free Wi-Fi
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            While the destination, Munnar lets you away from the maddening routine of yours. Your stay can get you connected to the rest of the world. We are equipped with free Wi-Fi to enable you to flaunt all your special pictures and videos on social media.
                        </p>
                    </div>
                    <div className="col-span-1  order-1 lg:order-2 py-4 px-2 lg:px-4 mx-auto mt-14">
                        <img className="w-96" src={wifiImg} alt="Multi-cuisine restaurant" />
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1 py-4 px-2 lg:px-4 mx-auto mt-14">
                        <img className="w-96" src={parkingImg} alt="Multi-cuisine restaurant" />
                    </div>
                    <div className="col-span-1 py-4 px-2 lg:px-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Ample parking
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            Ample parking space is another highlight of ours. Making it ideal for group check-in.
                        </p>
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="col-span-1  order-2 lg:order-1 py-4 px-2 lg:px-4 my-auto">
                        <h4 className="text-3xl font-bold text-secondary-bg">
                            Conference / Banquet hall
                        </h4>
                        <p className="font-normal text-lg  mt-8">
                            A conference/banquet room large enough to hold 50 guests. A terrace garden with incredible view.
                        </p>
                    </div>
                    <div className="col-span-1  order-1 lg:order-2 py-4 px-2 lg:px-4 mx-auto mt-14">
                        <img className="w-96" src={conferenceImg} alt="Multi-cuisine restaurant" />
                    </div>
                </div>
                <hr className="border-gray-400 opacity-60 mx-8 mt-16" />
            </section>


            <section ref={roomsSectionRef} className="py-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-12 lg:mt-0">
                <div className="order-2 lg:order-1 col-span-1 p-4 m-4">
                    <SwiperAboutAdvanced />
                </div>
                <div  data-aos={"fade-left"} className="order-1 lg:order-2 col-span-1 px-4 m-4 mt-0 lg:mt-16">
                    <h2 className="text-4xl font-bold text-secondary-bg">
                        Rooms
                    </h2>
                    <p className="font-normal text-lg mt-8">
                        Munnar Summer Castle has a total inventory of 46rooms. All rooms are well furnished and colour coordinated to give you a soothing stay. All rooms are propped with coffee station, toiletries and free Wi-Fi. Bathrooms are clean-lined and modern.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
                        <div className="flex items-center">
                            <FaPeopleGroup size={30} className="text-primary-bg mx-4" />
                            <span>Conference room (50 max)</span>
                        </div>
                        <div className="flex items-center">
                            <FaTree size={30} className="text-primary-bg mx-4" />
                            <span>Terrace garden</span>
                        </div>
                        <div className="flex items-center">
                            <MdLocalLaundryService size={30} className="text-primary-bg mx-4" />
                            <span>Laundry</span>
                        </div>
                        <div className="flex items-center">
                            <FaLeaf size={30} className="text-primary-bg mx-4" />
                            <span>Lawn</span>
                        </div>
                        <div className="flex items-center">
                            <FaParking size={30} className="text-primary-bg mx-4" />
                            <span>Parking</span>
                        </div>
                        <div className="flex items-center">
                            <IoRestaurant size={30} className="text-primary-bg mx-4" />
                            <span>Restaurant</span>
                        </div>
                        <div className="flex items-center">
                            <FaWifi size={30} className="text-primary-bg mx-4" />
                            <span>Wi-Fi</span>
                        </div>
                        <div className="flex items-center">
                            <FaPersonBooth size={30} className="text-primary-bg mx-4" />
                            <span>Room service</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-400 opacity-60 mx-12 lg:mx-80 mt-4" />

            {/* EROORRORORORROR */}
            <section  data-aos={"zoom-in"} className="my-24">
                <div className='rounded-3xl text-white text-center font-bold text-sm lg:text-4xl my-0 lg:my-4 w-11/12 lg:w-3/4 mx-auto py-36 lg:py-96' style={{
                    backgroundImage: `url(${bookNowImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                }}>
                    <div className="mx-2 lg:mx-32 rounded-3xl bg-black shadow-lg py-6 bg-opacity-50">
                        Enjoy the magical beauty of #Munnar, experience the beauty of Gods own country
                    </div>
                </div>
            </section>

            <footer ref={footerRef}>
                <div className="bg-gray-300 text-center py-4">
                    <div className="flex flex-col items-center mt-6 mb-8">
                        <div className="">
                            <a className="navbar-brand" href="index.html"><img className='w-64' src={munnarCastleLogo} /></a>
                        </div>
                        <div className="flex items-center flex-col lg:flex-row gap-x-36 my-8 mx-8">
                            <div className="whitespace-pre text-start text-wrap">
                                <div className="text-2xl mb-4">Munnar Summercastle</div>
                                <div>
                                    Eatty city, Aanachal Po, Munnar, Kerala PIN. 685 565,<br />
                                    Reservation: +91 8129527111<br />
                                    Mail us: info@munnarsummercastle.in,<br />
                                    sales@munnarsummercastle.in<br />
                                </div>
                            </div>
                            <div className="mt-6 lg:mt-0">
                                <nav className="flex flex-wrap items-center">
                                    {navItems.map((item) => (
                                        <div
                                            onClick={onNavItemClick}
                                            data-key={item.label}
                                            key={item.label}
                                            className="text-gray-600 cursor-pointer hover:text-gray-900 px-2 lg:px-3x py-2 text-sm font-medium transition-colors duration-200"
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <a href="https://linkedin.com/in/jafarabbas33" target="_blank" rel="noopener noreferrer" className="flex items-center mt-6 text-base bg-black bg-opacity-90 text-white px-6 py-2 rounded-full">
                            <span>Made with </span>
                            <FaHeartbeat className="animate-pulse mx-2" />
                            <span> by Jafar Abbas</span>
                        </a>
                        <p className="text-xl mt-5 mx-2">
                            © 2025 Munnar Summer Castle. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Index;
