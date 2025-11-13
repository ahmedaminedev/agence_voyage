import React, { useContext, useState, Fragment, useEffect, useRef } from 'react';
import { AppContext, Page } from '../context/AppContext';
import { Stay, HotelAdvantage, HotelRatingBreakdown, NearbyHotel, Review as ReviewType, DatePriceTable, OptionalExcursion, FAQ, Tariff, HotelInfo, RoomPrice } from '../types';
import QuoteRequestModal from '../components/QuoteRequestModal';

// --- GENERIC ICONS ---
const Star: React.FC<{ filled: boolean; className?: string }> = ({ filled, className }) => ( <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${className}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg> );
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> );
const XIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg> );
const BedIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> );
const LocationIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> );
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>);
const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.582 0 0 .582 0 1.305v21.39C0 23.418.582 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.743 0 1.325-.582 1.325-1.305V1.305C24 .582 23.418 0 22.675 0z" /></svg>;
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.741 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C8.318 0 7.92.001 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>;


// --- SHARED COMPONENTS ---
const Breadcrumb: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage } = useContext(AppContext);
    const crumbs = [
        { label: 'Accueil', page: Page.Home },
        { label: stay.type === 'omra' ? 'Omra' : (stay.type === 'hotel' || stay.type === 'promo' ? 'Hôtels' : 'Voyages'), page: stay.type === 'omra' ? Page.Omra : Page.Stays },
        { label: stay.title, page: Page.StayDetail, params: { id: stay.id } }
    ];
    return (
        <nav className="text-sm text-gray-500">
            <ol className="list-none p-0 inline-flex">
                {crumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(crumb.page, crumb.params); }} className="hover:text-brand-orange">
                            {crumb.label}
                        </a>
                        {index < crumbs.length - 1 && <ChevronRightIcon className="h-4 w-4 mx-1" />}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

const SocialShare: React.FC = () => (
    <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold text-center mb-3">Partager</h3>
        <div className="flex justify-center items-center space-x-3">
            <a href="#" className="p-2 rounded-full border text-blue-800 hover:bg-blue-50"><FacebookIcon/></a>
            <a href="#" className="p-2 rounded-full border text-sky-500 hover:bg-sky-50"><TwitterIcon/></a>
            <a href="#" className="p-2 rounded-full border text-blue-600 hover:bg-blue-50"><LinkedInIcon/></a>
            <a href="#" className="p-2 rounded-full border text-pink-600 hover:bg-pink-50"><InstagramIcon/></a>
        </div>
    </div>
);

