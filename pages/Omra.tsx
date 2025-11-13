import React, { useContext, useState, useMemo } from 'react';
import { omraPackages } from '../constants';
import { AppContext, Page } from '../context/AppContext';
import { Stay } from '../types';

// --- ICONS ---
const GuidanceIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M17.5 14.5c0-2-1.5-4-3.5-4s-3.5 2-3.5 4 1.5 4 3.5 4 3.5-2 3.5-4z" />
        <path d="M8 12.5c0-1.5-1-3-2.5-3S3 11 3 12.5 4 15.5 5.5 15.5 8 14 8 12.5z" />
        <path d="M17.5 9.5c0-1.5-1-3-2.5-3s-2.5 1.5-2.5 3 1 3 2.5 3 2.5-1.5 2.5-3z" />
        <path d="M3 7.5c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
        <path d="M21 5.5c0-1.5-1-3-2.5-3S16 4 16 5.5 17 8.5 18.5 8.5 21 7 21 5.5z" />
    </svg>
);
const ProximityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 12.5V3.74a1 1 0 0 1 1-1h13.02a1 1 0 0 1 1 1v8.76" />
        <path d="M6.5 2.74V7.5" />
        <path d="M17.5 2.74V7.5" />
        <path d="M21.5 12.5h-19" />
        <path d="m16 17-4 4-4-4" />
        <path d="M12 21V12" />
    </svg>
);
const QualityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.47 13.03a4.01 4.01 0 0 0-3.47-3.47" />
        <path d="M11.5 2.03a4.01 4.01 0 0 0-3.47 3.47" />
        <path d="M4.53 11.03a4.01 4.01 0 0 0 3.47 3.47" />
        <path d="m11.5 21.97-1.21-.82a10.02 10.02 0 0 1-5.26-5.26L4.21 14.5h15.58l-.82 1.39a10.02 10.02 0 0 1-5.26 5.26L11.5 21.97z" />
        <path d="M12.5 7.97a4.01 4.01 0 0 0-3.47-3.47" />
    </svg>
);


const OmraCard: React.FC<{ stay: Stay }> = ({ stay }) => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);
    return (
        <div
            onClick={() => setCurrentPage(Page.StayDetail, { id: stay.id })}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-yellow-600 flex flex-col h-full"
        >
            <div className="relative">
                <img src={stay.imageUrl} alt={stay.title} className="w-full h-56 object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-bl-lg">
                    {stay.duration} Jours
                </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-serif text-gray-800 group-hover:text-yellow-700 transition-colors">{stay.title}</h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow">{stay.description}</p>
                <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-xs text-gray-500">Dès</span>
                        <p className="font-bold text-2xl" style={{color: '#b08d57'}}>{convertPrice(stay.price)}</p>
                    </div>
                    <span className="font-semibold text-yellow-700 group-hover:underline">
                        Voir les détails &rarr;
                    </span>
                </div>
            </div>
        </div>
    );
};

const WhyUsItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="text-center p-6">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-yellow-600/10 text-yellow-700 mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 font-serif">{title}</h3>
        <p className="mt-2 text-gray-600">{text}</p>
    </div>
);

