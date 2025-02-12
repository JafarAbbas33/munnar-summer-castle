import React, { useRef, useState } from 'react';
import munnarCastleLogo from '../../assets/images/LOGO1.png';

const MenuIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

const Header = ({ welcomeSectionRef, aboutSectionRef, highlightsSectionRef, roomsSectionRef, footerRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
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

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Highlights', href: '/packages' },
        { label: 'Rooms', href: '/rooms' },
        { label: 'Book Now', href: '/book' },
        { label: 'Contact Us', href: '/contact' }
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a className="navbar-brand" href="index.html"><img className='w-32' src={munnarCastleLogo} /></a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navItems.map((item) => (
                            <div
                                onClick={onNavItemClick}
                                data-key={item.label}
                                key={item.label}
                                className="text-gray-600 hover:text-gray-900 cursor-pointer px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {item.label}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="block ms-auto md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {navItems.map((item) => (
                                <div
                                    data-key={item.label}
                                    key={item.label}
                                    className="text-gray-600 hover:text-gray-900 cursor-pointer hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={(event) => {setIsMenuOpen(false); onNavItemClick(event)}}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;