const Section: React.FC<{title?: string, children: React.ReactNode, id?: string, className?: string}> = ({ title, children, id, className = "" }) => (
    <div id={id} className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${className}`}>
        {title && <h2 className="text-3xl font-bold mb-6 font-amiri text-omra-green">{title}</h2>}
        {children}
    </div>
);

// --- HOTEL VIEW COMPONENTS ---
const HotelNav: React.FC = () => {
    const navItems = [
        { label: 'Photos', href: '#photos'},
        { label: 'Tarifs & Réservation', href: '#booking' },
        { label: 'Description', href: '#description' },
        { label: 'Points forts', href: '#ratings' },
        { label: 'Map', href: '#map' },
        { label: 'Equipements', href: '#amenities' },
    ];
    return (
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-b">
                    <nav className="flex -mb-px">
                        {navItems.map(item => (
                            <a key={item.label} href={item.href} className="px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-purple-700 hover:border-purple-700 font-semibold text-sm whitespace-nowrap">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

const HotelHeaderInfo: React.FC<{ stay: Stay }> = ({ stay }) => {
    const mainAmenityIcons: { [key: string]: React.ReactNode } = { 'Climatisation': '💨', 'Garderie d\'enfants': '👶', 'Bar': '🍸', 'Restaurant': '🍽️', 'Plage': '🏖️' };
    
    return (
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left part: Title, rating, address */}
                <div className="lg:col-span-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => <Star key={i} filled={true} />)}
                            </div>
                            <h1 className="text-3xl font-bold font-serif text-gray-900 mt-2">{stay.title}</h1>
                            <p className="text-sm text-gray-500 mt-1">{stay.location?.address}</p>
                        </div>
                        <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                            <HeartIcon className="w-6 h-6" />
                        </button>
                    </div>
                    {stay.specialOffer && (
                         <div className="mt-4 p-3 bg-pink-100 text-pink-700 font-semibold rounded-md text-sm flex items-center">
                            <span className="text-xl mr-2">💖</span>
                            {stay.specialOffer.split('//').map((line, index) => <Fragment key={index}>{line}<br/></Fragment>)}
                        </div>
                    )}
                </div>

                {/* Right part: Amenities */}
                <div className="border-t lg:border-t-0 lg:border-l lg:pl-6 pt-6 lg:pt-0">
                    <h3 className="font-bold text-gray-800">Équipements principaux de l'hôtel</h3>
                    <div className="grid grid-cols-2 gap-y-3 mt-3 text-gray-700">
                        {stay.mainAmenities?.map(amenity => (
                            <div key={amenity} className="flex items-center">
                                <span className="text-xl mr-2">{mainAmenityIcons[amenity] || '✔️'}</span>
                                <span>{amenity}</span>
                            </div>
                        ))}
                    </div>
                    <a href="#amenities" className="text-sm text-brand-orange hover:underline font-semibold mt-4 block">
                        Quels sont les autres équipements disponibles ?
                    </a>
                </div>
            </div>
        </div>
    );
};

const HotelImageGallery: React.FC<{ stay: Stay }> = ({ stay }) => {
    const mainImage = stay.gallery[0] || stay.imageUrl;
    const otherImages = stay.gallery.length > 1 ? stay.gallery.slice(1, 5) : [stay.imageUrl, stay.imageUrl, stay.imageUrl, stay.imageUrl];
    return(
        <div id="photos" className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
            <div className="col-span-4 sm:col-span-2 row-span-2 rounded-lg overflow-hidden">
                <img src={mainImage} alt={stay.title} className="w-full h-full object-cover"/>
            </div>
            {otherImages.map((img, i) => (
                <div key={i} className="col-span-2 sm:col-span-1 rounded-lg overflow-hidden">
                    <img src={img} alt={`${stay.title} ${i}`} className="w-full h-full object-cover"/>
                </div>
            ))}
        </div>
    );
};

const BookingWidget: React.FC<{ stayId?: number }> = ({ stayId }) => {
    const { setCurrentPage } = useContext(AppContext);

    const handleBookingClick = () => {
        if (stayId) {
            setCurrentPage(Page.Booking, { id: stayId });
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
                <label htmlFor="arrival" className="block text-sm font-medium text-gray-700">Arrivée</label>
                <div className="relative mt-1"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><CalendarIcon className="h-5 w-5 text-gray-400" /></div><input type="text" id="arrival" defaultValue="23/09/2025" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" /></div>
            </div>
            <div>
                <label htmlFor="departure" className="block text-sm font-medium text-gray-700">Départ</label>
                <div className="relative mt-1"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><CalendarIcon className="h-5 w-5 text-gray-400" /></div><input type="text" id="departure" defaultValue="24/09/2025" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" /></div>
            </div>
            <div>
                <label htmlFor="occupancy" className="block text-sm font-medium text-gray-700">Chambre et occupation</label>
                <div className="relative mt-1"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><BedIcon className="h-5 w-5 text-gray-400" /></div><select id="occupancy" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white appearance-none"><option>1 chambre, 2 adultes</option><option>1 chambre, 1 adulte</option><option>2 chambres, 4 adultes</option></select></div>
            </div>
            <div><button onClick={handleBookingClick} disabled={!stayId} className="w-full bg-purple-700 text-white font-bold py-2.5 px-4 rounded-md hover:bg-purple-800 transition-colors h-11 disabled:bg-gray-400">{stayId ? 'Réserver' : 'Calculer le prix'}</button></div>
        </div>
    );
};

const AdvantagesSection: React.FC<{advantages: HotelAdvantage[]}> = ({ advantages }) => (
    <div className="space-y-4">
        {advantages.map(advantage => (
            <div key={advantage.title} className="flex items-start p-4 border-l-4 border-green-500 bg-gray-50/70 rounded-r-lg">
                <div className="flex-shrink-0"><div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><CheckIcon className="h-5 w-5 text-green-600" /></div></div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{advantage.title}</h3>
                    <div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: advantage.description }} />
                </div>
            </div>
        ))}
    </div>
);

const amenityIcons: {[key:string]: React.ReactNode} = { 'Climatisation': '💨', 'Téléphone avec ligne directe': '📞', 'Plage': '🏖️', 'Coffre fort': '🔒', 'Casino': '🎰', 'Centre de remise en forme': '💪', 'Télévision': '📺', 'Boutique de cadeaux': '🎁', 'Wifi gratuit dans le hall de réception': '📶', 'Sèche-cheveux': '🌬️', 'Bar': '🍸', 'Centre d\'affaires': '💼', 'Café': '☕', 'Piscine': '🏊', 'Chaînes câblées': '📡', 'Change': '💱', 'Parking gratuit': '🅿️', 'Garderie d\'enfants': '👶', 'Restaurant': '🍽️', 'Salon de Beauté': '💅', 'Sauna': '🔥', 'Massage': '💆', 'Ascenseur': '↕️', 'Chambre non fumeur': '🚭', 'Wifi gratuit dans les chambres': '📶' };
const AmenitiesSection: React.FC<{amenities: string[]}> = ({ amenities }) => (
    <div className="columns-2 md:columns-3 gap-x-6 gap-y-4">
        {amenities.map(amenity => ( <div key={amenity} className="flex items-center text-gray-700 mb-3"><span className="text-xl mr-3">{amenityIcons[amenity] || <CheckIcon className="text-purple-700"/>}</span><span>{amenity}</span></div> ))}
    </div>
);

const RatingBreakdownSection: React.FC<{ breakdown: HotelRatingBreakdown }> = ({ breakdown }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
        {Object.entries(breakdown).map(([key, value]) => (
            <div key={key}>
                <div className="flex justify-between items-center text-sm font-medium text-gray-700"><span>{key}</span><span>{value} %</span></div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2"><div className="bg-green-600 h-2 rounded-full" style={{ width: `${value}%` }}></div></div>
            </div>
        ))}
    </div>
);

const ReviewsSection: React.FC<{reviews: ReviewType[]}> = ({ reviews }) => (
    <div className="space-y-4 divide-y divide-gray-200">
        {reviews.map((review) => (<div key={review.id} className="pt-4 first:pt-0"><p className="font-bold text-lg text-purple-800">{review.author}</p><p className="text-gray-600">{review.comment}</p></div>))}
    </div>
);

const LocationSection: React.FC<{ lat: number; lng: number; address: string }> = ({ lat, lng, address }) => (
    <div>
        <p className="text-gray-600 mb-4">{address}</p>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border"><iframe width="100%" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`}></iframe></div>
    </div>
);

