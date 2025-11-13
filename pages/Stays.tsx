
import React, { useState, useMemo, useContext } from 'react';
import { AppContext, Page } from '../context/AppContext';
import { allStays } from '../constants';
import StayCard from '../components/StayCard';
import type { Stay, StayType } from '../types';

// --- ICONS ---
const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);
const ListIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
);
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

const amenityIcons: { [key: string]: React.ReactNode } = {
    'Piscine': '🏊', 'Plage': '🏖️', 'Restaurant': '🍽️',
    'Club Enfants': '🧸', 'Animation': '🎤', 'Bar': '🍸', 'Spa': '💆',
    'Wi-Fi Gratuit': '📶', 'Climatisation': '💨', 'Garderie d\'enfants': '👶',
    'Centre de remise en forme': '💪', 'Parking gratuit': '🅿️',
};

// --- NEW LIST ITEM COMPONENT ---
const HotelListItem: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);
    
    return (
        <div 
            onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer overflow-hidden border border-gray-100 group"
        >
            <div className="md:w-1/3 xl:w-1/4 relative">
                <img src={stay.imageUrl} alt={stay.title} className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 {stay.originalPrice && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-br-lg">Promo</div>
                )}
            </div>
            <div className="p-5 flex-grow flex flex-col md:w-2/3 xl:w-3/4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(stay.rating)} />)}
                            <span className="text-xs text-gray-500 ml-2">{stay.reviews.length} avis</span>
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-gray-800 group-hover:text-brand-blue transition-colors mt-1">{stay.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                            <span>{stay.destination}</span>
                            {stay.location?.lat && stay.location?.lng && (
                                <>
                                    <span className="mx-2">&bull;</span>
                                    <a 
                                        href={`https://www.google.com/maps/search/?api=1&query=${stay.location.lat},${stay.location.lng}`} 
                                        target="_blank" rel="noopener noreferrer" 
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-brand-blue hover:underline font-semibold"
                                    >
                                        Voir sur la carte
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="text-right flex-shrink-0 pl-4">
                        {stay.originalPrice && (
                            <s className="text-red-500 text-base">{convertPrice(stay.originalPrice)}</s>
                        )}
                        <p className="text-3xl font-bold text-brand-orange">{convertPrice(stay.price)}</p>
                        <span className="text-sm text-gray-500">par nuit</span>
                    </div>
                </div>

                <div className="flex-grow my-4">
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{stay.longDescription}</p>
                    {stay.mainAmenities && stay.mainAmenities.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                            {stay.mainAmenities.slice(0, 5).map(amenity => (
                                <div key={amenity} className="flex items-center text-sm text-gray-700">
                                    <span className="text-base mr-1.5">{amenityIcons[amenity] || '✔️'}</span>
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 text-right">
                    <button 
                        onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
                        className="btn-gradient text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        Voir les détails
                    </button>
                </div>
            </div>
        </div>
    );
};


const Stays: React.FC = () => {
  const { currentPage, convertPrice, convertPriceValue, convertFromSelectedCurrencyToTND } = useContext(AppContext);

  const [filters, setFilters] = useState({
    destinations: new Set<string>(),
    types: new Set<string>(),
    minPrice: 0,
    maxPrice: 15000,
    rating: 0,
  });
  const [sort, setSort] = useState('recommended');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  const handleCheckboxChange = (filter: 'destinations' | 'types', value: string) => {
    setFilters(prev => {
      const newSet = new Set(prev[filter]);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return { ...prev, [filter]: newSet };
    });
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInSelectedCurrency = parseInt(e.target.value, 10);
    const valueInTND = convertFromSelectedCurrencyToTND(valueInSelectedCurrency);
    setFilters({ ...filters, maxPrice: valueInTND });
  };
  
  const handleRatingChange = (newRating: number) => {
    setFilters({ ...filters, rating: newRating });
  };

  const staysSource = useMemo(() => {
    if (currentPage.params?.type) {
      return allStays.filter(s => s.type === currentPage.params.type);
    }
    if (currentPage.params?.destination) {
        return allStays.filter(s => s.destination === currentPage.params.destination);
    }
    return allStays.filter(s => s.type === 'hotel' || s.type === 'promo');
  }, [currentPage.params]);

  const filteredAndSortedStays = useMemo(() => {
    let filtered = staysSource.filter(stay => {
      const { destinations, types, minPrice, maxPrice, rating } = filters;
      if (destinations.size > 0 && !destinations.has(stay.destination)) return false;
      if (types.size > 0 && !types.has(stay.type)) return false;
      if (stay.price < minPrice || stay.price > maxPrice) return false;
      if (rating > 0 && stay.rating < rating) return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a,b) => b.rating - a.rating);
        break;
      default: // recommended
        filtered.sort((a, b) => (b.reviews?.length ?? 0) - (a.reviews?.length ?? 0));
    }
    return filtered;
  }, [filters, sort, staysSource]);

  const availableDestinations = useMemo(() => [...new Set(staysSource.map(s => s.destination))], [staysSource]);
  const availableTypes = useMemo(() => [...new Set(staysSource.map(s => s.type))], [staysSource]);
  const pageTitle = currentPage.params?.type ? `Voyages ${currentPage.params.type}` : currentPage.params?.destination ? `Hôtels à ${currentPage.params.destination}` : 'Hôtels en Tunisie';

  const FilterCheckboxes: React.FC<{title: string, options: string[], selected: Set<string>, onChange: (value: string) => void}> = ({ title, options, selected, onChange }) => (
    <div>
      <h4 className="font-semibold mb-2 text-gray-700">{title}</h4>
      <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
        {options.map(option => (
          <label key={option} className="flex items-center text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" checked={selected.has(option)} onChange={() => onChange(option)} className="custom-checkbox" />
            <span className="ml-2 capitalize">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const StarRatingFilter: React.FC<{currentRating: number, onChange: (rating: number) => void}> = ({ currentRating, onChange }) => (
    <div>
      <h4 className="font-semibold mb-2 text-gray-700">Note minimale</h4>
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <button key={ratingValue} onClick={() => onChange(ratingValue)} className="focus:outline-none">
              <StarIcon filled={ratingValue <= currentRating} />
            </button>
          )
        })}
      </div>
    </div>
  );
  
  const displayedMaxPrice = Math.round(convertPriceValue(filters.maxPrice));
  const sliderAbsMax = Math.round(convertPriceValue(15000));

  return (
    <div className="min-h-screen">
       <div className="bg-cover bg-center py-20" style={{backgroundImage: "url('https://picsum.photos/seed/stays-hero/1920/400')"}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/30 backdrop-blur-sm py-8 rounded-xl">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">{pageTitle}</h1>
                <p className="text-lg text-white mt-2 drop-shadow-md">Affinez votre recherche pour trouver le séjour parfait.</p>
            </div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Affinez vos résultats</h3>
              
              <FilterCheckboxes title="Destinations" options={availableDestinations} selected={filters.destinations} onChange={(val) => handleCheckboxChange('destinations', val)} />
              <hr/>
              <FilterCheckboxes title="Types de séjour" options={availableTypes} selected={filters.types} onChange={(val) => handleCheckboxChange('types', val)} />
              <hr/>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Prix maximum</h4>
                <input type="range" min="0" max={sliderAbsMax} value={displayedMaxPrice} onChange={handlePriceChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange" />
                <div className="text-right text-sm font-medium text-gray-600 mt-1">{convertPrice(filters.maxPrice)}</div>
              </div>
              <hr/>
              <StarRatingFilter currentRating={filters.rating} onChange={handleRatingChange} />

            </div>
          </aside>

          {/* Stays Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border flex-wrap gap-4">
              <p className="text-sm font-medium text-gray-600">
                {filteredAndSortedStays.length} séjour{filteredAndSortedStays.length > 1 ? 's' : ''} trouvé{filteredAndSortedStays.length > 1 ? 's' : ''}
              </p>
               <div className="flex items-center gap-4">
                    <div className="flex items-center p-1 bg-gray-100 rounded-lg">
                        <button onClick={() => setLayout('grid')} className={`p-1.5 rounded-md ${layout === 'grid' ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500 hover:bg-gray-200'}`} aria-label="Grid View">
                            <GridIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => setLayout('list')} className={`p-1.5 rounded-md ${layout === 'list' ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500 hover:bg-gray-200'}`} aria-label="List View">
                            <ListIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <select name="sort" id="sort" value={sort} onChange={e => setSort(e.target.value)} className="border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent text-sm p-2 bg-white transition">
                        <option value="recommended">Recommandé</option>
                        <option value="price-asc">Prix croissant</option>
                        <option value="price-desc">Prix décroissant</option>
                        <option value="rating">Meilleures notes</option>
                    </select>
               </div>
            </div>

            {filteredAndSortedStays.length > 0 ? (
                layout === 'grid' ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredAndSortedStays.map(stay => <StayCard key={stay.id} stay={stay} />)}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredAndSortedStays.map(stay => <HotelListItem key={stay.id} stay={stay} />)}
                    </div>
                )
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-brand-orange/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 12H9" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">Aucun séjour ne correspond à vos critères</h3>
                    <p className="text-gray-600 mt-2">Essayez d'ajuster vos filtres ou d'élargir votre recherche.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Stays;
