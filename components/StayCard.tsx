
import React, { useContext } from 'react';
import type { Stay, StayType } from '../types';
import { AppContext, Page } from '../context/AppContext';

const LocationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.42-.25.692-.455.272-.204.57-.45.868-.72.297-.269.62-.59.924-.963.303-.372.583-.797.81-1.262a9.43 9.43 0 00.65-1.618c.203-.65.327-1.328.39-2.028.062-.7.074-1.412.03-2.128a9.042 9.042 0 00-1.826-5.245c-.582-.839-1.318-1.542-2.154-2.102a9.042 9.042 0 00-5.245-1.826 9.25 9.25 0 00-2.128.03 9.43 9.43 0 00-2.028.39 9.43 9.43 0 00-1.618.65c-.465.227-.89.507-1.262.81-.373.304-.694.627-.963.924-.27.298-.516.598-.72.868-.205.272-.355.508-.455.692a5.741 5.741 0 00-.14.282l-.008.018-.003.006-.001.002C.11 19.02 0 19 0 19s.11.02.308-.066l.002-.001zM10 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const StayCard: React.FC<{ stay: Stay }> = ({ stay }) => {
  const { setCurrentPage, convertPrice } = useContext(AppContext);

  const typeStyles: { [key in StayType]: { bg: string; text: string } } = {
    beach: { bg: 'bg-sky-100', text: 'text-sky-800' },
    adventure: { bg: 'bg-emerald-100', text: 'text-emerald-800' },
    cultural: { bg: 'bg-violet-100', text: 'text-violet-800' },
    hotel: { bg: 'bg-blue-100', text: 'text-blue-800' },
    omra: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    circuit: { bg: 'bg-green-100', text: 'text-green-800' },
    circuits: { bg: 'bg-green-100', text: 'text-green-800' },
    organise: { bg: 'bg-indigo-100', text: 'text-indigo-800' },
    'a-la-carte': { bg: 'bg-pink-100', text: 'text-pink-800' },
    'bien-etre': { bg: 'bg-purple-100', text: 'text-purple-800' },
    promo: { bg: 'bg-red-100', text: 'text-red-800' },
    vols: { bg: 'bg-gray-100', text: 'text-gray-800' },
  };

  return (
    <div 
      onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
      className="stay-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 group w-full cursor-pointer flex flex-col h-full border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img src={stay.imageUrl} alt={stay.title} className="stay-card-image w-full h-52 object-cover transition-transform duration-500" />
        <div className={`absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider ${typeStyles[stay.type]?.bg || 'bg-gray-100'} ${typeStyles[stay.type]?.text || 'text-gray-800'}`}>
          {stay.type}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500">
            <LocationIcon className="w-4 h-4 mr-1.5 rtl:ml-1.5 rtl:mr-0 text-gray-400" />
            <span>{stay.destination}</span>
            <span className="mx-2">&bull;</span>
            <span>{stay.duration} {stay.duration > 1 ? 'jours' : 'jour'}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold font-serif text-gray-900 group-hover:text-brand-blue transition-colors duration-200">{stay.title}</h3>
        <p className="mt-2 text-sm text-gray-600 flex-grow">{stay.description}</p>
        
        <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
          <div className='text-left'>
            <span className="text-sm text-gray-500">
                {stay.originalPrice && <s className="mr-2 rtl:ml-2 rtl:mr-0 text-red-500">{convertPrice(stay.originalPrice)}</s>}
                À partir de
            </span>
            <p className={`text-2xl font-bold text-brand-orange ${stay.type === 'promo' ? 'animate-pulse-price' : ''}`}>{convertPrice(stay.price)}</p>
          </div>
          <div className="flex items-center text-brand-blue font-semibold text-sm">
              Voir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="stay-card-arrow h-4 w-4 ml-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
