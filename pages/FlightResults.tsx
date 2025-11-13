import React, { useState, useMemo, useContext } from 'react';
import { AppContext, Page } from '../context/AppContext';
import { flightResults } from '../constants';
import { Flight, FlightLegDetails } from '../types';

// --- ICONS ---
const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
const CalendarIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
const UsersIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>;
const PlaneIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.789 0l-2 4a1 1 0 00.894 1.447H8l-2 4a1 1 0 101.788 1l1.232-2.463 1.232 2.463a1 1 0 101.788-1l-2-4h1.106a1 1 0 00.894-1.447l-2-4z" /></svg>;

const CalendarIconOrange: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
const ClockIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-3 w-3"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" /></svg>;
const InfoIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
const AirlineIcon: React.FC = () => <div className="w-4 h-4 border-2 border-blue-600 bg-white rounded-full flex-shrink-0"></div>;

// --- NEW FLIGHT ICONS ---
const planePath = "M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z";

const PlaneRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d={planePath}/>
    </svg>
);

const PlaneLeftIcon: React.FC<{className?: string}> = ({className}) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path transform="scale(-1, 1) translate(-24, 0)" d={planePath}/>
    </svg>
);


// --- Reusable Components ---

const FlightLegRow: React.FC<{ leg: FlightLegDetails; type: 'Départ' | 'Retour'; date: string }> = ({ leg, type, date }) => {
    return (
        <div className="py-4 px-2">
            <div className="flex items-center mb-2">
                <CalendarIconOrange className="h-5 w-5 text-brand-orange" />
                <span className="font-semibold text-gray-700 ml-2 text-base">{type} en date du {date}</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
                <AirlineIcon />
                <span className="text-sm font-medium text-gray-700">{leg.airline}</span>
            </div>

            <div className="grid grid-cols-[auto_auto_1fr_auto_auto] items-center gap-x-2 md:gap-x-4">
                {/* Departure Time/Airport */}
                <div className="text-left">
                    <p className="font-bold text-lg text-gray-800">{leg.departureTime}</p>
                    <p className="text-sm font-semibold text-gray-600">{leg.departureAirport}</p>
                </div>

                <PlaneRightIcon className={`h-6 w-6 ${type === 'Départ' ? 'text-red-500' : 'text-green-500'}`} />
                
                {/* Path Visual */}
                <div className="text-center mx-1 md:mx-2">
                    <p className="text-xs text-gray-600 mb-1">Vol direct</p>
                    <div className="w-full h-px border-t-2 border-dotted border-gray-400"></div>
                    <div className="flex items-center justify-center text-xs text-gray-600 mt-1">
                        <ClockIcon className="h-4 w-4 text-gray-500" />
                        <span className="ml-1">{leg.duration}</span>
                    </div>
                </div>

                <PlaneLeftIcon className={`h-6 w-6 ${type === 'Départ' ? 'text-red-500' : 'text-green-500'}`} />

                {/* Arrival Time/Airport */}
                <div className="text-right">
                    <p className="font-bold text-lg text-gray-800">{leg.arrivalTime}</p>
                    <p className="text-sm font-semibold text-gray-600">{leg.arrivalAirport}</p>
                </div>
            </div>

             <div className="flex justify-end mt-2">
                <button className="text-sm font-semibold text-blue-600 hover:underline flex items-center whitespace-nowrap">
                    Détails du vol
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

const FlightCard: React.FC<{ flight: Flight }> = ({ flight }) => {
    const { setCurrentPage, convertPrice } = useContext(AppContext);
    // Dummy dates for display. In a real app, these would come from the search query.
    const departureDateStr = "28-09-2025";
    const returnDateStr = "31-10-2025";

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row overflow-hidden border border-orange-300 mb-6">
            <div className="lg:w-[70%] p-2 md:p-4 divide-y divide-gray-200">
                <FlightLegRow leg={flight.departureLeg} type="Départ" date={departureDateStr} />
                <FlightLegRow leg={flight.returnLeg} type="Retour" date={returnDateStr} />
            </div>
            <div className="lg:w-[30%] bg-brand-orange text-white p-6 flex flex-col justify-center items-center text-center space-y-4">
                <p className="text-3xl font-bold">{convertPrice(flight.price)}</p>
                <div className="flex items-center space-x-2">
                    <InfoIcon />
                    <span>Conditions</span>
                </div>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage(Page.FlightBooking, { id: flight.id });
                    }}
                    className="w-full bg-transparent border-2 border-white text-white font-bold py-2.5 px-6 rounded-md hover:bg-white hover:text-brand-orange transition-colors duration-300"
                >
                    RÉSERVER
                </button>
            </div>
        </div>
    );
};


const CollapsibleFilterSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="py-4 border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center group">
                <h4 className="font-semibold text-gray-800 text-lg group-hover:text-brand-blue">{title}</h4>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 group-hover:text-brand-blue ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="pt-4">{children}</div>
                </div>
            </div>
        </div>
    );
};

