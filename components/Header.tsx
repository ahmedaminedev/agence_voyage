

import React, { useContext, useState } from 'react';
import { AppContext, Page } from '../context/AppContext';

// --- SVG Icons ---
const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 0 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.953 11.953 0 0 1 12 10.5c2.998 0 5.74 1.1 7.843 2.918m-15.686 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0 0 12 13.5c2.998 0 5.74 1.1 7.843 2.918" />
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-4 h-4"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.582 0 0 .582 0 1.305v21.39C0 23.418.582 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.743 0 1.325-.582 1.325-1.305V1.305C24 .582 23.418 0 22.675 0z" /></svg>;
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>;
const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.1.22-1.9.28-.8.07-1.49.1-2.09.1L15 19c-2.19 0-3.8-.16-4.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L8 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.1.22 1.9.28.8-.07 1.49-.1 2.09-.1L15 5c2.19 0 3.8.16 4.83.44.9.25 1.48.83 1.73 1.73z"/></svg>;


// --- Type Definition ---
interface NavLinkItem {
  label: string;
  page?: Page;
  params?: any;
  children?: NavLinkItem[];
}

// --- Navigation Components ---
const DesktopNavItem: React.FC<{ item: NavLinkItem }> = ({ item }) => {
    const { currentPage, setCurrentPage } = useContext(AppContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleNav = (page?: Page, params?: any) => {
        if (page) setCurrentPage(page, params);
    };

    const hasActiveChild = item.children ? item.children.some(child => currentPage.page === child.page && JSON.stringify(currentPage.params) === JSON.stringify(child.params)) : false;
    const isActive = currentPage.page === item.page && (!item.params || JSON.stringify(currentPage.params) === JSON.stringify(item.params));
    
    const textColor = 'text-gray-600 hover:text-brand-blue';
    const activeTextColor = 'text-brand-orange';

    if (item.children) {
        const isMultiColumn = item.children.length > 9;
        return (
            <div className="relative h-full flex items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <button className={`relative flex items-center h-full px-3 text-base font-semibold transition-colors duration-200 group whitespace-nowrap ${isActive || hasActiveChild ? activeTextColor : textColor}`}>
                    {item.label}
                    <ChevronDownIcon className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 transform z-50 ${isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className={`bg-white rounded-md shadow-lg border border-gray-100 p-4 ${isMultiColumn ? 'w-max' : 'w-60'}`}>
                        <div className={isMultiColumn ? 'grid grid-cols-3 gap-x-8 gap-y-1' : 'space-y-1'}>
                            {item.children.map(child => {
                                const isChildActive = currentPage.page === child.page && JSON.stringify(currentPage.params) === JSON.stringify(child.params);
                                return (
                                <a key={child.label} href="#" onClick={(e) => { e.preventDefault(); handleNav(child.page, child.params); }} className={`block px-3 py-2 text-sm whitespace-nowrap rounded-md ${isChildActive ? 'font-bold text-brand-orange' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-orange'}`}>
                                    {child.label}
                                </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav(item.page, item.params); }} className={`relative h-full flex items-center px-3 text-base font-semibold transition-colors duration-200 group whitespace-nowrap ${isActive ? activeTextColor : textColor}`}>
            {item.label}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </a>
    );
};

const MobileNavItem: React.FC<{ item: NavLinkItem; closeMenu: () => void }> = ({ item, closeMenu }) => {
    const { currentPage, setCurrentPage } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (page?: Page, params?: any) => {
        if (page) {
            setCurrentPage(page, params);
            closeMenu();
        }
    };
    
    const isActive = currentPage.page === item.page && JSON.stringify(currentPage.params) === JSON.stringify(item.params);

    if (item.children) {
        const hasActiveChild = item.children.some(child => currentPage.page === child.page && JSON.stringify(currentPage.params) === JSON.stringify(child.params));
        return (
            <div className="w-full text-center">
                <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-center items-center py-4 text-lg font-semibold ${hasActiveChild ? 'text-brand-orange' : 'text-gray-800'}`}>
                    {item.label}
                    <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="pb-2 bg-gray-50/50">
                        {item.children.map(child => {
                            const isChildActive = currentPage.page === child.page && JSON.stringify(currentPage.params) === JSON.stringify(child.params);
                            return (
                            <a key={child.label} href="#" onClick={(e) => { e.preventDefault(); handleNav(child.page, child.params); }} className={`block py-3 text-base ${isChildActive ? 'font-semibold text-brand-orange' : 'text-gray-700 hover:text-brand-orange'}`}>
                                {child.label}
                            </a>
                        )})}
                    </div>
                )}
            </div>
        );
    }

    return (
         <div className="w-full text-center">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNav(item.page, item.params); }} className={`block w-full py-4 text-lg font-semibold ${isActive ? 'text-brand-orange' : 'text-gray-800 hover:text-brand-orange'}`}>
                {item.label}
            </a>
        </div>
    );
};

const CurrencySwitcher: React.FC = () => {
    const { currencies, selectedCurrency, setCurrency } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleSetCurrency = (code: string) => {
        setCurrency(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" onMouseLeave={() => setIsOpen(false)}>
            <button onMouseEnter={() => setIsOpen(true)} className="flex items-center space-x-1 text-white">
                <span>Devise ({selectedCurrency.symbol})</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-black overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {currencies.map(currency => (
                    <a href="#" key={currency.code} onClick={(e) => { e.preventDefault(); handleSetCurrency(currency.code); }} className={`block px-4 py-2 text-sm ${selectedCurrency.code === currency.code ? 'font-bold bg-gray-100 text-brand-orange' : 'text-gray-700 hover:bg-gray-100'}`}>
                        {currency.name}
                    </a>
                ))}
            </div>
        </div>
    );
};


// --- Main Header Component ---
const Header: React.FC = () => {
  const { setCurrentPage, toggleGroupModal } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const tunisianCities = [
      'Ain Drahem', 'Bizerte', 'Djerba', 'Douz', 'Gabes', 'Gafsa', 'Hammamet',
      'Kairouan', 'Kasserine', 'Kelibia', 'Kerkennah', 'Korbous', 'Le Kef',
      'Mahdia', 'Mednenine', 'Monastir', 'Nabeul', 'Nefta', 'Sbeitla', 'Sfax',
      'Sousse', 'Tabarka', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'Zarzis'
    ].map(city => ({ label: city, page: Page.Hotels, params: { destination: city } }));

  const navLinks: NavLinkItem[] = [
    { label: 'Accueil', page: Page.Home },
    { 
        label: 'Hôtels en Tunisie', 
        children: [
            { label: 'Tous les hôtels en Tunisie', page: Page.Hotels },
            ...tunisianCities
        ] 
    },
    { label: 'Bien-être', page: Page.Wellness },
    {
      label: 'Voyages à l\'étranger',
      children: [
        { label: 'Voyages Organisés', page: Page.Stays, params: { type: 'organise' } },
        { label: 'Voyages à la carte', page: Page.Stays, params: { type: 'a-la-carte' } },
      ]
    },
    { label: 'Circuits & Excursions', page: Page.Circuits },
    { label: 'Vols', page: Page.Flights },
    { label: 'Omra', page: Page.Omra },
    { label: 'Plus', children: [ { label: 'À propos', page: Page.About }, { label: 'Blog', page: Page.Blog } ] }
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
  };
  const handleAuthClick = () => {
    setCurrentPage(Page.Auth);
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className="sticky top-0 z-50 shadow-md">
        {/* Top Bar */}
        <div className="hidden lg:block bg-brand-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10 text-sm font-medium">
                    <div className="flex items-center space-x-6">
                        <CurrencySwitcher />
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleGroupModal(); }} className="text-white hover:text-gray-200 transition-colors">Demande de groupe</a>
                    </div>
                    <div className="flex items-center space-x-4 text-white">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.Contact); }} className="hover:text-gray-200 transition-colors">Contact</a>
                        <span className="text-gray-400">|</span>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.Blog); }} className="hover:text-gray-200 transition-colors">Blog</a>
                        <span className="text-gray-400">|</span>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.About); }} className="hover:text-gray-200 transition-colors">À propos</a>
                        <span className="text-gray-400">|</span>
                        <a href="tel:+21636290000" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                            <PhoneIcon className="w-4 h-4" />
                            <span>+216 36 290 000</span>
                        </a>
                        <span className="text-gray-400">|</span>
                        <div className="flex items-center space-x-3">
                            <a href="#" className="hover:text-white"><FacebookIcon className="w-4 h-4"/></a>
                            <a href="#" className="hover:text-white"><InstagramIcon className="w-4 h-4"/></a>
                            <a href="#" className="hover:text-white"><YouTubeIcon className="w-4 h-4"/></a>
                        </div>
                        <span className="text-gray-400">|</span>
                        <button onClick={handleAuthClick} className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                            <UserIcon className="w-5 h-5" />
                            <span>Se connecter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center lg:grid lg:grid-cols-3 h-20">
                    {/* Left: Logo */}
                    <div className="justify-self-start">
                        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Home); }} className="flex items-center space-x-2 rtl:space-x-reverse">
                            <GlobeIcon className="h-8 w-8 text-brand-blue" />
                            <span className="text-2xl font-bold font-serif text-gray-800">Voyage<span className="text-brand-orange">Étoile</span></span>
                        </a>
                    </div>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex items-center justify-center h-full">
                        <nav className="flex items-center space-x-1 h-full whitespace-nowrap">
                            {navLinks.map(link => <DesktopNavItem key={link.label} item={link} />)}
                        </nav>
                    </div>

                    {/* Right: Button & Hamburger */}
                    <div className="justify-self-end flex items-center">
                        <div className="hidden lg:block">
                            <button className="bg-brand-blue text-white px-5 py-2.5 rounded-2xl font-semibold text-sm hover:bg-brand-blue-dark transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                                Super Promo
                            </button>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-brand-blue">
                                <MenuIcon className="w-7 h-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="p-5 flex justify-between items-center border-b border-gray-200">
                    <span className="text-xl font-bold text-gray-800 font-serif">Menu</span>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon className="w-6 h-6"/>
                    </button>
                </div>
                <nav className="flex flex-col items-center flex-grow overflow-y-auto">
                    <div className="w-full divide-y divide-gray-100">
                        {navLinks.map(link => <MobileNavItem key={link.label} item={link} closeMenu={() => setIsMenuOpen(false)} />)}
                        <div className="w-full text-center">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.Contact); setIsMenuOpen(false); }} className={`block w-full py-4 text-lg font-semibold text-gray-800 hover:text-brand-orange`}>
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
                 <div className="p-4 w-full flex flex-col items-center space-y-3 border-t border-gray-200 bg-gray-50/70">
                     <button onClick={handleAuthClick} className="btn-gradient text-white w-full py-3 rounded-full text-base font-semibold">
                        Se connecter
                    </button>
                    <button className="bg-brand-blue text-white w-full py-3 rounded-full text-base font-semibold hover:bg-brand-blue-dark transition-colors">
                        Super Promo
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;