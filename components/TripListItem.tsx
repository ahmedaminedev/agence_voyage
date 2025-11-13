
import React, { useContext } from 'react';
import type { Stay } from '../types';
import { AppContext, Page } from '../context/AppContext';

const TripListItem: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);

    const isQuoteTrip = stay.type === 'organise' || stay.type === 'a-la-carte';

    const handleBooking = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentPage(Page.Booking, { id: stay.id });
    };

    const handleDetails = () => {
        setCurrentPage(Page.StayDetail, { id: stay.id });
    };

    const onButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isQuoteTrip) {
            handleDetails();
        } else {
            handleBooking(e);
        }
    };

    const buttonText = isQuoteTrip ? "Découvrir l'offre" : "Réserver";

    return (
        <div onClick={handleDetails} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer overflow-hidden border border-gray-100">
            {/* Image Section */}
            <div className="md:w-1/3 relative">
                <img src={stay.imageUrl} alt={stay.title} className="w-full h-48 md:h-full object-cover" />
                {stay.type === 'promo' && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold uppercase px-3 py-1">Super Promo</div>
                )}
            </div>

            {/* Details Section */}
            <div className="p-4 flex-grow md:w-1/3">
                <h3 className="text-xl font-bold font-serif text-brand-blue-dark">{stay.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{stay.destination}</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.round(stay.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-2">{stay.reviews.length} avis</span>
                </div>
                <div className="mt-3 text-sm text-gray-700 space-y-1">
                    <p><span className="font-semibold">Durée:</span> {stay.duration} jours</p>
                    {stay.included.slice(0, 2).map((item, i) => (
                        <p key={i} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* Price & Booking Section */}
            <div className="p-4 bg-gray-50 md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l">
                <span className="text-sm text-gray-600">à partir de</span>
                <p className="text-3xl font-bold text-brand-orange">{convertPrice(stay.price)}</p>
                {stay.originalPrice && (
                     <s className="text-red-500 text-sm">{convertPrice(stay.originalPrice)}</s>
                )}
                <span className="text-xs text-gray-500 mb-4">par personne</span>
                <button onClick={onButtonClick} className="w-full md:w-auto btn-gradient text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default TripListItem;