const FAQItem: React.FC<{ faq: FAQ, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50"
            >
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="p-4 text-gray-600 bg-gray-50/50">{faq.answer}</p>
            </div>
        </div>
    );
};

const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

const NearbyHotelsSection: React.FC<{ hotels: NearbyHotel[], destination: string }> = ({ hotels, destination }) => {
    const { setCurrentPage } = useContext(AppContext);
    return ( <div className="columns-2 md:columns-4 gap-x-6">{hotels.map(hotel => (<a key={hotel.id} href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Stays, { destination: destination })}} className="block mb-2 text-gray-700 hover:text-brand-orange underline">{hotel.name}</a>))}</div>);
}

const HotelDetailView: React.FC<{ stay: Stay; onQuoteRequest?: () => void }> = ({ stay }) => {
    return (
        <div className="bg-gray-50/70">
            <HotelNav />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <div><Breadcrumb stay={stay} /></div>
                <HotelImageGallery stay={stay} />
                <HotelHeaderInfo stay={stay} />

                <Section title="Tarifs & Réservation" id="booking"><BookingWidget stayId={stay.id} /></Section>
                {stay.advantages && <Section title={`Avantages Prix ${stay.title}`} id="advantages"><AdvantagesSection advantages={stay.advantages} /></Section>}
                <Section title="Description de l'hôtel" id="description"><p className="text-gray-700 leading-relaxed">{stay.longDescription}</p></Section>
                {stay.location && <Section title="Emplacement" id="map"><LocationSection lat={stay.location.lat} lng={stay.location.lng} address={stay.location.address} /></Section>}
                {stay.faq && stay.faq.length > 0 && <Section title={`Questions fréquentes sur Hôtel ${stay.title}`} id="faq"><FAQSection faqs={stay.faq} /></Section>}
                {stay.ratingBreakdown && <Section title="Points forts de l'hôtel" id="ratings"><RatingBreakdownSection breakdown={stay.ratingBreakdown} /></Section>}
                {stay.amenities && <Section title="Équipements de l'hôtel" id="amenities"><AmenitiesSection amenities={stay.amenities} /></Section>}
                {stay.reviews && stay.reviews.length > 0 && <Section title="Avis de nos clients" id="reviews"><ReviewsSection reviews={stay.reviews} /></Section>}
                {stay.nearbyHotels && <Section title={`Découvrez tous nos hôtels à ${stay.destination}`} id="nearby"><NearbyHotelsSection hotels={stay.nearbyHotels} destination={stay.destination} /></Section>}
            </div>
        </div>
    )
};