const PriceRangeSlider: React.FC<{
    min: number; max: number;
    value: number[];
    onChange: (values: number[]) => void;
}> = ({ min, max, value, onChange }) => {
    const { convertPriceValue, convertPrice, convertFromSelectedCurrencyToTND } = useContext(AppContext);
    
    const minTND = 600;
    const maxTND = 1100;

    const [minValue, setMinValue] = useState(value[0]);
    const [maxValue, setMaxValue] = useState(value[1]);
    
    const sliderMin = Math.round(convertPriceValue(minTND));
    const sliderMax = Math.round(convertPriceValue(maxTND));


    React.useEffect(() => {
        setMinValue(Math.round(convertPriceValue(value[0])));
        setMaxValue(Math.round(convertPriceValue(value[1])));
    }, [value, convertPriceValue]);
    
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.min(Number(e.target.value), maxValue - 10);
        setMinValue(val);
        onChange([convertFromSelectedCurrencyToTND(val), convertFromSelectedCurrencyToTND(maxValue)]);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.max(Number(e.target.value), minValue + 10);
        setMaxValue(val);
        onChange([convertFromSelectedCurrencyToTND(minValue), convertFromSelectedCurrencyToTND(val)]);
    };

    const minPos = ((minValue - sliderMin) / (sliderMax - sliderMin)) * 100;
    const maxPos = ((maxValue - sliderMin) / (sliderMax - sliderMin)) * 100;

    return (
        <div>
             <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-4">
                <span>{convertPrice(value[0])}</span>
                <span>{convertPrice(value[1])}</span>
            </div>
            <div className="range-slider-container">
                <div className="range-slider-track"></div>
                <div className="range-slider-range" style={{ left: `${minPos}%`, width: `${maxPos - minPos}%` }}></div>
                <input type="range" min={sliderMin} max={sliderMax} value={minValue} onChange={handleMinChange} />
                <input type="range" min={sliderMin} max={sliderMax} value={maxValue} onChange={handleMaxChange} />
            </div>
        </div>
    );
};

const FlightResults: React.FC = () => {
    const { currentPage, setCurrentPage } = useContext(AppContext);
    const [priceRange, setPriceRange] = useState([600, 1100]);
    const [sort, setSort] = useState('price-asc');
    
    const airlines = [...new Set(flightResults.map(f => f.departureLeg.airline))];

    const searchParams = currentPage.params;
    const from = searchParams?.from || 'Tunis';
    const to = searchParams?.to || 'Paris';
    const departureDate = new Date(searchParams?.departureDate || Date.now()).toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short' });
    const returnDate = new Date(searchParams?.returnDate || Date.now() + 86400000 * 7).toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short' });
    const passengers = searchParams?.passengers?.adults || 1;
    const flightClass = searchParams?.flightClass || 'Economique';
    
    const sortedResults = useMemo(() => {
       return [...flightResults].sort((a,b) => {
            switch(sort) {
                case 'price-desc': return b.price - a.price;
                default: return a.price - b.price;
            }
       })
    }, [sort]);

    return (
        <div className="bg-gray-100">
             <div className="bg-white py-4 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-x-8 gap-y-2">
                        <div className="flex items-center space-x-6 text-gray-700">
                            <div className="flex items-center space-x-2"><PlaneIcon className="w-5 h-5 text-brand-blue"/> <span className="font-bold">{from} &rarr; {to}</span></div>
                            <div className="flex items-center space-x-2"><CalendarIcon className="w-5 h-5 text-brand-blue"/> <span className="font-semibold">{departureDate} - {returnDate}</span></div>
                            <div className="flex items-center space-x-2"><UsersIcon className="w-5 h-5 text-brand-blue"/> <span className="font-semibold">{passengers} passager(s), {flightClass}</span></div>
                        </div>
                        <button onClick={() => setCurrentPage(Page.Flights)} className="bg-brand-orange/10 text-brand-orange-dark font-bold py-2 px-4 rounded-lg hover:bg-brand-orange/20 transition-colors">
                            Modifier la recherche
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24 bg-white p-5 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Filtres</h3>
                            <CollapsibleFilterSection title="Budget" defaultOpen={true}>
                                <PriceRangeSlider min={600} max={1100} value={priceRange} onChange={setPriceRange} />
                            </CollapsibleFilterSection>

                            <CollapsibleFilterSection title="Escales" defaultOpen={true}>
                                <div className="space-y-3">
                                    <label className="flex items-center text-gray-700 hover:text-brand-blue cursor-pointer"><input type="checkbox" className="custom-checkbox" defaultChecked /> <span className="ml-3">Vol direct</span></label>
                                    <label className="flex items-center text-gray-700 hover:text-brand-blue cursor-pointer"><input type="checkbox" className="custom-checkbox" defaultChecked /> <span className="ml-3">1 escale</span></label>
                                    <label className="flex items-center text-gray-700 hover:text-brand-blue cursor-pointer"><input type="checkbox" className="custom-checkbox" /> <span className="ml-3">2 escales ou plus</span></label>
                                </div>
                            </CollapsibleFilterSection>
                            
                            <CollapsibleFilterSection title="Compagnies aériennes">
                                <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                                    {airlines.map(airline => (
                                        <label key={airline} className="flex items-center text-gray-700 hover:text-brand-blue cursor-pointer"><input type="checkbox" className="custom-checkbox" defaultChecked /> <span className="ml-3">{airline}</span></label>
                                    ))}
                                </div>
                            </CollapsibleFilterSection>
                        </div>
                    </aside>

                    <main className="lg:w-3/4">
                        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                            <p className="text-lg font-semibold">{sortedResults.length} vols trouvés</p>
                             <label className="flex items-center gap-2 text-sm">
                                <span className="font-medium">Trier par:</span>
                                <select value={sort} onChange={e => setSort(e.target.value)} className="border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-brand-orange focus:border-brand-orange transition">
                                    <option value="price-asc">Prix (le moins cher)</option>
                                    <option value="price-desc">Prix (le plus cher)</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            {sortedResults.map(flight => <FlightCard key={flight.id} flight={flight} />)}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FlightResults;