const SearchFilters: React.FC<{
    filters: any;
    setFilters: (filters: any) => void;
    departureMonths: { value: string; label: string }[];
    durations: string[];
}> = ({ filters, setFilters, departureMonths, durations }) => {
    
    const { convertPriceValue, convertPrice, convertFromSelectedCurrencyToTND } = useContext(AppContext);
    
    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev: any) => ({ ...prev, [key]: value }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueInSelectedCurrency = parseInt(e.target.value, 10);
        const valueInTND = convertFromSelectedCurrencyToTND(valueInSelectedCurrency);
        handleFilterChange('maxPrice', valueInTND);
    };
    
    const displayedMaxPrice = Math.round(convertPriceValue(filters.maxPrice));
    const sliderAbsMax = Math.round(convertPriceValue(7000));
    const sliderAbsMin = Math.round(convertPriceValue(3000));

    const rangePercentage = ((displayedMaxPrice - sliderAbsMin) / (sliderAbsMax - sliderAbsMin)) * 100;

    return (
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-end">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mois de départ</label>
                    <select 
                        value={filters.departure} 
                        onChange={(e) => handleFilterChange('departure', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                        <option value="all">Tous les mois</option>
                        {departureMonths.map(month => <option key={month.value} value={month.value}>{month.label}</option>)}
                    </select>
                </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Durée</label>
                    <select 
                        value={filters.duration}
                        onChange={(e) => handleFilterChange('duration', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                        <option value="all">Toutes</option>
                        {durations.map(d => <option key={d} value={d}>{d} jours</option>)}
                    </select>
                </div>
                <div className="lg:col-span-2">
                     <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">Budget maximum: <span className="font-bold text-lg text-omra-gold">{convertPrice(filters.maxPrice)}</span></label>
                     <div className="range-slider-container omra-range-slider-container">
                        <div className="range-slider-track"></div>
                        <div className="range-slider-range" style={{ width: `${rangePercentage}%` }}></div>
                        <input type="range" min={sliderAbsMin} max={sliderAbsMax} step="10" value={displayedMaxPrice} onChange={handlePriceChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};


const Omra: React.FC = () => {
    const { setCurrentPage } = useContext(AppContext);
    
    const [filters, setFilters] = useState({
        departure: 'all',
        maxPrice: 7000,
        duration: 'all',
    });

    const departureMonths = useMemo(() => {
        const months = new Map<string, string>();
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        omraPackages.forEach(pkg => {
            pkg.tariffs?.forEach(t => {
                const match = t.departure.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                if (match) {
                    const monthIndex = parseInt(match[2], 10) - 1;
                    const key = `${match[3]}-${match[2]}`;
                    if (!months.has(key)) {
                        months.set(key, `${monthNames[monthIndex]} ${match[3]}`);
                    }
                }
            });
        });
        return Array.from(months.entries()).sort().map(([key, label]) => ({ value: key.split('-')[1], label }));
    }, []);
    
    const durations = useMemo(() => {
        const uniqueDurations = [...new Set(omraPackages.map(p => p.duration.toString()))];
        return uniqueDurations.sort((a,b) => parseInt(a) - parseInt(b));
    }, []);

    const filteredPackages = useMemo(() => {
      return omraPackages.filter(pkg => {
        if (filters.maxPrice < pkg.price) return false;
        if (filters.duration !== 'all' && filters.duration !== pkg.duration.toString()) return false;
        if (filters.departure !== 'all') {
            const departureMonth = parseInt(filters.departure, 10);
            const packageHasMonth = pkg.tariffs?.some(t => {
                const match = t.departure.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                if (match) {
                    const month = parseInt(match[2], 10);
                    return month === departureMonth;
                }
                return false;
            });
            if (!packageHasMonth) return false;
        }
        return true;
      });
    }, [filters]);

    return (
        <div className="omra-bg">
            {/* Hero Section */}
            <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/omra-hero/1920/600')" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-6xl font-serif font-bold drop-shadow-xl">OMRA MABROURA</h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto drop-shadow-lg">Vivez une expérience spirituelle inoubliable avec nos forfaits Omra conçus pour votre sérénité.</p>
                </div>
            </section>
            
            {/* Packages Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SearchFilters filters={filters} setFilters={setFilters} departureMonths={departureMonths} durations={durations} />
                    
                    <div className="mt-16">
                        {filteredPackages.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPackages.map(pkg => (
                                    <OmraCard key={pkg.id} stay={pkg} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white rounded-lg shadow-md flex flex-col items-center">
                                <h3 className="text-xl font-semibold text-gray-800">Aucun forfait ne correspond à vos critères</h3>
                                <p className="text-gray-600 mt-2">Essayez d'ajuster vos filtres pour trouver votre voyage spirituel.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

             {/* Why Us Section */}
            <section className="py-20 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 font-serif">Pourquoi nous faire confiance pour votre Omra ?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <WhyUsItem 
                            icon={<GuidanceIcon />}
                            title="Accompagnement et Guide"
                            text="Un guide spirituel et une assistance logistique vous accompagnent tout au long de votre séjour."
                        />
                        <WhyUsItem
                           icon={<ProximityIcon />}
                           title="Hôtels de Proximité"
                           text="Nous sélectionnons des hôtels proches des lieux saints pour faciliter vos déplacements et vos prières."
                        />
                        <WhyUsItem
                           icon={<QualityIcon />}
                           title="Vols de Qualité"
                           text="Nous collaborons avec les meilleures compagnies aériennes pour garantir votre confort et votre sécurité."
                        />
                    </div>
                 </div>
            </section>

             {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-cover bg-center rounded-xl p-12 text-center text-white relative overflow-hidden" style={{backgroundImage: "url('https://picsum.photos/seed/omra-contact/1200/400')"}}>
                        <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
                        <div className="relative">
                            <h2 className="text-4xl font-bold font-serif">Prêt pour votre voyage spirituel ?</h2>
                            <p className="mt-4 max-w-2xl mx-auto">Contactez nos conseillers spécialisés Omra pour un devis personnalisé et des réponses à toutes vos questions.</p>
                            <button onClick={() => setCurrentPage(Page.Contact)} className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg">
                                Nous Contacter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Omra;