// --- TRIP VIEW COMPONENTS ---
const ProgramSection: React.FC<{ program: { day: number; title: string; description: string }[] }> = ({ program }) => (
    <div className="relative space-y-6">
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" aria-hidden="true"></div>
        {program.map(p => (
            <div key={p.day} className="flex items-start">
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold">{p.day}</div>
                <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-gray-600">{p.description}</p>
                </div>
            </div>
        ))}
    </div>
);

const PricingTable: React.FC<{ tables: DatePriceTable[] }> = ({ tables }) => {
    const { parseAndConvertPrice } = useContext(AppContext);
    return (
        <div className="space-y-6">
        {tables.map(table => (
            <div key={table.dateRange} className="overflow-x-auto">
                 <h4 className="font-bold text-lg bg-gray-100 p-2 rounded-t-md">{table.dateRange}</h4>
                 <table className="w-full text-left border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Hôtel</th>
                            {table.hotels[0]?.prices.map(priceInfo => <th key={priceInfo.label} className="p-2 border">{priceInfo.label}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {table.hotels.map(hotel => (
                            <tr key={hotel.hotelName} className="odd:bg-white even:bg-gray-50">
                                <td className="p-2 border font-semibold">{hotel.hotelName}</td>
                                {hotel.prices.map((priceInfo, index) => (
                                    <td key={`${hotel.hotelName}-${priceInfo.label}-${index}`} className="p-2 border">{parseAndConvertPrice(priceInfo.price)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>
        ))}
        </div>
    );
};

const TripDetailView: React.FC<{ stay: Stay; onQuoteRequest: () => void }> = ({ stay, onQuoteRequest }) => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);
    return (
        <div className="bg-gray-50/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <div><Breadcrumb stay={stay} /></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        <HotelImageGallery stay={stay} />
                        <Section className="!p-0">
                             <div className="p-6">
                                <h1 className="text-3xl font-bold font-serif text-gray-900">{stay.title}</h1>
                                <p className="mt-2 text-lg text-gray-600">{stay.longDescription}</p>
                             </div>
                        </Section>
                        {stay.program && stay.program.length > 0 && <Section title="Programme du voyage"><ProgramSection program={stay.program} /></Section>}
                        {stay.pricingTables && stay.pricingTables.length > 0 && <Section title="Tarifs"><PricingTable tables={stay.pricingTables} /></Section>}
                        {stay.optionalExcursions && stay.optionalExcursions.length > 0 && (
                            <Section title="Excursions en Option">
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {stay.optionalExcursions.map(excursion => <li key={excursion.description}>{excursion.description}</li>)}
                                </ul>
                            </Section>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {stay.included && stay.included.length > 0 && <Section title="Le prix comprend"><ul className="space-y-2">{stay.included.map(item => <li key={item} className="flex items-start"><CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /><span>{item}</span></li>)}</ul></Section>}
                           {stay.excluded && stay.excluded.length > 0 && <Section title="Le prix ne comprend pas"><ul className="space-y-2">{stay.excluded.map(item => <li key={item} className="flex items-start"><XIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" /><span>{item}</span></li>)}</ul></Section>}
                        </div>
                    </div>
                    <aside className="sticky top-24 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg border">
                             <span className="text-sm text-gray-500">à partir de</span>
                             <p className="text-4xl font-bold text-brand-orange">{convertPrice(stay.price)}</p>
                             <span className="text-xs text-gray-500">par personne</span>
                             <button onClick={onQuoteRequest} className="mt-4 w-full btn-gradient text-white font-bold py-3 px-4 rounded-lg">
                                Demander un devis
                            </button>
                             <button onClick={() => setCurrentPage(Page.Booking, { id: stay.id })} className="mt-2 w-full bg-brand-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-blue-dark transition-colors">
                                Réserver
                            </button>
                        </div>
                        <SocialShare />
                    </aside>
                </div>
            </div>
        </div>
    );
};

// --- OMRA VIEW V2 COMPONENTS ---
const KaabaIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8L12 3L20 8L12 13L4 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 8V16L12 21V13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M20 8V16L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
const GreenDomeIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 8V20H21V8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5"/><path d="M3.5 7.5L12 13L20.5 7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 13V20" stroke="currentColor" strokeWidth="1.5"/></svg>;
const PlaneIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;

const OmraDetailView: React.FC<{ stay: Stay; onQuoteRequest: () => void }> = ({ stay, onQuoteRequest }) => {
    const { setCurrentPage, convertPrice, parseAndConvertPrice } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('journey');

    const TabButton: React.FC<{tabId: string, title: string}> = ({ tabId, title }) => (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`py-4 px-1 text-base md:text-lg font-semibold whitespace-nowrap md:px-6 ${activeTab === tabId ? 'active text-omra-green' : 'text-gray-500 hover:text-omra-green'}`}
        >
            {title}
        </button>
    );

    const TimelineItem: React.FC<{day: number, title: string, description: string}> = ({day, title, description}) => (
        <div className="omra-v2-timeline-item">
            <div className="omra-v2-timeline-icon">
                <span className="text-xs font-bold">{day}</span>
            </div>
            <div className="pl-8">
                <h4 className="font-bold text-omra-green text-lg">{title}</h4>
                <p className="mt-1 text-gray-600">{description}</p>
            </div>
        </div>
    );
    
    return (
        <div className="omra-v2-page">
            <section className="relative h-[60vh] bg-cover bg-center flex items-end text-white" style={{ backgroundImage: `url(${stay.gallery[0] || stay.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative container mx-auto p-6 md:p-12 w-full">
                    <h1 className="text-4xl md:text-6xl font-amiri font-bold omra-v2-hero-title">{stay.title}</h1>
                    <p className="mt-2 text-lg md:text-xl max-w-3xl text-gray-200">{stay.description}</p>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                        <div className="omra-v2-highlight-card rounded-lg p-3 text-center"><p className="font-bold text-xl">{stay.duration}</p><p className="text-sm opacity-80">Jours</p></div>
                        <div className="omra-v2-highlight-card rounded-lg p-3 text-center"><p className="font-bold text-xl">5 ★</p><p className="text-sm opacity-80">Hôtels</p></div>
                        <div className="omra-v2-highlight-card rounded-lg p-3 text-center"><p className="font-bold text-xl">Inclus</p><p className="text-sm opacity-80">Vols Directs</p></div>
                        <div className="omra-v2-highlight-card rounded-lg p-3 text-center"><p className="font-bold text-xl">Complet</p><p className="text-sm opacity-80">Accompagnement</p></div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 omra-v2-tabs overflow-x-auto">
                            <nav className="flex justify-around">
                                <TabButton tabId="journey" title="Le Voyage" />
                                <TabButton tabId="hotels" title="Hébergement" />
                                <TabButton tabId="pricing" title="Tarifs & Inclusions" />
                                <TabButton tabId="info" title="Infos Pratiques" />
                            </nav>
                        </div>
                        
                        <div className="omra-v2-tab-content">
                            {activeTab === 'journey' && stay.program && (
                                <Section>
                                    <div className="omra-v2-timeline">
                                        {stay.program.map(p => <TimelineItem key={p.day} day={p.day} title={p.title} description={p.description} />)}
                                    </div>
                                </Section>
                            )}
                             {activeTab === 'hotels' && stay.hotelsInfo && (
                               <Section title="Hôtels du séjour">
                                   <div className="space-y-8">
                                       {stay.hotelsInfo.map(hotel => (
                                           <div key={hotel.name} className="grid md:grid-cols-3 gap-6 items-center">
                                               <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover rounded-lg shadow-md md:col-span-1" />
                                               <div className="md:col-span-2">
                                                   <h4 className="font-bold text-xl text-omra-green">{hotel.name} ({hotel.location})</h4>
                                                   <p className="mt-2 text-gray-600">{hotel.description}</p>
                                               </div>
                                           </div>
                                       ))}
                                   </div>
                               </Section>
                            )}
                            {activeTab === 'pricing' && (
                                <Section title="Tarifs & Inclusions">
                                    {stay.roomPricing && (
                                        <div className="mb-8">
                                            <h4 className="font-bold text-xl text-omra-green mb-4">Tarifs par personne</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-omra-gold/10">
                                                            <th className="p-3 border-b-2 border-omra-gold text-omra-green">Type de Chambre</th>
                                                            <th className="p-3 border-b-2 border-omra-gold text-omra-green text-right">Prix</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {stay.roomPricing.map(rp => (
                                                            <tr key={rp.roomType} className="odd:bg-white even:bg-gray-50/50">
                                                                <td className="p-3 border-b border-gray-200">{rp.roomType}</td>
                                                                <td className="p-3 border-b border-gray-200 text-right font-semibold">{parseAndConvertPrice(rp.price)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                       {stay.included && stay.included.length > 0 && <div><h4 className="font-bold text-xl text-omra-green mb-4">Le Forfait Inclut</h4><ul className="space-y-2">{stay.included.map(item => <li key={item} className="flex items-start"><CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /><span>{item}</span></li>)}</ul></div>}
                                       {stay.excluded && stay.excluded.length > 0 && <div><h4 className="font-bold text-xl text-omra-green mb-4">Le Forfait n'inclut Pas</h4><ul className="space-y-2">{stay.excluded.map(item => <li key={item} className="flex items-start"><XIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" /><span>{item}</span></li>)}</ul></div>}
                                    </div>
                                </Section>
                            )}
                             {activeTab === 'info' && (
                                <Section title="Informations Pratiques">
                                    {stay.notes && stay.notes.length > 0 && (
                                        <div className="prose max-w-none">
                                            <h4>Notes Importantes</h4>
                                            <ul>
                                                {stay.notes.map(note => <li key={note}>{note}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </Section>
                             )}
                        </div>
                    </div>

                    <aside className="sticky top-24 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg border">
                             <span className="text-sm text-gray-500">à partir de</span>
                             <p className="text-4xl font-bold text-omra-gold">{convertPrice(stay.price)}</p>
                             <span className="text-xs text-gray-500">par personne</span>
                             <button onClick={onQuoteRequest} className="mt-4 w-full bg-omra-gold text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                                Demander un devis
                            </button>
                             <button onClick={() => setCurrentPage(Page.Booking, { id: stay.id })} className="mt-2 w-full bg-omra-green text-white font-bold py-3 px-4 rounded-lg hover:bg-green-800 transition-colors">
                                Réserver
                            </button>
                        </div>
                        <SocialShare />
                    </aside>
                </div>
            </div>
        </div>
    );
};


// --- MAIN DETAIL COMPONENT (Selector) ---
const StayDetail: React.FC = () => {
    const { getSelectedStay } = useContext(AppContext);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const stay = getSelectedStay();

    if (!stay) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Chargement du séjour...</h2>
                    <p className="text-gray-600 mt-2">Veuillez patienter.</p>
                </div>
            </div>
        );
    }
    
    const handleQuoteRequest = () => {
        setIsQuoteModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsQuoteModalOpen(false);
    }
    
    // Logic to decide which view to render based on stay.type
    if (stay.type === 'hotel' || stay.type === 'promo') {
        return <HotelDetailView stay={stay} onQuoteRequest={handleQuoteRequest} />;
    }

    if (stay.type === 'omra') {
        return <OmraDetailView stay={stay} onQuoteRequest={handleQuoteRequest} />;
    }

    // Default to trip view
    return (
        <>
            <TripDetailView stay={stay} onQuoteRequest={handleQuoteRequest} />
            <QuoteRequestModal stay={stay} isOpen={isQuoteModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default StayDetail;
